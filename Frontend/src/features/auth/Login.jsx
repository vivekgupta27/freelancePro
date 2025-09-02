import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff, ArrowRight, Briefcase, Shield, Zap } from "lucide-react";
import GoogleLoginButton from "./GoogleLogin";
import { useSelector, useDispatch } from "react-redux";
import { setEmail, setPassword, reset } from "../../Redux/states/signinSlice";
import { useSigninMutation } from "../../Redux/apiState/signuapi";
import { login } from "../../Redux/states/userSlice";
import { toast } from "react-toastify";

const Login = () => {
  const { email, password } = useSelector((state) => state.signinState);
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const [signinUser, { isLoading }] = useSigninMutation();
  const Data = useSelector((state) => state.signinState);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(reset());
    try {
      const res = await signinUser(Data).unwrap();
      console.log(res.user);

      if (res.message === "Login successful") {
        dispatch(login(res.user));
        toast.success(`Welcome back, ${res.user.name || "User"} 👋`, {
          autoClose: 2500,
        });
        navigate("/dashboard");
      } else {
        toast.error(res.message || "Invalid credentials. Please try again.");
        navigate("/signin");
      }
    } catch (error) {
      console.log(error);
      toast.error("Login failed. Please check your credentials or try again later.");
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative flex items-center justify-center">
      {/* Dynamic Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-gradient-to-r from-violet-600/20 to-purple-600/20 rounded-full blur-3xl animate-pulse top-20 left-20"></div>
        <div className="absolute w-80 h-80 bg-gradient-to-r from-amber-500/15 to-orange-500/15 rounded-full blur-3xl animate-pulse bottom-20 right-20 animation-delay-2000"></div>
        <div className="absolute w-72 h-72 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animation-delay-4000"></div>
      </div>

      <div className="w-full max-w-md mx-auto px-4 relative z-10">
        {/* Logo */}
        <div className="text-center mb-12">
          <Link to="/" className="inline-flex items-center group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-purple-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-all duration-300"></div>
              <div className="relative bg-gradient-to-r from-violet-600 to-purple-600 p-3 rounded-xl">
                <Briefcase className="h-8 w-8 text-white" />
              </div>
            </div>
            <span className="ml-3 text-2xl font-black bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              FreelancePro
            </span>
          </Link>
        </div>

        {/* Sign In Form */}
        <div className="glass-premium rounded-4xl p-10 border border-white/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-purple-500/5"></div>

          <div className="relative z-10">
            <div className="text-center mb-10">
              <h1 className="text-4xl font-black mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Welcome Back
              </h1>
              <p className="text-gray-400 text-lg font-light">
                Sign in to your FreelancePro account
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Email Field */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-300">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => dispatch(setEmail(e.target.value))}
                    className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-300 backdrop-blur-xl"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-semibold text-gray-300">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => dispatch(setPassword(e.target.value))}
                    className="w-full pl-12 pr-12 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-300 backdrop-blur-xl"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-violet-400 transition-colors duration-300"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              {/* Forgot Password */}
              <div className="flex items-center justify-between">
                <Link
                  to="/forgot-password"
                  className="text-sm text-violet-400 hover:text-violet-300 transition-colors duration-300 font-medium"
                >
                  Forgot password?
                </Link>
              </div>

              {/* Sign In Button */}
              <button
                type="submit"
                className="w-full btn-premium text-white py-4 rounded-2xl text-lg font-black transition-all duration-500 transform hover:scale-105 relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center justify-center">
                  Sign In
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>

              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/10"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-black text-gray-400">Or continue with</span>
                </div>
              </div>

              {/* Social Login */}
              <div>
                <GoogleLoginButton />
              </div>
            </form>

            {/* Sign Up Link */}
            <div className="text-center mt-10">
              <p className="text-gray-400">
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  className="text-violet-400 hover:text-violet-300 transition-colors duration-300 font-semibold"
                >
                  Sign up for free
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 text-center">
          <div className="flex items-center justify-center space-x-8 text-gray-500">
            <div className="flex items-center">
              <Shield className="h-4 w-4 mr-2" />
              <span className="text-sm">256-bit SSL</span>
            </div>
            <div className="flex items-center">
              <Zap className="h-4 w-4 mr-2" />
              <span className="text-sm">Instant Access</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
