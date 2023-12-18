// components/MemberCard.js
"use client";
import React,{useContext} from "react";
import Context from "../ContextAPI";
const MemberCard = ({ member,setmod }) => {
  const context=useContext(Context);
  const { id, photo, name, role, instagram, github } = member;
  return (
    <div className="flex justify-center items-center ">
  <div className="bg-900 w-80 shadow-md rounded-md my-2 p-4 bg-primary-col">
    
    <div className="text-center">
      <div className="text-xl font-extrabold mb-1 text-text-col">{name}</div>
      <div className="text-text-col mb-2 text-bold">{role}</div>
      <div className="flex justify-center space-x-4 my-4">
        {id!==-1 && <button className="bg-red-900 text-white rounded-lg px-4 py-2 font-bold"
        onClick={()=>{
          var arr=[];
          var i;
          for(i in context.members){
            if(context.members[i].id!=member.id){
              arr.push(context.members[i]);
            }
          }
          context.setmembers(arr);
        }}>
          Remove
        </button>}
        <button className="bg-green-900 text-white rounded-lg px-4 py-2 font-bold" onClick={()=>
        {
          context.setcurrentmem(member);
          setmod(true);
        }}>
          Edit Details
        </button>
      </div>
    </div>
  </div>
</div>

  );
};

export default MemberCard;
