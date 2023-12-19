// components/MemberCard.js
"use client";
import React,{useContext} from "react";
import Context from "../ContextAPI";
const MemberCard = ({ member,setmod,setviewer }) => {
  const context=useContext(Context);
  const { clubID, id, name, role, instagram, github,linkedin } = member;
  return (
    <div className="flex-row md:flex justify-between mx-16 bg-bg2-col shadow-lg rounded-md p-2 space-y-2 md:space-y-0">
      <div className="flex space-x-8">

      <div className="text-xl text-text-col font-bold ml-2">{name}</div>
      {(id === context.head.id || id===context.faculty.id) && (
            <div className="text-xl text-text-col ml-2">{`(${role})`}</div>
          )}
      </div>
      <div className=" space-x-4 mx-4">
      <button
            className="bg-blue-800 text-white rounded-lg px-2 py-1 font-bold"
            onClick={() => {
              context.setcurrentmem(member);
              setviewer(1)
              setmod(true);
            }}
          >
            View
            </button>
      <button
            className="bg-green-900 text-white rounded-lg px-2 py-1 font-bold"
            onClick={() => {
              context.setcurrentmem(member);
              setviewer(0);
              setmod(true);
            }}
          >
            Edit
            </button>
          
          {(id !== context.head.id && id!==context.faculty.id) && (
            <button
              className="bg-red-900 text-white rounded-lg px-2 py-1 font-bold"
              onClick={() => {
                const updatedMembers = context.members.filter((m) => m.id !== member.id);
                context.setmembers(updatedMembers);
              }}  
            >
              Remove
            </button>
          )}
      </div>
    </div>
  
  );
};

export default MemberCard;
