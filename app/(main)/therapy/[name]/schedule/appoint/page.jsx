"use client";
import React, { useContext, useState, useEffect } from "react";
import Context from "@/Context/Context";

const Appoint = ({ params }) => {
  let id = params.name;
  const [user, setUser] = useState();
  const { therapistFilter, fourtyMinMeet } = useContext(Context);

  useEffect(() => {
    const therapist = therapistFilter?.therapistsData?.find(
      (e) => e?._id == id
    );
    setUser(therapist);
  }, [therapistFilter?.therapistsData]);

  return (
    <div>
      <object
        width="100%"
        height="750px"
        data={
          fourtyMinMeet ? user?.full_meeting_url?.url : user?.meeting_url?.url
        }
      ></object>
    </div>
  );
};

export default Appoint;
