'use client';

import Login from '@/components/Login';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const page = () => {

  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const [show, setshow] = useState(false);

  let router = useRouter();

  useEffect(() => {
    if(localStorage.getItem('synergy-token')){
      router.push('/')
    }
  }, [])

  return (
    <div className='h-screen flex items-center justify-center'>
      <Login creds = {{email,setemail,pass,setpass,show,setshow}}/>
      <ToastContainer/>
    </div>
  )
}

export default page
