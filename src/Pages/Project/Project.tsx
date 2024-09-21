import React from "react";

// icons
import { IoTimeOutline, IoFlagSharp, IoTrashBinOutline } from "react-icons/io5";
import { GoPlus } from "react-icons/go";

// image
import pic from "../../assets/astronaut-art.jpg";

interface ColumnProps {
  text: String;
  column: String;
  icon?: String;
  cards?: [];
  setCards?: React.Dispatch<React.SetStateAction<[]>>;
}

const Column: React.FC<ColumnProps> = ({ text, column, cards, setCards }) => {
  return (
    <div className="w-56 shrink-0" >
      {/* column header */}
      <div className="flex items-center justify-between px-4 py-3 rounded-md bg-white dark:bg-dark-200">
        <div className="flex items-center gap-x-2">
          <h6 className="text-base font-saira">{text}</h6>
          <p className="text-sm">1</p>
        </div>
        <span className="h-6 w-6 flex items-center justify-center rounded-full bg-lightmode-100 dark:bg-dark-100">
          <GoPlus />
        </span>
      </div>

      <div className="h-full  mt-4" draggable>
        <div className="bg-white dark:bg-dark-200 rounded-md py-4 px-2">
          <div className="flex flex-col gap-y-2">
            <h6 className="text-sm">Task title</h6>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Sapiente, fugiat.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

const Project = () => {
  return (
    <div>
      <div className="pb-4 ">
        <div className="">
          {/* project overview */}
          <div className="flex flex-col gap-y-5 rounded-md bg-white dark:bg-dark-200 mt-6 py-4 px-4">
            <div className="flex items-center">
              <h6 className="text-2xl">Project name</h6>
            </div>

            {/* project description */}
            <p className="max-w-3xl  text-sm text-gray-700 dark:text-gray-500">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae
              quidem natus suscipit distinctio, soluta temporibus placeat
              quibusdam earum veniam modi, maxime quod non laborum facilis.
              Dolorum nam, impedit ad nemo iste expedita dignissimos labore
              tenetur architecto et vel dolorem quam voluptate ut, animi nisi
              voluptatem? Quod sapiente non officiis, impedit iure, dicta, esse
              corporis asperiores iste mollitia libero possimus aliquid?
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-x-4">
                <div className="flex items-center gap-x-2">
                  <IoTimeOutline />
                  <p className="text-sm text-gray-400 dark:text-gray-600">
                    3 days to go
                  </p>
                </div>
                <div className="flex items-center gap-x-2">
                  <IoFlagSharp className="text-red-600" />
                  <p className="text-sm text-gray-400 dark:text-gray-600">
                    Flagged as urgent
                  </p>
                </div>
              </div>

              <div className="">
                <div className="flex -space-x-4 rtl:space-x-reverse">
                  <img
                    className="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800"
                    src={pic}
                    alt=""
                  />
                  <img
                    className="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800"
                    src={pic}
                    alt=""
                  />
                  <img
                    className="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800"
                    src={pic}
                    alt=""
                  />
                  <a
                    className="flex items-center justify-center w-8 h-8 text-base font-medium text-white bg-primary-100 border-2 border-white rounded-full hover:bg-primary-100 dark:border-dark-100"
                    href="#"
                  >
                    <GoPlus />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* kaban */}
          <div className=" mt-4 py-4 ">
            <div className=" w-full flex gap-x-3">
              <Column text="Todo" column="todo" />

              <Column text="In progress" column="inprogress" />
              <Column text="Review" column="review" />
              <Column text="Complete" column="complete" />
              <Column text="Delete" column="delete" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
