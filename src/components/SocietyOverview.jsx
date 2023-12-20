"use client";
import React, { useContext } from "react";
import EventCard from "./EventCard";
import Context from "@/ContextAPI";
const SocietyOverview = () => {
  const context=useContext(Context);
  
  const societyDetails = {
    name: "GDSC",
    description:
      "Description of your societyDescription of your societyDescription of your societyDescription of your societyDescription of your societyDescription of your societyDescription of your societyDescription of your societyDescription of your societyDescription of your societyDescription of your societyDescription of your societyDescription of your societyDescription of your societyDescription of your societyDescription of your societyDescription of your societyDescription of your societyDescription of your societyDescription of your societyDescription of your societyDescription of your societyDescription of your societyDescription of your societyDescription of your societyDescription of your societyDescription of your societyDescription of your societyDescription of your societyDescription of your societyDescription of your societyDescription of your societyDescription of your societyDescription of your societyDescription of your societyDescription of your societyDescription of your society",
    members: 150,
  };

  return (
    <div className="mx-16  mt-8 text-text-col space-y-8 flex-row justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">
        {societyDetails.name} Overview
      </h1>
      
      <div>
        <h2 className="text-2xl font-bold mb-4">Faculty and Society Head</h2>
        <div className="ml-16">

        <p>Faculty Head: {context.faculty.name}</p>
        <p>Society Head: {context.head.name}</p>
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Society Description</h2>
        <div className="flex justify-center text-center px-16">
          <div className="font-semibold">{societyDetails.description}</div>
        </div>
      </div>


      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Recent Events</h2>
        <div className="flex space-x-8 justify-center">
          {context.recentEvents.map((ev) => {
            return (
              <div key={ev.ID}>
                <EventCard
                  Name={ev.Name}
                  Description={ev.Description}
                  clubId={ev.clubId}
                  StartDate={ev.StartDate}
                  EndDate={ev.EndDate}
                  EventTime={ev.EventTime}
                  Location={ev.Location}
                  RSVPDeadline={ev.RSVPDeadline}
                  img={ev.img}
                  // setShowModal={setShowModal}
                  ev={ev}
                  sup={1}
                  // setEv={setEv}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SocietyOverview;
