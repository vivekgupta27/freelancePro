import jwt from 'jsonwebtoken';
import User from '../models/userSchema.js';

 const  protect = async (req, res, next) => {
  const token = req.cookies.token;


  if (!token) return res.status(401).json({ message: 'Not authorized, no token' });

  try {
    const decoded = jwt.verify(token, process.env.jwt_secret_key);
    req.user = await User.findById(decoded.id);
    next();
  } catch (err) {
    res.status(401).json({ message: 'Token invalid or expired' });
  }
};
export default protect;

