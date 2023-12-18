'use client';

import Login from '@/components/Login';
import { useRouter } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Context from '@/ContextAPI';

const page = () => {


  const context = useContext(Context);
  const{email,setemail,pass,setpass,show,setshow,setloggedin} = context;
  let router = useRouter();
  useEffect(() => {
    if(localStorage.getItem('synergy-token')){
      router.push('/')
    }
  }, [])

  return (
    <div className='h-screen flex items-center justify-center'>
      <Login creds = {{email,setemail,pass,setpass,show,setshow}} setloggedin={setloggedin}/>
      <ToastContainer/>
    </div>
  )
}

export default page
