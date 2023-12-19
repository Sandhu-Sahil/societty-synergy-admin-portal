'use client';
import { useState } from "react";
import Context from "./ContextAPI";
// import axios from "axios";
const Synergy = ({ children }) => {
  const [faculty, setfaculty] = useState({
    id: -123232,
    linkedin: "url-to-linkedin",
    name: "John Doe",
    role: "Faculty Head",
    instagram: "https://www.instagram.com/johndoe/",
    github: "https://github.com/johndoe",
  });
  const [head, sethead] = useState({
    id: -323231,
    linkedin: "url-to-linkedin",
    name: "John Doe",
    role: "Society Head",
    instagram: "https://www.instagram.com/johndoe/",
    github: "https://github.com/johndoe",
  });
  const [members, setmembers] = useState([
    {
      id: 1,
      name: "Alice Smith",
      role: "Full Stack Developer",
      linkedin: "https://www.linkedin.com/in/alicesmith/",
      github: "https://github.com/alicesmith",
    },
    {
      id: 2,
      name: "Bob Johnson",
      role: "UX/UI Designer",
      linkedin: "https://www.linkedin.com/in/bobjohnson/",
      github: "https://github.com/bobjohnson",
    },
    {
      id: 3,
      name: "Charlie Brown",
      role: "Data Scientist",
      linkedin: "https://www.linkedin.com/in/charliebrown/",
      github: "https://github.com/charliebrown",
    },
    {
      id: 4,
      name: "Diana Miller",
      role: "Mobile App Developer",
      linkedin: "https://www.linkedin.com/in/dianamiller/",
      github: "https://github.com/dianamiller",
      instagram: "https://instagram.com/dianamiller",
    },
    {
      id: 5,
      name: "Edward Wilson",
      role: "DevOps Engineer",
      linkedin: "https://www.linkedin.com/in/edwardwilson/",
      github: "https://github.com/edwardwilson",
    },
    {
      id: 6,
      name: "Fiona Davis",
      role: "Product Manager",
      linkedin: "https://www.linkedin.com/in/fionadavis/",
      github: "https://github.com/fionadavis",
    },{
      id: 7,
      name: "George Turner",
      role: "Backend Developer",
      linkedin: "https://www.linkedin.com/in/georgeturner/",
      github: "https://github.com/georgeturner",
    },
    {
      id: 8,
      name: "Hannah Lee",
      role: "Machine Learning Engineer",
      linkedin: "https://www.linkedin.com/in/hannahlee/",
      github: "https://github.com/hannahlee",
    },
    {
      id: 9,
      name: "Ian Rodriguez",
      role: "Frontend Developer",
      linkedin: "https://www.linkedin.com/in/ianrodriguez/",
      github: "https://github.com/ianrodriguez",
    },
    {
      id: 10,
      name: "Jasmine Patel",
      role: "UI/UX Designer",
      linkedin: "https://www.linkedin.com/in/jasminepatel/",
      github: "https://github.com/jasminepatel",
    },
    {
      id: 11,
      name: "Kevin Chang",
      role: "Full Stack Developer",
      linkedin: "https://www.linkedin.com/in/kevinchang/",
      github: "https://github.com/kevinchang",
    },
    {
      id: 12,
      name: "Lily Chen",
      role: "Data Scientist",
      linkedin: "https://www.linkedin.com/in/lilychen/",
      github: "https://github.com/lilychen",
    },
    {
      id: 13,
      name: "Megan Taylor",
      role: "Mobile App Developer",
      linkedin: "https://www.linkedin.com/in/megantaylor/",
      github: "https://github.com/megantaylor",
    },
    {
      id: 14,
      name: "Nathan Brown",
      role: "DevOps Engineer",
      linkedin: "https://www.linkedin.com/in/nathanbrown/",
      github: "https://github.com/nathanbrown",
    },
    {
      id: 15,
      name: "Olivia White",
      role: "Product Manager",
      linkedin: "https://www.linkedin.com/in/oliviawhite/",
      github: "https://github.com/oliviawhite",
    },
    {
      id: 16,
      name: "Peter Evans",
      role: "Frontend Developer",
      linkedin: "https://www.linkedin.com/in/peterevans/",
      github: "https://github.com/peterevans",
    },
    {
      id: 17,
      name: "Quinn Miller",
      role: "UI/UX Designer",
      linkedin: "https://www.linkedin.com/in/quinnmiller/",
      github: "https://github.com/quinnmiller",
    },
    {
      id: 18,
      name: "Ryan Carter",
      role: "Full Stack Developer",
      linkedin: "https://www.linkedin.com/in/ryancarter/",
      github: "https://github.com/ryancarter",
    },
    {
      id: 19,
      name: "Samantha Hall",
      role: "Backend Developer",
      linkedin: "https://www.linkedin.com/in/samanthahall/",
      github: "https://github.com/samanthahall",
    },
    {
      id: 20,
      name: "Trevor Martinez",
      role: "Machine Learning Engineer",
      linkedin: "https://www.linkedin.com/in/trevormartinez/",
      github: "https://github.com/trevormartinez",
    },{
      id: 21,
      name: "Uma Patel",
      role: "UX/UI Designer",
      linkedin: "https://www.linkedin.com/in/umapatel/",
      github: "https://github.com/umapatel",
    },
    {
      id: 22,
      name: "Victor Kim",
      role: "Backend Developer",
      linkedin: "https://www.linkedin.com/in/victorkim/",
      github: "https://github.com/victorkim",
    },
    {
      id: 23,
      name: "Wendy Chen",
      role: "Frontend Developer",
      linkedin: "https://www.linkedin.com/in/wendychen/",
      github: "https://github.com/wendychen",
    },
    {
      id: 24,
      name: "Xavier Lee",
      role: "Full Stack Developer",
      linkedin: "https://www.linkedin.com/in/xavierlee/",
      github: "https://github.com/xavierlee",
    },
    {
      id: 25,
      name: "Yasmine Garcia",
      role: "Product Manager",
      linkedin: "https://www.linkedin.com/in/yasminegarcia/",
      github: "https://github.com/yasminegarcia",
    },
    {
      id: 26,
      name: "Zane Adams",
      role: "Mobile App Developer",
      linkedin: "https://www.linkedin.com/in/zaneadams/",
      github: "https://github.com/zaneadams",
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
