import React, { useState } from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdateGroup = () => {
  const {
    _id,
    description,
    group_name,
    image_url,
    max_members,
    meeting_location,
    start_date,
    user_email,
    user_name,
  } = useLoaderData();
  const [category, setCategory] = useState("Select");

  const handleUpdateButton = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedGroup = Object.fromEntries(formData.entries());
    console.log(updatedGroup);

    // send updated data to the database

    fetch(`http://localhost:3000/creategroup/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedGroup),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            title: "Data added to mongodb.",
            width: 600,
            padding: "3em",
            color: "#716add",
            background: "#fff url(/images/trees.png)",
            backdrop: `
    rgba(0,0,123,0.4)
    url("/images/nyan-cat.gif")
    left top
    no-repeat
  `,
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
            Update Group Details
          </h1>
          <p className="text-sm text-slate-600 mt-2">
            Modify the information below and save your changes
          </p>
        </div>

        {/* Form Card */}
        <form onSubmit={handleUpdateButton}>
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
                    defaultValue={group_name}
                    className="input input-bordered w-full focus:ring-2 focus:ring-slate-400"
                    placeholder="Enter group name"
                  />
                </div>

                {/* Hobby Category */}
                <div>
                  <label className="label text-sm font-semibold text-slate-700">
                    Hobby Category
                  </label>

                  <div className="dropdown w-full">
                    <button
                      type="button"
                      tabIndex={0}
                      className="btn btn-outline w-full justify-between border-slate-300 text-slate-700 hover:bg-slate-100"
                    >
                      <span className="truncate">
                        {category || "Select category"}
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 opacity-60"
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

                    <ul
                      tabIndex={0}
                      className="dropdown-content menu bg-white rounded-xl w-full mt-2 p-2 shadow z-10"
                    >
                      {[
                        "Drawing & Painting",
                        "Photography",
                        "Video Gaming",
                        "Fishing",
                        "Running",
                        "Cooking",
                        "Reading",
                        "Writing",
                      ].map((item) => (
                        <li key={item}>
                          <button
                            type="button"
                            onClick={() => setCategory(item)}
                            className="w-full text-left hover:bg-slate-100 rounded-lg"
                          >
                            {item}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Description */}
                <div className="md:col-span-2">
                  <label className="label text-sm font-semibold text-slate-700">
                    Description
                  </label>
                  <textarea
                    name="description"
                    defaultValue={description}
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
                    defaultValue={meeting_location}
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
                    defaultValue={max_members}
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
                    defaultValue={start_date}
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
                    defaultValue={image_url}
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
                    defaultValue={user_name}
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
                    defaultValue={user_email}
                    className="input input-bordered w-full focus:ring-2 focus:ring-slate-400"
                    placeholder="you@email.com"
                  />
                </div>

                {/* Submit */}
                <div className="md:col-span-2 mt-6">
                  <button className="btn w-full text-lg bg-slate-800 hover:bg-slate-900 text-white rounded-xl transition-all">
                    Update Group
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

export default UpdateGroup;
