import React from "react";
import { useLoaderData } from "react-router";
import GroupCard from "./GroupCard";

const Home = () => {
  const groups = useLoaderData();
  console.log(groups);
  return (
    <div>
      {" "}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {groups.map((group) => (
          <GroupCard key={group._id} group={group}></GroupCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
