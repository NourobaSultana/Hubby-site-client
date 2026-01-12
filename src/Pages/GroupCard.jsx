import React from "react";
import { FaEdit, FaEye } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { Link } from "react-router";
import Swal from "sweetalert2";

const GroupCard = ({ group }) => {
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
              // Swal.fire("Deleted!", "Group deleted successfully", "success");
              // const remaining = group.filter((grp) => grp._id !== _id);
              // setGroups(remaining);
            }
          });
      }
    });
  };
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-sm">
        <figure>
          <img className="w-[200px] h-[200px]" src={image_url} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="">
            {" "}
            <span className="font-bold">Description: </span> {description}
          </h2>
          <h2>
            {" "}
            <span className="font-bold">Group Name: </span> {group_name}
          </h2>
          <h2>
            <span className="font-bold">User Name: </span> {user_name}
          </h2>
          <p>
            <span className="font-bold">User Email: </span> {user_email}
          </p>
          <div className="card-actions justify-end">
            <div className="join join-vertical gap-3">
              <Link to={`/creategroup/${_id}`}>
                <button className="btn btn-primary">
                  <span>
                    <FaEye />
                  </span>
                  View
                </button>
              </Link>
              <Link to={`/updategroup/${_id}`}>
                <button className="btn btn-primary">
                  <span>
                    <FaEdit />
                  </span>{" "}
                  Edit
                </button>
              </Link>

              <button
                onClick={() => handleDelete(_id)}
                className="btn btn-primary"
              >
                <span>
                  <RiDeleteBinLine />
                </span>{" "}
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupCard;
