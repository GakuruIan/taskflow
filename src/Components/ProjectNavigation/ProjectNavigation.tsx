import React from "react";

// framer motion
import { motion } from "framer-motion";

// icons
import { IoSearchOutline, IoCloseSharp } from "react-icons/io5";

interface Props{
   isOpen:boolean,
   setShowProjects:React.Dispatch<React.SetStateAction<boolean>>
}

const ProjectNavigation: React.FC<Props> = ({ isOpen,setShowProjects }) => {

  const variants = {
    close: {
      x: -300,
      opacity: 0,
      transition:{
        type: "spring",
        damping: 20,
        duration: 0.5,
      }
    },
    open: {
      x: 0,
      opacity: 1,
      transition:{
        type: "spring",
        damping: 20,
        duration: 0.5,
      }
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="close"
      animate="open"
      exit="close"
      className={`absolute h-screen w-64 z-10 top-0 bg-white dark:bg-dark-200 border-l border-l-gray-300 dark:border-l-dark-100 ${
        isOpen ? "left-56" : "left-14"
      }`}
    >
      <div className="p-2">
        <div className="flex items-center justify-between w-full mb-2">
          <h6 className="text-base mt-2 mb-4">Projects</h6>
          <button onClick={()=>setShowProjects(false)} className="p-1">
            <IoCloseSharp />
          </button>
        </div>
        <form
          action=""
          className="flex items-center gap-2 bg-lightmode-100 dark:bg-dark-100 p-3 rounded-md"
        >
          <input
            type="text"
            placeholder="project name"
            className="outline-0 bg-inherit w-full  "
          />
          <button className="outline-0 p-1">
            <IoSearchOutline />
          </button>
        </form>

        {/* projects */}
        <div className="mt-4 py-2">
          <h6 className="text-sm mb-2 dark:text-gray-400">All Projects</h6>

          {/* project */}
          <div className="w-full flex items-center p-2 mb-2 rounded gap-3 hover:cursor-pointer hover:dark:bg-dark-100 hover:bg-primary-100 hover:text-white">
            <div className="bg-transparent ring-2 h-2 w-2 ring-cyan-300 rounded-full" />
            <p className="text-base">Project name</p>
          </div>
          {/* project */}

          <div className="w-full flex items-center p-2 rounded gap-3 hover:cursor-pointer hover:dark:bg-dark-100 hover:bg-primary-100 hover:text-white">
            <div className="bg-transparent ring-2 h-2 w-2 ring-cyan-300 rounded-full" />
            <p className="text-base">Project name</p>
          </div>
        </div>
        {/* projects */}
      </div>
    </motion.div>
  );
};

export default ProjectNavigation;
