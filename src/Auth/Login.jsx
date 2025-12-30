import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";
import { auth } from "../Firebase/firebase.init";

const Login = () => {
  const provider = new GoogleAuthProvider();
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("hello");
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
        <div className="w-full max-w-md">
          {/* Title */}
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-sm text-gray-500 mt-1">
              Welcome back! Please login to your account
            </p>
          </div>

          {/* Card */}
          <form>
            <div className="card bg-base-100 shadow-2xl rounded-2xl">
              <div className="card-body space-y-4">
                {/* Name */}
                <div>
                  <label className="label font-medium">Name</label>
                  <input
                    type="text"
                    className="input input-bordered w-full"
                    placeholder="Enter your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="label font-medium">Email</label>
                  <input
                    type="email"
                    className="input input-bordered w-full"
                    placeholder="Enter your email"
                  />
                </div>

                {/* Password */}
                <div>
                  <label className="label font-medium">Password</label>
                  <input
                    type="password"
                    className="input input-bordered w-full"
                    placeholder="Enter your password"
                  />
                </div>

                {/* Forgot */}
                <div className="flex justify-end">
                  <a className="link link-hover text-sm">Forgot password?</a>
                </div>

                {/* Button */}
                <button
                  onClick={handleLogin}
                  className="btn btn-neutral w-full text-lg"
                >
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
