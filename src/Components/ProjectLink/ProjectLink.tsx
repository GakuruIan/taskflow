import React from "react";

import { IoChevronForward } from "react-icons/io5";

interface Props {
  children:React.ReactNode
  name: string;
  setShowProjects:React.Dispatch<React.SetStateAction<boolean>>
}
const ProjectLink = ({children, name,setShowProjects }: Props) => {
  const handleChangeState =()=>{
    setShowProjects(prev=>!prev)
    console.log("first")
  }

  return (
    <div>

        <button onClick={handleChangeState} className=" p-1 flex items-center gap-2.5 py-2  mb-1 w-full rounded hover:cursor-pointer  hover:dark:bg-dark-100 hover:bg-primary-100 hover:text-white">
          {/* task state */}
          <div className="min-w-8">
          {children}
          </div>
          {/* task state */}
         <div className="flex items-center w-full justify-between">
         <p className="text-base font-normal overflow-clip whitespace-nowrap ">
            {name}
          </p>
          <IoChevronForward />
         </div>
        </button>

    </div>
  );
};

export default ProjectLink;
