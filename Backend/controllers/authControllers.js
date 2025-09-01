import validateRegisterInput from "../utlis/validateRegister.js";
import User from "../models/userSchema.js";
import hashPassword from "../utlis/hashPassword.js";
import validateLoginInput from "../utlis/validateLogin.js";
import comparePassword from "../utlis/verifyPassword.js";
import TokenGenerator from "../utlis/TokenGenerator.js";
import { OAuth2Client } from 'google-auth-library';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'
dotenv.config()


export const Register=async(req,res)=>{
     
      const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }
   try {
      const user= await User.findOne({email:req.body.email});
      if(!user){
        const hashedPassword= await hashPassword(req.body.password);
        const newUser= await User.create({
            name:req.body.name,
            email:req.body.email,
            password:hashedPassword,
            authProvider:'local'
        })
          res.status(200).json({ message: 'Register success' });
      }else{
       return res.send({message:"User Already Exists"});
      }
    
   } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Internal server error' });
   }

}

export const Login = async (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    if (user.authProvider !== "local") {
      return res.status(400).json({ message: "Please login with Google" });
    }

    const isMatch = await comparePassword(req.body.password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: 'Incorrect password' });
    }

    const token = TokenGenerator(user._id);

    return res.cookie('token', token, {
        httpOnly: true,
        secure: true,
        sameSite: 'None',
        maxAge: 2 * 24 * 60 * 60 * 1000,
      })
      .status(200)
      .json({ message: 'Login successful' ,user});
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: 'Server error' });
  }
};



const client = new OAuth2Client("762831396686-3a4mp3f4bjebuqlcobjjae52q1aan4ug.apps.googleusercontent.com");





export const googleRegister = async (req, res) => {
  try {
    const { token } = req.body; // This is the access_token

    // Use the access token to get user info from Google
    const response = await fetch(`https://www.googleapis.com/oauth2/v2/userinfo?access_token=${token}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch user info');
    }
    
    const userInfo = await response.json();
    
    console.log('User info:', userInfo);
    
    // Now you have user information
    const { id, email, name, picture } = userInfo;
    
    // Check if user already exists
    // Create user if doesn't exist
    // Generate your own JWT token
    // Return response
    const user= await User.findOne({email:email});
    if(!user){
      const newUser= await User.create({
        name:name,
        email:email,
         googleId:id,
        avatar:picture,
        authProvider:'google'
    })
      return res.status(200).json({ message: 'Register success' });
    }
    else{
      return res.send({message:"User Already Exists"});
    
    }
    
  } catch (error) {
    console.error('Google register error:', error);
    res.status(400).json({ error: 'Authentication failed' });
  }
};
export const googleLogin = async (req, res) => {
  const { token } = req.body;

  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID
    });

    const { email } = ticket.getPayload();

    const user = await User.findOne({ email, authProvider: 'google' });
    if (!user) {
      return res.status(404).json({ message: "User not found. Please register first." });
    }

    const Token= TokenGenerator(user._id);

    return res .cookie('token', Token, {
        httpOnly: true,
        secure: true,
        sameSite: 'None',
        maxAge: 2 * 24 * 60 * 60 * 1000, // 2 days
      }).status(200).json({ message: 'Login successful' ,user:user});
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: "Google login failed" });
  }
};

export const UserDetail= async(req,res)=>{
try {
    //console.log(req.cookies)
    const token = req.cookies.token;
    if (!token) return res.status(401).json({ message: 'No token' });
    const user = jwt.verify(token, process.env.jwt_secret_key);
    const userdetails = await User.findOne({ _id: user.id });

    res.status(200).json({ user: userdetails });
  } catch (err) {
    console.error("Error in /me route:", err.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export const logout=async(req,res)=>{
  try { 
    res.clearCookie('token', {
  httpOnly: true,
  secure: true,
  sameSite: 'None',
});
return res.status(200).json({ message: 'Logged out' });
    
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Server error' })
  }
}
export const updateSettings = async (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.status(401).json({ message: 'No token' });

    const decoded = jwt.verify(token, process.env.jwt_secret_key);
    const user = await User.findById(decoded.id);

    if (!user) return res.status(404).json({ message: 'User not found' });

    const { name, email, password, newPassword } = req.body;

    // Update name if provided
    if (name) {
      user.name = name;
    }

    // Update email if provided and not already taken by another user
    if (email && email !== user.email) {
      const emailExists = await User.findOne({ email });
      if (emailExists) {
        return res.status(400).json({ message: 'Email already in use' });
      }
      user.email = email;
    }

    // Update password if provided (and user is local)
    if (user.authProvider === 'local' && password && newPassword) {
      const isMatch = await comparePassword(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Current password is incorrect' });
      }
      user.password = await hashPassword(newPassword);
    }

    await user.save();

    res.status(200).json({ message: 'Settings updated successfully', user });
  } catch (error) {
    console.error("Error updating settings:", error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
