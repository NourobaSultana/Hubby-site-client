import React from "react";

const CreateGroup = () => {
  const handleButton = (e) => {
    e.preventDefault();
    console.log("clicked");
  };

  return (
    <div>
      <div className=" bg-base-200 min-h-screen">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Create Group</h1>
          </div>
          <form onSubmit={handleButton} className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 bg-base-100 rounded-2xl shadow-2xl">
              {/* Group Name */}
              <fieldset className="fieldset">
                <label className="label font-medium">Group Name</label>
                <input
                  type="text"
                  name="group_name"
                  className="input input-bordered w-full"
                  placeholder="Enter group name"
                />
              </fieldset>

              {/* Hobby Category */}
              <fieldset className="fieldset">
                <label className="label font-medium">Hobby Category</label>
                <div className="dropdown w-full">
                  <button
                    type="button"
                    tabIndex={0}
                    className="btn btn-outline w-full justify-between"
                  >
                    Select Category
                    <span>▼</span>
                  </button>

                  <ul
                    tabIndex={0}
                    className="dropdown-content menu bg-base-100 rounded-xl
                     w-full mt-2 p-2 shadow z-10"
                  >
                    <li>
                      <a>Drawing & Painting</a>
                    </li>
                    <li>
                      <a>Photography</a>
                    </li>
                    <li>
                      <a>Video Gaming</a>
                    </li>
                    <li>
                      <a>Fishing</a>
                    </li>
                    <li>
                      <a>Running</a>
                    </li>
                    <li>
                      <a>Cooking</a>
                    </li>
                    <li>
                      <a>Reading</a>
                    </li>
                    <li>
                      <a>Writing</a>
                    </li>
                  </ul>
                </div>
              </fieldset>

              {/* Description */}
              <fieldset className="fieldset md:col-span-2">
                <label className="label font-medium">Description</label>
                <textarea
                  className="textarea textarea-bordered w-full"
                  placeholder="Write a short description"
                  rows={3}
                  name="description"
                ></textarea>
              </fieldset>

              {/* Meeting Location */}
              <fieldset className="fieldset">
                <label className="label font-medium">Meeting Location</label>
                <input
                  type="text"
                  name="meeting_location"
                  className="input input-bordered w-full"
                  placeholder="Meeting location"
                />
              </fieldset>

              {/* Max Members */}
              <fieldset className="fieldset">
                <label className="label font-medium">Max Members</label>
                <input
                  type="number"
                  name="max_members"
                  className="input input-bordered w-full"
                  placeholder="e.g. 10"
                />
              </fieldset>

              {/* Start Date */}
              <fieldset className="fieldset">
                <label className="label font-medium">Start Date</label>
                <input
                  type="date"
                  name="start_date"
                  className="input input-bordered w-full"
                />
              </fieldset>

              {/* Image URL */}
              <fieldset className="fieldset">
                <label className="label font-medium">Image URL</label>
                <input
                  type="text"
                  name="image_url"
                  className="input input-bordered w-full"
                  placeholder="https://image-url"
                />
              </fieldset>

              {/* User Name */}
              <fieldset className="fieldset">
                <label className="label font-medium">User Name</label>
                <input
                  type="text"
                  name="user_name"
                  className="input input-bordered w-full"
                  placeholder="Your name"
                />
              </fieldset>

              {/* User Email */}
              <fieldset className="fieldset">
                <label className="label font-medium">User Email</label>
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
