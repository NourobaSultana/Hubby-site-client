import React, { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";

const CreateGroup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const [category, setCategory] = useState("Select");

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const options = [
    "Drawing & Painting",
    "Photography",
    "Video Gaming",
    "Fishing",
    "Running",
    "Cooking",
    "Reading",
    "Writing",
  ];

  const handleButton = (e) => {
    e.preventDefault();
    // console.log("clicked");
    const form = e.target;
    const formData = new FormData(form);
    const hubbyData = Object.fromEntries(formData.entries());
    console.log(hubbyData);

    // send data to the db
    fetch("http://localhost:3000/creategroup", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(hubbyData),
    })
      .then((res) => res.json())
      // .then((data) => console.log("after adding data to db", data));
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your data added successfully in database",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 via-slate-200 to-slate-400 px-4 py-10 flex items-center justify-center">
      <div className="w-full max-w-5xl">
        {/* Title */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-slate-800">
            Create a New Group
          </h1>
          <p className="text-sm text-slate-600 mt-2">
            Fill in the details below to create your hobby group
          </p>
        </div>

        {/* Form Card */}
        <form onSubmit={handleButton}>
          <div className="card bg-white/90 backdrop-blur-xl shadow-xl rounded-2xl border border-slate-200">
            <div className="card-body">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Group Name */}
                <div>
                  <label className="label text-sm font-semibold text-slate-700">
                    Group Name
                  </label>
                  <input
                    type="text"
                    name="group_name"
                    className="input input-bordered w-full focus:ring-2 focus:ring-slate-400"
                    placeholder="Enter group name"
                  />
                </div>

                {/* category */}

                <div className="relative w-full" ref={dropdownRef}>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">
                    Hobby Category
                  </label>
                  <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full flex justify-between items-center border border-slate-300 rounded-lg px-4 py-2 text-slate-700 font-medium bg-white hover:bg-slate-100 transition-all"
                  >
                    <span className="truncate">
                      {category || "Select category"}
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-4 w-4 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {/* Dropdown List */}
                  {isOpen && (
                    <ul className="absolute z-20 mt-1 w-full bg-white shadow-lg rounded-lg max-h-60 overflow-y-auto border border-slate-200">
                      {options.map((item) => (
                        <li key={item}>
                          <button
                            type="button"
                            onClick={() => {
                              setCategory(item);
                              setIsOpen(false);
                            }}
                            className={`w-full text-left px-4 py-2 hover:bg-yellow-100 transition-colors ${
                              category === item
                                ? "bg-yellow-50 font-semibold"
                                : ""
                            }`}
                          >
                            {item}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Description */}
                <div className="md:col-span-2">
                  <label className="label text-sm font-semibold text-slate-700">
                    Description
                  </label>
                  <textarea
                    name="description"
                    rows={3}
                    className="textarea textarea-bordered w-full focus:ring-2 focus:ring-slate-400"
                    placeholder="Write a short description"
                  ></textarea>
                </div>

                {/* Meeting Location */}
                <div>
                  <label className="label text-sm font-semibold text-slate-700">
                    Meeting Location
                  </label>
                  <input
                    type="text"
                    name="meeting_location"
                    className="input input-bordered w-full focus:ring-2 focus:ring-slate-400"
                    placeholder="Meeting location"
                  />
                </div>

                {/* Max Members */}
                <div>
                  <label className="label text-sm font-semibold text-slate-700">
                    Max Members
                  </label>
                  <input
                    type="number"
                    name="max_members"
                    className="input input-bordered w-full focus:ring-2 focus:ring-slate-400"
                    placeholder="e.g. 10"
                  />
                </div>

                {/* Start Date */}
                <div>
                  <label className="label text-sm font-semibold text-slate-700">
                    Start Date
                  </label>
                  <input
                    type="date"
                    name="start_date"
                    className="input input-bordered w-full focus:ring-2 focus:ring-slate-400"
                  />
                </div>

                {/* Image URL */}
                <div>
                  <label className="label text-sm font-semibold text-slate-700">
                    Image URL
                  </label>
                  <input
                    type="text"
                    name="image_url"
                    className="input input-bordered w-full focus:ring-2 focus:ring-slate-400"
                    placeholder="https://image-url"
                  />
                </div>

                {/* User Name */}
                <div>
                  <label className="label text-sm font-semibold text-slate-700">
                    User Name
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    className="input input-bordered w-full focus:ring-2 focus:ring-slate-400"
                    placeholder="Your name"
                  />
                </div>

                {/* User Email */}
                <div>
                  <label className="label text-sm font-semibold text-slate-700">
                    User Email
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    className="input input-bordered w-full focus:ring-2 focus:ring-slate-400"
                    placeholder="you@email.com"
                  />
                </div>

                {/* Submit */}
                <div className="md:col-span-2 mt-6">
                  <button className="btn w-full text-lg bg-slate-800 hover:bg-slate-900 text-white rounded-xl transition-all">
                    Create Group
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateGroup;
