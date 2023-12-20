import Image from "next/image";
import React from "react";
const EventCard = (props) => {
  return (
    <div className="card-con mt-8">
      <div className="relative flex w-80 flex-col rounded-xl bg-bg2-col text-text-col bg-clip-border text-gray-700 shadow-md">
        <div className="relative mx-4 -mt-6 overflow-hidden rounded-xl bg-primary-col bg-clip-border text-white  h-40">
          <Image src={props.img} alt="asdbj" width="300" height="1" />
        </div>
        <div className="p-6">
          <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {props.Name}
          </h5>
          <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
            {props.Description}
          </p>
          <div className="details flex flex-wrap gap-x-5 gap-y-2 my-2">
            <p className="location flex items-center">
              <svg
                className="h-5 w-5 text-primary-col"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              {props.Location}
            </p>
            <p className="event-time flex items-center">
              <svg
                className="h-5 w-5 text-primary-col"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <circle cx="12" cy="12" r="9" />{" "}
                <polyline points="12 7 12 12 15 15" />
              </svg>
              {props.EventTime}
            </p>
            <p className="event-dates flex items-center">
              <svg
                className="h-5 w-5 text-primary-col"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <rect x="4" y="5" width="16" height="16" rx="2" />{" "}
                <line x1="16" y1="3" x2="16" y2="7" />{" "}
                <line x1="8" y1="3" x2="8" y2="7" />{" "}
                <line x1="4" y1="11" x2="20" y2="11" />{" "}
                <rect x="8" y="15" width="2" height="2" />
              </svg>
              {props.StartDate} - {props.EndDate}
            </p>
            <p className="rsvp flex items-centera">
              RSVP Deadline: {props.RSVPDeadline}
            </p>
          </div>
        </div>
        <div className="p-6 pt-0">
          {props.sup!==1 && <button
            data-ripple-light="true"
            type="button"
            onClick={() => {
                props.setEv({name:props.Name,description:props.Description,location:props.Location,time:props.EventTime,startDate:props.StartDate,endDate:props.EndDate,rsvp:props.RSVPDeadline})
              props.setShowModal(true);

            }}
            className="bg-primary-col rounded-lg bg-blue-500 py-3 px-6 text-center align-middle text-xs text-bg2-col"
          >
            Edit
          </button>}
        </div>
      </div>
    </div>
  );
};

export default EventCard;
