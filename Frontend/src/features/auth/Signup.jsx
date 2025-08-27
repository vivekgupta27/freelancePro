import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, User, ArrowRight, Briefcase, Shield, Zap, CheckCircle } from 'lucide-react';
import GoogleSignUpButton from '../auth/GoogleSignUpButton';
import { UserContext } from '../../shared/ClientRedux';
import {useSelector,useDispatch} from 'react-redux';
import { setName,setEmail,setPassword ,reset} from '../../Redux/states/signupSlice';
import { useSignupMutation } from '../../Redux/apiState/signuapi';
function SignUp() {
 
  const dispatch=useDispatch();
 const {name,email,password,change}=useSelector((state)=>state.signupState)
  const navigate=useNavigate();
  const {SignUp}=useContext(UserContext);
  const [showPassword, setShowPassword] = useState(false);
  
 
  
 useEffect(()=>{
       if(change){
        navigate('/signin');
       }
 },[change])

  const [signupUser, { isLoading, isSuccess, error }] = useSignupMutation();
const Data = useSelector(state => state.signupState); // assuming form slice

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(reset());
    try {
      const res = await signupUser(Data).unwrap(); // unwrap se direct response milta hai
       if(res.message==="Register success"){
             navigate('/signin');
       }

    } catch (err) {
      console.error('Signup failed:', err);
    }
  };



  
  const benefits = [
    "AI-powered proposal generation",
    "Advanced client management",
    "Automated invoicing & payments",
    "Real-time analytics dashboard",
    "24/7 priority support"
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Dynamic Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
        
        <div className="absolute w-96 h-96 bg-gradient-to-r from-violet-600/20 to-purple-600/20 rounded-full blur-3xl animate-pulse top-20 left-20"></div>
        <div className="absolute w-80 h-80 bg-gradient-to-r from-amber-500/15 to-orange-500/15 rounded-full blur-3xl animate-pulse bottom-20 right-20 animation-delay-2000"></div>
        <div className="absolute w-72 h-72 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animation-delay-4000"></div>
      </div>

      <div className="flex min-h-screen">
        {/* Left Side - Benefits */}
        <div className="hidden lg:flex lg:w-1/2 items-center justify-center p-12 relative z-10">
          <div className="max-w-lg">
            <Link to="/" className="inline-flex items-center group mb-12">
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

            <h2 className="text-5xl font-black mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Join Elite
              </span>
              <br />
              <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Freelancers
              </span>
            </h2>

            <p className="text-xl text-gray-300 mb-12 font-light leading-relaxed">
              Transform your freelance business with AI-powered tools trusted by 127K+ professionals worldwide.
            </p>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center group">
                  <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-2 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300 font-medium">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 glass-premium rounded-3xl border border-white/10">
              <div className="text-center">
                <div className="text-3xl font-black bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  $2.8B+
                </div>
                <div className="text-gray-400 text-sm font-semibold">Revenue Generated by Our Users</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Sign Up Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 relative z-10">
          <div className="w-full max-w-md">
            {/* Mobile Logo */}
            <div className="lg:hidden text-center mb-12">
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

            {/* Sign Up Form */}
            <div className="glass-premium rounded-4xl p-10 border border-white/10 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-purple-500/5"></div>
              
              <div className="relative z-10">
                <div className="text-center mb-10">
                  <h1 className="text-4xl font-black mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Create Account
                  </h1>
                
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Fields */}
                  <div className="grid">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="block text-sm font-semibold text-gray-300">
                        Full Name
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <User className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={name}
                        onChange={(e)=>{dispatch(setName(e.target.value))}}
                          className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-300 backdrop-blur-xl"
                          placeholder="John"
                          required
                        />
                      </div>
                    </div>
                    
                  </div>

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
                        onChange={(e)=>{dispatch(setEmail(e.target.value))}}
                        className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-300 backdrop-blur-xl"
                        placeholder="john@example.com"
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
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e)=>{dispatch(setPassword(e.target.value))}}
                        className="w-full pl-12 pr-12 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-300 backdrop-blur-xl"
                        placeholder="Create a strong password"
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

                 

               

                  {/* Sign Up Button */}
                  <button disabled={isLoading}
                    type="submit"
                    className="w-full btn-premium text-white py-4 rounded-2xl text-lg font-black transition-all duration-500 transform hover:scale-105 relative overflow-hidden group"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      Create Account
                      <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </button>

                  {/* Divider */}
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-white/10"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-4 bg-black text-gray-400">Or sign up with</span>
                    </div>
                  </div>

                  {/* Social Login */}
                  <div className="">
                    <GoogleSignUpButton />
                  </div>
                </form>

                {/* Sign In Link */}
                <div className="text-center mt-8">
                  <p className="text-gray-400">
                    Already have an account?{' '}
                    <Link to="/signin" className="text-violet-400 hover:text-violet-300 transition-colors duration-300 font-semibold">
                      Sign in
                    </Link>
                  </p>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 text-center">
              <div className="flex items-center justify-center space-x-8 text-gray-500">
                <div className="flex items-center">
                  <Shield className="h-4 w-4 mr-2" />
                  <span className="text-sm">256-bit SSL</span>
                </div>
                <div className="flex items-center">
                  <Zap className="h-4 w-4 mr-2" />
                  <span className="text-sm">14-day Free Trial</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;