import React, { useState, useEffect } from "react";

// icons
import { GoSidebarCollapse, GoSidebarExpand } from "react-icons/go";
import {
  IoDocumentOutline,
  IoSettingsOutline,
  IoChatboxOutline,
  IoCalendarNumberOutline,
  IoLogOutOutline
} from "react-icons/io5";
import { MdDashboard,MdOutlineHelp } from "react-icons/md";
import { HiOutlineSquare2Stack } from "react-icons/hi2";

// components
import NavLink from "../NavigationLink/NavLink.tsx";
import ProjectLink from "../ProjectLink/ProjectLink.tsx";
import ProjectNavigation from "../ProjectNavigation/ProjectNavigation.tsx";

// framer motion
import { motion, useAnimationControls, AnimatePresence } from "framer-motion";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showProjects, setShowProjects] = useState(false);

  const containerControls = useAnimationControls();
  const titleControl = useAnimationControls();

  useEffect(() => {
    if (isOpen) {
      containerControls.start("open");
      titleControl.start("open");
    } else {
      containerControls.start("close");
      titleControl.start("close");
    }
  }, [isOpen]);

  const containerVariants = {
    close: {
      width: "3.5rem",
      transition: {
        type: "spring",
        damping: 15,
        duration: 0.5,
      },
    },
    open: {
      width: "14rem",
      transition: {
        type: "spring",
        damping: 15,
        duration: 0.5,
      },
    },
  };

  const titleVariants = {
    open: {
      display: "block",
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    close: {
      display: "none",
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <motion.nav
        variants={containerVariants}
        animate={containerControls}
        initial="close"
        className="h-screen  overflow-clip z-20 bg-white dark:bg-dark-200  absolute top-0 left-0 "
      >
        <div className="flex flex-col p-4 h-full w-full ">
          {/* header */}
          <div className="flex flex-row place-items-center w-full justify-between mb-4">
            <motion.h4
              variants={titleVariants}
              initial="close"
              animate={titleControl}
              className="text-base font-poppins font-medium "
            >
              TaskFlow
            </motion.h4>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1 rounded-full flex"
            >
              {isOpen ? <GoSidebarExpand /> : <GoSidebarCollapse />}
            </button>
          </div>
          {/* header */}

          <div className="flex-1 flex flex-col gap-y-2 py-2 mt-4">
            <NavLink url="/" text="Dashboard">
              <MdDashboard />
            </NavLink>

            {/* project */}
            <ProjectLink name="Projects" setShowProjects={setShowProjects}>
              <HiOutlineSquare2Stack />
            </ProjectLink>
            {/* project */}

            <NavLink url="/" text="Tasks">
              <IoDocumentOutline />
            </NavLink>
            <NavLink url="/" text="Calendar">
              <IoCalendarNumberOutline  />
            </NavLink>
            <NavLink url="/" text="Messages">
              <IoChatboxOutline />
            </NavLink>
            <NavLink url="/" text="Settings">
              <IoSettingsOutline />
            </NavLink>
            
          
          </div>

          {/* Logout */}
          <>
            <NavLink url="/" text="Help Center">
              <MdOutlineHelp />
            </NavLink>
            <NavLink url="/" text="Logout">
              <IoLogOutOutline />
            </NavLink>
          </>
        </div>
      </motion.nav>
      <AnimatePresence>
        {showProjects && <ProjectNavigation isOpen={isOpen} setShowProjects={setShowProjects}/>}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
