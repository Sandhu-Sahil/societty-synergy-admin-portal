'use client';
import { useState } from "react";
import Context from "./ContextAPI";
// import axios from "axios";
const Synergy = ({ children }) => {
  const [faculty, setfaculty] = useState({
    id: -1,
    photo: "url-to-photo",
    name: "John Doe",
    role: "Faculty Head",
    instagram: "https://www.instagram.com/johndoe/",
    github: "https://github.com/johndoe",
  });
  const [head, sethead] = useState({
    id: -1,
    photo: "url-to-photo",
    name: "John Doe",
    role: "Society Head",
    instagram: "https://www.instagram.com/johndoe/",
    github: "https://github.com/johndoe",
  });
  const [members, setmembers] = useState([
    {
      id: 1,
      photo: "url-to-photo-1",
      name: "John Doe 1",
      role: "Frontend Developer 1",
      instagram: "https://www.instagram.com/johndoe1/",
      github: "https://github.com/johndoe1",
    },
    {
      id: 2,
      photo: "url-to-photo-2",
      name: "John Doe 2",
      role: "Frontend Developer 2",
      instagram: "https://www.instagram.com/johndoe2/",
      github: "https://github.com/johndoe2",
    },
    {
      id: 3,
      photo: "url-to-photo-3",
      name: "John Doe 3",
      role: "Frontend Developer 3",
      instagram: "https://www.instagram.com/johndoe3/",
      github: "https://github.com/johndoe3",
    },
    {
      id: 4,
      photo: "url-to-photo-4",
      name: "John Doe 4",
      role: "Frontend Developer 4",
      instagram: "https://www.instagram.com/johndoe4/",
      github: "https://github.com/johndoe4",
    },
    {
      id: 5,
      photo: "url-to-photo-5",
      name: "John Doe 5",
      role: "Frontend Developer 5",
      instagram: "https://www.instagram.com/johndoe5/",
      github: "https://github.com/johndoe5",
    },
    {
      id: 6,
      photo: "url-to-photo-6",
      name: "John Doe 6",
      role: "Frontend Developer 6",
      instagram: "https://www.instagram.com/johndoe6/",
      github: "https://github.com/johndoe6",
    },
  ]);
  const [currentmem, setcurrentmem] = useState({});
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const [show, setshow] = useState(false);
  const [loggedin, setloggedin] = useState(true)
  return (
    <Context.Provider
      value={{ faculty, head, members, setfaculty, sethead, setmembers ,currentmem,setcurrentmem,email,setemail,pass,setpass,show,setshow,loggedin,setloggedin}}
    >
      {children}
    </Context.Provider>
  );
};
export default Synergy;
