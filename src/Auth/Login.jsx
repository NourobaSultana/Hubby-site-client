import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../Firebase/firebase.init";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const provider = new GoogleAuthProvider();

  const handleGoogleLogin = (e) => {
    e.preventDefault();

    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("Logged in user:", result);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-100 via-slate-200 to-slate-400 px-4">
      <div className="w-full max-w-md">
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-slate-800">Welcome Back</h1>
          <p className="text-sm text-slate-600 mt-2">
            Please login to continue to your account
          </p>
        </div>

        {/* Card */}
        <div className="card bg-white/90 backdrop-blur-xl shadow-xl rounded-2xl border border-slate-200">
          <div className="card-body space-y-5">
            {/* Email */}
            <div>
              <label className="label text-sm font-semibold text-slate-700">
                Email Address
              </label>
              <input
                type="email"
                className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-slate-400"
                placeholder="you@company.com"
              />
            </div>

            {/* Password */}
            <div>
              <label className="label text-sm font-semibold text-slate-700">
                Password
              </label>
              <input
                type="password"
                className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-slate-400"
                placeholder="••••••••"
              />
            </div>

            {/* Forgot */}
            <div className="flex justify-end">
              <a className="text-sm text-slate-600 hover:underline">
                Forgot password?
              </a>
            </div>

            {/* Login Button */}
            <button className="btn w-full text-lg tracking-wide bg-slate-800 hover:bg-slate-900 text-white transition-all duration-300 rounded-xl">
              Login
            </button>

            {/* Divider */}
            <div className="divider text-slate-400 text-sm">OR</div>

            {/* Google Login */}
            <button
              onClick={handleGoogleLogin}
              className="btn w-full bg-white border border-slate-300 hover:bg-slate-100 text-slate-800 flex items-center justify-center gap-2 rounded-xl"
            >
              <FcGoogle size={20} />
              Continue with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
