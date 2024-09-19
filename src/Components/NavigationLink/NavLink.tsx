import React from "react";
import { Link } from "react-router-dom";

interface NavProps {
  children: React.ReactNode;
  url: string;
  text: string;
}

const NavLink = ({ children, url, text}: NavProps) => {
  return (
    <Link
      to={url}
      className=" p-1  mb-1 w-full rounded  hover:dark:bg-dark-100 hover:bg-primary-100 hover:text-white"
    >
      <div className="flex flex-row items-center py-1.5  gap-2.5">
        <div className="min-w-8 w-8 flex place-items-center">{children}</div>
        <p className="text-base font-normal overflow-clip whitespace-nowrap ">
          {text}
        </p>
      </div>
    </Link>
  );
};

export default NavLink;
