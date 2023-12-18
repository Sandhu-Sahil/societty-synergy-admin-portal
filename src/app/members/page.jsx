"use client";
import React,{useState,useContext} from 'react';
import Context from '@/ContextAPI';
import MemberCard from '@/components/MemberCard';
import MemberModal from '@/components/MemberModal';

function MemberMgmt() {
    const context = useContext(Context);
    const {faculty,head,members}=context;
    const [modaler, setmodaler] = useState(false);
    return (
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-8">Member Management</h1>
        <div className="flex justify-end mb-4">
        <button className="bg-blue-900 text-white rounded-lg px-4 py-2 font-bold" 
        onClick={()=>{
          setmodaler(true);
        }}>
            Add Member
          </button>
        </div>
        <MemberCard member={faculty} setmod={setmodaler}/> 
        <MemberCard member={head} setmod={setmodaler}/> 
        <div className="grid md:grid-cols-3 flex-row items-center">
        {members.map((member) => (
        <MemberCard key={member.id} member={member} setmod={setmodaler}/>
         ))} 
           {modaler && <MemberModal setmod={setmodaler}/>}
      </div>
      </div>
    );
}

export default MemberMgmt