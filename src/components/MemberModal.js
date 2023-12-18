"use client";

import { useContext } from "react";
import { uid } from "uid";
import Context from "../ContextAPI";

export default function Modal({ setmod }) {
  const context = useContext(Context);
  const { currentmem, setcurrentmem } = context;

  const resetInputs = () => {
    setcurrentmem({});
  };

  return (
    <>
      <>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative  my-6 mx-auto max-w-3xl bg-white p-5  rounded-lg w-1/3">
            <div className="text-xl font-extrabold text-center mb-4">
              Edit Member
            </div>
            <div className="flex flex-col ">
              <img
                src={
                  "https://i.guim.co.uk/img/media/ac3a7be3d4cdc0b7ed07b2eeb41c03df9e1887c6/1810_1937_3427_2056/master/3427.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=025145ce6c9529fef3075f8c0cb136d3"
                }
                alt={"name"}
                className="w-16 h-16 object-cover rounded-full mb-2 mx-auto"
              />
              <label htmlFor="name" className="text-xs mb-1 font-bold w-1/4">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={currentmem.name}
                onChange={(e) =>
                  setcurrentmem((prev) => ({ ...prev, name: e.target.value }))
                }
                className="w-full px-2 py-2 mb-2 border border-gray-300 rounded focus:outline-none item-center"
              />

              <label
                htmlFor="role"
                className="text-xs mb-1 font-bold align-left"
              >
                Role
              </label>
              <input
                type="text"
                id="role"
                value={currentmem.role}
                onChange={(e) =>
                  setcurrentmem((prev) => ({ ...prev, role: e.target.value }))
                }
                className="w-full px-2 py-2 mb-2 border border-gray-300 rounded focus:outline-none"
              />

              <label htmlFor="instagram" className="text-xs mb-1 font-bold">
                Instagram
              </label>
              <input
                type="text"
                id="instagram"
                value={currentmem.instagram}
                onChange={(e) =>
                  setcurrentmem((prev) => ({
                    ...prev,
                    instagram: e.target.value,
                  }))
                }
                className="w-full px-2 py-2 mb-2 border border-gray-300 rounded focus:outline-none"
              />

              <label htmlFor="github" className="text-xs mb-1 font-bold">
                GitHub
              </label>
              <input
                type="text"
                id="github"
                value={currentmem.github}
                onChange={(e) =>
                  setcurrentmem((prev) => ({ ...prev, github: e.target.value }))
                }
                className="w-full px-2 py-2 mb-2 border border-gray-300 rounded focus:outline-none"
              />

              <div className="flex flex-row space-x-4 mx-auto my-4">
                <button
                  className="bg-red-900 text-white rounded-lg px-4 py-2 font-bold"
                  onClick={() => {
                    resetInputs();
                    setmod(false);
                  }}
                >
                  Cancel
                </button>
                <button
                  className="bg-green-900 text-white rounded-lg px-4 py-2 font-bold"
                  onClick={() => {
                    if (!currentmem.hasOwnProperty("id")) {
                      let idd=uid(32);
                      var arr = {
                        id: idd,
                        name: currentmem.name,
                        role: currentmem.role,
                        github: currentmem.github,
                        instagram: currentmem.instagram,
                      };
                      var arra = context.members;
                      arra.push(arr);
                      context.setmembers(arra);
                      resetInputs();
                      setmod(false);
                      return;
                    }
                    if (context.faculty.id === currentmem.id) {
                      context.setfaculty(currentmem);
                    } else if (context.head.id === currentmem.id) {
                      context.sethead(currentmem);
                    } else {
                      var arr = context.members;
                      var i;
                      for (i in arr) {
                        if (arr[i].id === currentmem.id) {
                          arr[i].name = currentmem.name;
                          arr[i].role = currentmem.role;
                          (arr[i].instagram = currentmem.instagram),
                            (arr[i].github = currentmem.github);
                          break;
                        }
                      }
                      context.setmembers(arr);
                    }
                    resetInputs();
                    setmod(false);
                  }}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </>
    </>
  );
}
