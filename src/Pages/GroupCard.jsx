import React, { useState } from "react";
import { FaEdit, FaEye, FaHeart } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { Link } from "react-router";
import Swal from "sweetalert2";

const GroupCard = ({ group, groups, setGroup }) => {
  const [liked, setLiked] = useState(false);
  const { _id, image_url, user_email, description, group_name, user_name } =
    group;
  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      console.log(result.isConfirmed);
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/creategroup/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("deleted data", data);
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });

              // remove the coffee from state

              const remainingGroup = groups.filter((grp) => grp._id !== _id);
              setGroup(remainingGroup);
            }
          });
      }
    });
  };
  return (
    <div className="bg-base-200 p-6 rounded-3xl flex justify-center">
      <div className="relative w-full max-w-4xl">
        {/* Gradient Glass Card */}
        <div className="bg-white/20 backdrop-blur-3xl rounded-3xl shadow-2xl overflow-hidden border border-white/10 transition-transform duration-500 hover:scale-105">
          {/* Top Image */}
          <figure className="w-full h-64 overflow-hidden">
            <img
              src={image_url}
              alt="Group"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
          </figure>

          {/* Content */}
          <div className="p-4 space-y-3 text-slate-900">
            <p className="text-sm md:text-base leading-relaxed">
              <span className="font-bold text-slate-800">Description:</span>{" "}
              {description}
            </p>

            <p className="text-base">
              <span className="font-bold text-slate-800">Group Name:</span>{" "}
              {group_name}
            </p>

            <p className="text-base">
              <span className="font-bold text-slate-800">User Name:</span>{" "}
              {user_name}
            </p>

            <p className="text-sm md:text-base text-slate-700">
              <span className="font-bold text-slate-800">User Email:</span>{" "}
              {user_email}
            </p>

            {/* Actions Row */}
            <div className="mt-4 flex items-center justify-between">
              {/* Left Buttons */}
              <div className="flex flex-wrap gap-3">
                <Link to={`/creategroup/${_id}`}>
                  <button className="btn btn-sm bg-gradient-to-r from-slate-800 to-slate-700 hover:from-slate-900 hover:to-slate-800 text-white flex items-center gap-2 rounded-xl transition-all duration-300">
                    <FaEye /> View
                  </button>
                </Link>

                <Link to={`/updategroup/${_id}`}>
                  <button className="btn btn-sm bg-gradient-to-r from-slate-600 to-slate-500 hover:from-slate-700 hover:to-slate-600 text-white flex items-center gap-2 rounded-xl transition-all duration-300">
                    <FaEdit /> Edit
                  </button>
                </Link>

                <button
                  onClick={() => handleDelete(_id)}
                  className="btn btn-sm bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white flex items-center gap-2 rounded-xl transition-all duration-300"
                >
                  <RiDeleteBinLine /> Delete
                </button>
              </div>

              {/* Right Heart Icon */}
              <button
                onClick={() => setLiked(!liked)}
                className={`p-2 rounded-full transition-all duration-300 shadow-md ${
                  liked
                    ? "bg-red-100 text-red-500 scale-80"
                    : "bg-amber-400 text-white hover:bg-red-100 hover:text-red-400"
                }`}
              >
                <FaHeart size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupCard;
