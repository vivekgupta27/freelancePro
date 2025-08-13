// routes/AuthRoute.js
import { Navigate } from "react-router-dom";

const AuthRoute = ({ isAuthenticated, children }) => {
  return isAuthenticated ? <Navigate to="/dashboard" /> : children;
};

export default AuthRoute;
