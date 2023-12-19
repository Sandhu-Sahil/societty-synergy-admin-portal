"use client";

import { useContext } from "react";
import { uid } from "uid";
import Context from "../ContextAPI";

export default function Modal({ setmod, viewer }) {
  const context = useContext(Context);
  const { currentmem, setcurrentmem } = context;

  const resetInputs = () => {
    setcurrentmem({});
  };

  return (
    <>
      <>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
          <div className="relative  my-6 mx-auto max-w-3xl bg-primary-col p-5  rounded-lg w-1/3 text-text-col">
            <div className="text-3xl font-extrabold text-center mb-4">
              {!viewer?"Edit Member":"View Member"}
            </div>
            <div className="flex flex-col ">
            <label
                htmlFor="role"
                className="text-xs mb-1 font-bold align-left"
              >
                Role
              </label>
              <input
                type="text"
                id="role"
                disabled={viewer}
                value={currentmem.role}
                onChange={(e) =>
                  setcurrentmem((prev) => ({ ...prev, role: e.target.value }))
                }
                className="w-full px-2 py-2 mb-2 border border-bg2-col rounded focus:outline-none bg-bg1-col"
              />
              <label htmlFor="linkedin" className="text-xs mb-1 font-bold w-1/4">
              Linkedin
              </label>
              <input
                type="text"
                id="linkedin"
                disabled={viewer}
                value={currentmem.linkedin}
                onChange={(e) =>
                  setcurrentmem((prev) => ({ ...prev, linkedin: e.target.value }))
                }
                className="w-full px-2 py-2 mb-2 border border-bg2-col rounded focus:outline-none bg-bg1-col item-center"
              />

             

              <label htmlFor="instagram" className="text-xs mb-1 font-bold">
                Instagram
              </label>
              <input
                type="text"
                id="instagram"
                disabled={viewer}
                value={currentmem.instagram}
                onChange={(e) =>
                  setcurrentmem((prev) => ({
                    ...prev,
                    instagram: e.target.value,
                  }))
                }
                className="w-full px-2 py-2 mb-2 border border-bg2-col rounded focus:outline-none bg-bg1-col"
              />

              <label htmlFor="github" className="text-xs mb-1 font-bold">
                GitHub
              </label>
              <input
                type="text"
                id="github"
                value={currentmem.github}
                disabled={viewer}
                onChange={(e) =>
                  setcurrentmem((prev) => ({ ...prev, github: e.target.value }))
                }
                className="w-full px-2 py-2 mb-2 border border-bg2-col rounded focus:outline-none bg-bg1-col"
              />

              <div className="flex flex-row space-x-4 mx-auto my-4">
                {!viewer?(<><button
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
                        linkedin:currentmem.linkedin
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
                </button></>):(<button
                  className="bg-blue-900 text-white rounded-lg px-4 py-2 font-bold"
                  onClick={() => {
                    resetInputs();
                    setmod(false);
                  }}
                >
                  Done
                </button>)}
              </div>
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </>
    </>
  );
}
