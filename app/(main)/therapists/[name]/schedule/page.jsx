"use client";
import React, { useContext, useState, useEffect } from "react";
import Context from "@/Context/Context";

const Schedule = ({ params }) => {
  let id = params.name;
  const [user, setUser] = useState();
  const { therapistFilter } = useContext(Context);

  useEffect(() => {
    const therapist = therapistFilter?.therapistsData?.find(
      (e) => e?._id == id
    );
    setUser(therapist);
  }, [therapistFilter?.therapistsData]);

  console.log(user);

  return (
    <div>
      <iframe
        width="100%"
        height="750px"
        src={user?.meeting_url}
        frameborder="0"
        allowfullscreen=""
      >
        {" "}
      </iframe>
    </div>
  );
};

export default Schedule;
