import React from "react";

// icons
import {
  IoMoonOutline,
  IoSunnyOutline,
  IoNotificationsOutline,
} from "react-icons/io5";

import img from "../../assets/astronaut-art.jpg";

const Topbar = () => {
  return (
    <>
      <div className="w-full relative flex items-center justify-between py-4 h-14 bg-white dark:bg-dark-200 px-2">
        <p className="text-base">Home</p>
        <div className=" relative">
          <div className="flex items-center gap-x-3">
            <div className="flex items-center justify-between w-16 gap-2 bg-lightmode-100 dark:bg-dark-100 p-2 rounded-full">
              <IoMoonOutline />
              <IoSunnyOutline />
            </div>
            <span>
              <IoNotificationsOutline />
            </span>
            {/* avatar */}
            <img
              className="w-8 h-8 rounded-full"
              src={img}
              alt="Rounded avatar"
            ></img>

            {/* dropdown */}
            <div
              id="dropdownInformation"
              className="z-10 hidden absolute top-12 right-0 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-dark-200 dark:divide-gray-600"
            >
              <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                <div>Bonnie Green</div>
                <div className="font-medium truncate">name@flowbite.com</div>
              </div>
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownInformationButton"
              >
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Profile
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Settings
                  </a>
                </li>
              </ul>
              <div className="py-2">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Sign out
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;

{
  /* <label className="inline-flex items-center me-5 cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
              <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                Purple
              </span>
            </label> */
}
