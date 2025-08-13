import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

const key=process.env.jwt_secret_key;
const verifyToken = (req, res, next) => {
  const token = req.cookies.token; // assumes cookie name is 'token'
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  try {
    const decoded = jwt.verify(token, key);
    req.user = decoded; // attach decoded payload to request
    next();
  } catch (err) {
    return res.status(403).json({ message: "Forbidden" });
  }
};

export default verifyToken;