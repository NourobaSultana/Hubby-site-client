import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Link } from "react-router";
import Swal from "sweetalert2";

const SignUp = () => {
  // const { user } = use(AuthContext);
  // console.log(user);

  const { createUser } = use(AuthContext);
  console.log(createUser);

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { email, password, ...userProfile } = Object.fromEntries(
      formData.entries()
    );

    console.log(email, password, userProfile);
    // const firstName = formData.get("first_name");
    // const lastName = formData.get("last_name");
    // const email = formData.get("email");
    // const password = formData.get("password");
    // console.log("First Name :", firstName);
    // console.log("Last Name :", lastName);
    // console.log("Email :", email);
    // console.log("Password :", password);

    // create user in the firebse

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        fetch("http://localhost:3000/signin", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userProfile),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Data save to the database",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-100 via-slate-200 to-slate-400 px-4">
      <div className="w-full max-w-md">
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-slate-800">Create Account</h1>
          <p className="text-sm text-slate-600 mt-2">
            Join us and start your professional journey
          </p>
        </div>

        {/* Card */}
        <form onSubmit={handleSignUp}>
          <div className="card bg-white/90 backdrop-blur-xl shadow-xl rounded-2xl border border-slate-200">
            <div className="card-body space-y-5">
              {/* Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="label text-sm font-semibold text-slate-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-slate-400"
                    placeholder="John"
                  />
                </div>

                <div>
                  <label className="label text-sm font-semibold text-slate-700">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-slate-400"
                    placeholder="Doe"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="label text-sm font-semibold text-slate-700">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
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
                  name="password"
                  className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-slate-400"
                  placeholder="••••••••"
                />
              </div>

              {/* Button */}
              <button className="btn w-full text-lg tracking-wide bg-slate-800 hover:bg-slate-900 text-white transition-all duration-300 rounded-xl">
                Sign Up
              </button>

              {/* Terms */}
              <p className="text-xs text-slate-600 text-center leading-relaxed">
                By creating an account, you agree to our{" "}
                <span className="font-semibold text-slate-800">
                  Terms & Services
                </span>
                . We may send you important account-related updates.
              </p>

              {/* Login */}
              <p className="text-center text-sm text-slate-700">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-semibold text-slate-900 hover:underline"
                >
                  Login
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
