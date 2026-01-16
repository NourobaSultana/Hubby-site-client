import React, { useState } from "react";
import { useLoaderData } from "react-router";
import GroupCard from "./GroupCard";

const Home = () => {
  const initialGroups = useLoaderData();
  const [groups, setGroup] = useState(initialGroups);
  console.log(initialGroups);
  return (
    <div>
      {" "}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {groups.map((group) => (
          <GroupCard
            key={group._id}
            group={group}
            setGroup={setGroup}
            groups={groups}
          ></GroupCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
