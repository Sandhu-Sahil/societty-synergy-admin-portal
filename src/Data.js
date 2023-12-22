"use client";
import { useState } from "react";
import Context from "./ContextAPI";
import axios from "axios";
const Synergy = ({ children }) => {
  const [dept, setdept] = useState(null);
  const [members, setmembers] = useState(null);
  const [currentmem, setcurrentmem] = useState({});
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const [show, setshow] = useState(false);
  const [loggedin, setloggedin] = useState(true);
  const [recentEvents, setrecentEvents] = useState(null);
  const getDept = async () => {
    const response = await axios.get("societysynergy/getdept");
    setdept(response.data);
    setmembers(response.data.members);
    setrecentEvents(response.data.events);
  };
  const [faculty, setfaculty] = useState({
    id: -123232,
    linkedin: "url-to-linkedin",
    name: "Shkha Mehta",
    role: "Faculty Head",
    instagram: "https://www.instagram.com/johndoe/",
    github: "https://github.com/johndoe",
  });
  const [head, sethead] = useState({
    id: -323231,
    linkedin: "url-to-linkedin",
    name: "Sahilsher Singh",
    role: "Society Head",
    instagram: "https://www.instagram.com/johndoe/",
    github: "https://github.com/johndoe",
  });

  return (
    <Context.Provider
      value={{
        faculty,
        head,
        members,
        setfaculty,
        sethead,
        setmembers,
        currentmem,
        setcurrentmem,
        email,
        setemail,
        pass,
        setpass,
        show,
        setshow,
        loggedin,
        setloggedin,
        recentEvents,
        dept,
        getDept,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export default Synergy;
