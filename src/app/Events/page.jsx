"use client";
import React, { useEffect, useState } from "react";
import EventCard from "@/components/EventCard";
import Modal from "@/components/EventModal";
const Events = () => {
    const [showModal, setShowModal] = useState(false);
    const [ev, setEv] = useState({name:"",description:"",location:"",time:"",startDate:"",endDate:"",rsvp:""});
  const [events, setEvents] = useState([
    {
      Name: "inovayte 2.0",
      Description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, eius.",
      clubId: "gdsc",
      ID: "1",
      StartDate: '2024-01-04',
      EndDate: '2024-01-04',
      EventTime: '08:50',
      Location: "lt-2",
      RSVPDeadline: '2024-01-04T00:48',
      img: "/composeabc.webp",
    },
    {
        Name: "bitbox",
        Description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, eius.",
        clubId: "gdsc",
        ID: "2",
        StartDate: '2024-01-04',
        EndDate: '2024-01-04',
        EventTime: '08:50',
        Location: "lt-2",
        RSVPDeadline: '2024-01-04T00:48',
        img: "/composeabc.webp",
      },
    {
        Name: "bitbox",
        Description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, eius.",
        clubId: "gdsc",
        ID: "3",
        StartDate: '2024-01-04',
        EndDate: '2024-01-04',
        EventTime: '08:50',
        Location: "lt-2",
        RSVPDeadline: '2024-01-04T00:48',
        img: "/composeabc.webp",
      },
    {
        Name: "bitbox",
        Description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, eius.",
        clubId: "gdsc",
        ID: "4",
        StartDate: '2024-01-04',
        EndDate: '2024-01-04',
        EventTime: '08:50',
        Location: "lt-2",
        RSVPDeadline: '2024-01-04T00:48',
        img: "/composeabc.webp",
      },
  ]);
  const fetchAllevents = async () => {
    const response = await fetch("", {method:"GET"});
    const json = await response.json();
    setEvents(json);
  };
  const updateEvent=async()=>{
    const response = await fetch("", {method:"PUT"});


    setEv({name:"",description:"",location:"",time:"",startDate:"",endDate:"",rsvp:""});
  }
  useEffect(() => {
    // fetchAllevents();
  }, []);

  return (
    <div className=" bg-bg1-col h-screen">
        <Modal showModal={showModal} setShowModal={setShowModal} ev={ev} setEv={setEv} updateEvent={updateEvent}/>
        <section className="Heading p-10">
        <h1 className="text-primary-col font-semibold text-3xl">GDSC Events</h1>
        </section>
      <section className="cards-con flex flex-wrap justify-center gap-10">
        {events.map((ev) => {
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
                setShowModal={setShowModal}
                ev={ev}
                setEv={setEv}
              />
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Events;
