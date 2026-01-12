import React, { useState } from "react";
import Swal from "sweetalert2";

const CreateGroup = () => {
  const [category, setCategory] = useState("Select");
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
    <div>
      <div className=" bg-yellow-100 min-h-screen">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-2xl font-bold  text-black ">
              Please Fillup Form
            </h1>
          </div>
          <form onSubmit={handleButton} className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 bg-black rounded-2xl shadow-2xl">
              {/* Group Name */}
              <fieldset className="fieldset">
                <label className="label  text-white">Group Name</label>
                <input
                  type="text"
                  name="group_name"
                  className="input input-bordered w-full"
                  placeholder="Enter group name"
                />
              </fieldset>

              {/* Hobby Category */}
              <fieldset className="fieldset">
                <label className="label text-white">Hobby Category</label>

                <div className="dropdown w-full bg-white">
                  <button
                    type="button"
                    tabIndex={0}
                    className="btn btn-outline w-full flex items-center justify-between
             px-4  tracking-wide "
                  >
                    <span className="truncate">{category}</span>

                    <span className="flex items-center gap-1 text-sm opacity-70">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
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
                    </span>
                  </button>

                  <ul
                    tabIndex={0}
                    className="dropdown-content menu bg-base-100 rounded-xl
                 w-full mt-2 p-2 shadow z-10"
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
                          className="w-full text-left"
                        >
                          {item}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </fieldset>

              {/* Description */}
              <fieldset className="fieldset md:col-span-2">
                <label className="label text-white">Description</label>
                <textarea
                  className="textarea textarea-bordered w-full"
                  placeholder="Write a short description"
                  rows={3}
                  name="description"
                ></textarea>
              </fieldset>

              {/* Meeting Location */}
              <fieldset className="fieldset">
                <label className="label text-white">Meeting Location</label>
                <input
                  type="text"
                  name="meeting_location"
                  className="input input-bordered w-full"
                  placeholder="Meeting location"
                />
              </fieldset>

              {/* Max Members */}
              <fieldset className="fieldset">
                <label className="label text-white">Max Members</label>
                <input
                  type="number"
                  name="max_members"
                  className="input input-bordered w-full"
                  placeholder="e.g. 10"
                />
              </fieldset>

              {/* Start Date */}
              <fieldset className="fieldset">
                <label className="label text-white">Start Date</label>
                <input
                  type="date"
                  name="start_date"
                  className="input input-bordered w-full"
                />
              </fieldset>

              {/* Image URL */}
              <fieldset className="fieldset">
                <label className="label text-white">Image URL</label>
                <input
                  type="text"
                  name="image_url"
                  className="input input-bordered w-full"
                  placeholder="https://image-url"
                />
              </fieldset>

              {/* User Name */}
              <fieldset className="fieldset">
                <label className="label text-white">User Name</label>
                <input
                  type="text"
                  name="user_name"
                  className="input input-bordered w-full"
                  placeholder="Your name"
                />
              </fieldset>

              {/* User Email */}
              <fieldset className="fieldset">
                <label className="label text-white">User Email</label>
                <input
                  type="email"
                  name="user_email"
                  className="input input-bordered w-full"
                  placeholder="you@email.com"
                />
              </fieldset>

              {/* Submit Button */}
              <div className="md:col-span-2 mt-4">
                <button className="btn btn-primary w-full text-lg">
                  Create Group
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateGroup;
