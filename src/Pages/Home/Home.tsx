import React from "react";
import { Link } from "react-router-dom";

// components
import Upcoming from "../../Components/Upcoming/Upcoming.tsx";
import Analytics from "../../Components/Analytics/Analytics.tsx";

// icons
import { IoAddCircleOutline } from "react-icons/io5";
import { FaFolderOpen } from "react-icons/fa6";
import Datagrid from "../../Components/Datagrid/Datagrid.tsx";

const Home = () => {
  return (
    <div>
      <div className="pb-8">
        <div className="px-2">
          <div className="flex items-center justify-between">
            <h6 className="text-xl my-4 font-saira">
              Good afternoon ,Username
            </h6>

            <div className="flex items-center gap-x-2">
              <Link
                to="/"
                className="px-4 py-1.5 flex items-center gap-2 text-white bg-primary-200 hover:bg-primary-200 rounded-md"
              >
                <IoAddCircleOutline />
                Create Task
              </Link>

              <Link
                to="/"
                className="px-4 py-1.5 flex items-center gap-2 text-white bg-primary-200 hover:bg-primary-200 rounded-md"
              >
                <FaFolderOpen />
                Create Project
              </Link>
            </div>
          </div>

          {/* anayltics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-2 mt-6">
            <div className=" w-full rounded-md bg-white dark:bg-dark-200  p-3">
              <p className="text-base text-gray-400 tracking-wide mb-3">
                Total Projects
              </p>
              <div className="px-2">
                <div className="flex items-center w-full gap-x-2">
                  <div className="flex items-center  h-14  border-l-2 border-l-pink-400 justify-center"></div>
                  <p className="text-5xl ml-2 font-poppins"> 200</p>
                </div>
              </div>
            </div>

            <div className="h-28 w-full rounded-md bg-white dark:bg-dark-200  p-3">
              <p className="text-base text-gray-400 tracking-wide mb-2">
                Completed Projects
              </p>
              <div className="px-2">
                <div className="flex items-center w-full gap-x-2">
                  <div className="flex items-center  h-14  border-l-2 border-l-emerald-400 justify-center"></div>
                  <p className="text-5xl ml-2 font-poppins"> 187</p>
                </div>
              </div>
            </div>

            <div className="h-28 w-full rounded-md bg-white dark:bg-dark-200  p-3">
              <p className="text-base text-gray-400 tracking-wide mb-2">
                Incomplete Projects
              </p>
              <div className="px-2">
                <div className="flex items-center w-full gap-x-2">
                  <div className="flex items-center  h-14  border-l-2 border-l-indigo-400 justify-center"></div>
                  <p className="text-5xl ml-2 font-poppins"> 6</p>
                </div>
              </div>
            </div>

            <div className="h-28 w-full rounded-md bg-white dark:bg-dark-200  p-3">
              <p className="text-base text-gray-400 tracking-wide mb-2">
                Out of schedule
              </p>
              <div className="px-2">
                <div className="flex items-center w-full gap-x-2">
                  <div className="flex items-center  h-14  border-l-2 border-l-indigo-400 justify-center"></div>
                  <p className="text-5xl ml-2 font-poppins">7</p>
                </div>
              </div>
            </div>
          </div>
          {/* anayltics */}

          <div className="w-full mt-6">
            <div className="h-full grid grid-cols-12  gap-x-2  ">
              <div className="p-4 col-span-12 md:col-span-9 dark:bg-dark-200">
                <h6 className="text-sm tracking-wide mb-">Tasks due today</h6>

                <Datagrid />
              </div>

              <div className="p-4  col-span-12 md:col-span-3 dark:bg-dark-200">
                <Analytics />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-y-2 md:gap-y-0 md:grid-cols-2 gap-x-2 mt-6">
            {/* upcoming schedules */}
            <Upcoming />

            <div className="h-96 bg-white dark:bg-dark-200">
              <div className="p-4">
                <h6 className="text-sm tracking-wide mb-4">Calendar</h6>
                <div className="h-[300px] flex items-center justify-center w-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
