"use client";
import React, { useState, useContext, useEffect } from "react";
import Context from "@/ContextAPI";
import MemberCard from "@/components/MemberCard";
import MemberModal from "@/components/MemberModal";
import { useRouter } from "next/navigation";

function MemberMgmt() {
  let router = useRouter();
  useEffect(() => {
    // if(!localStorage.getItem('synergy-token')){
    //   router.push('/login');
    // }
  }, []);
  const context = useContext(Context);
  const { faculty, head, members } = context;
  const [modaler, setmodaler] = useState(false);
  return (
    <div className="bg-bg1-col">
      <div className="p-8 ">
      <div className="md:flex justify-between items-center p-4 mb-8">
  <h1 className="text-4xl font-bold text-text-col  px-4 py-2 rounded-md">
    Member Management
  </h1>
  <button
    className="bg-primary-col text-white rounded-lg px-4 py-2 font-bold"
    onClick={() => {
      setmodaler(true);
    }}
  >
    Add Member
  </button>
</div>



        <div className="md:flex md:justify-around mx-32 mb-8">
          <MemberCard member={faculty} setmod={setmodaler} />
          <MemberCard member={head} setmod={setmodaler} />
        </div>
        <div className="grid md:grid-cols-3 flex-row items-center">
          {members.map((member) => (
            <MemberCard key={member.id} member={member} setmod={setmodaler} />
          ))}
          {modaler && <MemberModal setmod={setmodaler} />}
        </div>
      </div>
    </div>
  );
}

export default MemberMgmt;
