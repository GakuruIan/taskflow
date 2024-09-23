import React, { useState,useEffect } from "react";

// icons
import { IoTimeOutline, IoFlagSharp} from "react-icons/io5";
import { GoPlus } from "react-icons/go";


// image
import pic from "../../assets/astronaut-art.jpg";

// components
import BurnBarrel from "../../Components/BurnBarrel/BurnBarrel.tsx";
import Column from "../../Components/Column/Column.tsx";

// dummy data
import { Cards } from "../../utils/data.ts";

const Project = () => {

   const [cards,setCards] = useState(Cards);

  //  useEffect(() => {
  //    setCards(Cards)
  //  }, [cards]);

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
              <Column text="Todo" column="Todo" cards={cards} setCards={setCards}/>

              <Column text="In progress" column="In Progress" cards={cards} setCards={setCards}/>
              <Column text="Review" column="Review" cards={cards} setCards={setCards}/>
              <Column text="Complete" column="Complete" cards={cards} setCards={setCards}/>
              <BurnBarrel setCards={setCards}/>
              {/* <Column text="Delete" column="delete" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
