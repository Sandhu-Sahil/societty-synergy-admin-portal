"use client";
import { useEffect, useState, useContext } from 'react';
import MemberCard from '../../components/MemberCard'; 
import MemberModal from '../../components/MemberModal'; 
import Context from '../../ContextAPI'; 
import { Pagination,Button } from '@nextui-org/react';

function MemberMgmt() {
  // let router = useRouter();
  useEffect(() => {
    // if(!localStorage.getItem('synergy-token')){
    //   router.push('/login');
    // }
  }, []);

  const context = useContext(Context);
  const { members } = context;
  const [modaler, setmodaler] = useState(false);
  const [pageno, setpageno] = useState(1);
  const [viewer, setviewer] = useState(0);
  const itemsPerPage = 6;

  const startIndex = (pageno - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleMembers = members.slice(startIndex, endIndex);

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

        <div className="flex-row  md:mx-32 mb-8 space-y-4">
          <MemberCard member={context.faculty} setmod={setmodaler} setviewer={setviewer}/>
          <MemberCard member={context.head} setmod={setmodaler} setviewer={setviewer}/>
        </div>

        <div className="flex-row space-y-4 mb-10">
          {visibleMembers.map((member) => (
            <MemberCard key={member.id} member={member} setmod={setmodaler} setviewer={setviewer}/>
          ))}
          {modaler && <MemberModal setmod={setmodaler} viewer={viewer}/>}
        </div>

        <div className="flex items-center text-text-col justify-center">
          <Pagination
            total={Math.ceil(members.length / itemsPerPage)}
            onChange={(kk) => {
              setpageno(kk);
            }}
            classNames={{
              wrapper:
                "gap-0 overflow-visible h-8 rounded border border-divider bg-bg2-col",
              item:
                "w-8 h-8 text-small rounded-none bg-transparent text-text-col",
              cursor:
                "bg-gradient-to-b shadow-lg from-default-500 to-default-800 dark:from-default-300 dark:to-default-100 text-white font-bold",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default MemberMgmt;
