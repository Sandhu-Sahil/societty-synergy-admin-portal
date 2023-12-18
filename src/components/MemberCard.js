// components/MemberCard.js
"use client";
import React,{useContext} from "react";
import Context from "../ContextAPI";
const MemberCard = ({ member,setmod }) => {
  const context=useContext(Context);
  const { id, photo, name, role, instagram, github } = member;
  return (
    <div className="flex justify-center items-center ">
  <div className="bg-900 w-80 shadow-md rounded-md my-2 p-4">
    <div className="mb-4 text-center">
      <img
        src={//random image
          "https://i.guim.co.uk/img/media/ac3a7be3d4cdc0b7ed07b2eeb41c03df9e1887c6/1810_1937_3427_2056/master/3427.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=025145ce6c9529fef3075f8c0cb136d3"
        }
        alt={name}
        className="w-16 h-16 object-cover rounded-full mx-auto"
      />
    </div>
    <div className="text-center">
      <div className="text-xl font-semibold mb-1">{name}</div>
      <div className="text-gray-600 mb-2">{role}</div>
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
