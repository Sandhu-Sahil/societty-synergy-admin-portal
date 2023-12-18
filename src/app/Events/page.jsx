"use client";
import React, { useEffect, useState } from "react";
import EventCard from "@/components/EventCard";
import Modal from "@/components/EventModal";
import { useRouter } from "next/navigation";
const Events = () => {
  const [showModal, setShowModal] = useState(false);
  const [ev, setEv] = useState({ name: "", description: "", location: "", time: "", startDate: "", endDate: "", rsvp: "" });
  const [mType, setmType] = useState('Edit');
  const [Events, setEvents] = useState([
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
  const fetchAllEvents = async () => {
    const response = await fetch("", { method: "GET" });
    const json = await response.json();
    setEvents(json);
  };
  const updateEvent = async () => {
    const response = await fetch("", { method: "PUT" });


    setEv({ name: "", description: "", location: "", time: "", startDate: "", endDate: "", rsvp: "" });
  }
  const AddEvent = async () => {
    const response = await fetch("", { method: "POST" });


    setEv({ name: "", description: "", location: "", time: "", startDate: "", endDate: "", rsvp: "" });
  }
  let router = useRouter();
  useEffect(() => {
    // if(!localStorage.getItem('synergy-token')){
    //   router.push('/login');
    // }
    // fetchAllEvents();
  }, []);

  return (
    <div className=" bg-bg1-col h-screen">
      <Modal type={mType} showModal={showModal} setShowModal={setShowModal} ev={ev} setEv={setEv} updateEvent={updateEvent} AddEvent={AddEvent} />
      <section className="Heading flex justify-between items-center p-10">
        <h1 className="text-primary-col font-semibold text-3xl">GDSC Events</h1>
        <button 
          title="Add New"
          className="group mr-5 cursor-pointer outline-none hover:rotate-90 duration-300"
          onClick={()=>{setmType('Add');setShowModal(true)}}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            className="stroke-primary-col fill-none group-hover:fill-teal-800 group-active:stroke-primary-col group-active:fill-primary-col group-active:duration-0 duration-300"
          >
            <path
              d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
              strokeWidth="1.5"
            ></path>
            <path d="M8 12H16" strokeWidth="1.5"></path>
            <path d="M12 16V8" strokeWidth="1.5"></path>
          </svg>
        </button>

      </section>
      <section className="cards-con flex flex-wrap justify-center gap-10">
        {Events.map((ev) => {
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
