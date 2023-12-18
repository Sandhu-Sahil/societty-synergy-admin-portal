import React from "react";

export default function Modal(props) {
  const onChange = (e) => {
    props.setEv({ ...props.ev, [e.target.name]: e.target.value });
  };
  return (
    <>
      {props.showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="mt-4 flex flex-col bg-bg2-col rounded-lg p-4 shadow-sm">
                <h2 className="text-primary-col font-bold text-lg">Edit Event</h2>

                <div className="mt-4">
                  <label className="text-white" htmlFor="name">
                    Name
                  </label>
                  <input
                    placeholder="event name"
                    className="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1"
                    type="text"
                    onChange={onChange}
                    name="name"
                    value={props.ev.name}
                  />
                </div>

                <div className="mt-4">
                  <label className="text-white" htmlFor="description">
                    Description
                  </label>
                  <textarea
                    rows="5"
                    placeholder="event description"
                    className="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1"
                    id="description"
                    onChange={onChange}
                    name="description"
                    value={props.ev.description}
                  ></textarea>
                </div>

                <div className="mt-4 flex flex-row space-x-2">
                  <div className="flex-1">
                    <label className="text-white" htmlFor="location">
                      Location
                    </label>
                    <input
                      placeholder="event location"
                      className="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1"
                      id="location"
                      type="text"
                      onChange={onChange}
                      name="location"
                      value={props.ev.location}
                    />
                  </div>

                  <div className="flex-1">
                    <label className="text-white" htmlFor="time">
                      Event time
                    </label>
                    <input
                      className="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1"
                      id="eventTime"
                      type="time"
                      onChange={onChange}
                      name="time"
                      value={props.ev.time}
                    />
                  </div>
                </div>

                <div className="mt-4 flex flex-row gap-x-2 gap-y-2 flex-wrap">
                  <div className="flex-1">
                    <label className="text-white" htmlFor="startDate">
                      Start Date
                    </label>
                    <input
                      className="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1"
                      id="startDate"
                      type="date"
                      onChange={onChange}
                      name="startDate"
                      value={props.ev.startDate}
                    />
                  </div>
                  <div className="flex-1">
                    <label className="text-white" htmlFor="endDate">
                      End Date
                    </label>
                    <input
                      className="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1"
                      id="endDate"
                      type="date"
                      onChange={onChange}
                      name="endDate"
                      value={props.ev.endDate}
                    />
                  </div>
                  <div className="flex-1">
                    <label className="text-white" htmlFor="rsvp">
                      RSVP Deadline
                    </label>
                    <input
                      className="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1"
                      id="rsvp"
                      type="datetime-local"
                      onChange={onChange}
                      name="rsvp"
                      value={props.ev.rsvp}
                    />
                  </div>
                </div>
                <div className="mt-4 flex justify-end gap-5 mt-5">
                  <button
                    className="bg-red-400 text-bg1-col rounded-md px-4 py-1 hover:bg-blue-500 hover:text-white transition-all duration-200"
                    type="submit"
                    onClick={() => {
                      props.setShowModal(false);
                    }}
                  >
                    cancel
                  </button>
                  <button
                    className="bg-primary-col text-bg1-col rounded-md px-4 py-1 hover:bg-blue-500 hover:text-white transition-all duration-200"
                    type="submit"
                    onClick={() => {
                        props.updateEvent();
                      props.setShowModal(false);
                    }}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
