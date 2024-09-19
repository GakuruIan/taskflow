import React from "react";

import { IoCalendarNumberOutline } from "react-icons/io5";

const Upcoming = () => {
  return (
    <div className=" bg-white dark:bg-dark-200">
      <div className="p-4">
        <h6 className="text-sm tracking-wide mb-4">Upcoming Deadlines</h6>

        {/* upcoming activities */}
        <div className="min-h-80 h-80 overflow-y-scroll p-2">
          <div className="px-4">
            <ol className="relative border-s  border-gray-200 dark:border-gray-700">
              <li className="mb-10 ms-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-blue-100 dark:ring-dark-100 dark:bg-dark-100">
                  <IoCalendarNumberOutline />
                </span>
                <h3 className="flex items-center mb-1 text-base font-semibold text-gray-900 dark:text-white">
                  Flowbite Application UI v2.0.0
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  Released on January 13th, 2022
                </time>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                  Get access to over 20+ pages including a dashboard layout,
                  charts, kanban board, calendar, and pre-order E-commerce &
                  Marketing pages.
                </p>
              </li>
            </ol>
          </div>
        </div>
        {/* upcoming activities */}
      </div>
    </div>
  );
};

export default Upcoming;
