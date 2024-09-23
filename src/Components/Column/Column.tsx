import React, { useState } from "react";

// icons
import { GoPlus } from "react-icons/go";
import { FaPlus } from "react-icons/fa6";
import { IoChatboxOutline } from "react-icons/io5";

// framer motion
import {motion} from 'framer-motion'

// image
import pic from "../../assets/astronaut-art.jpg";

// components
import Modal from "../Modal/Modal.tsx";

// constants
import {card} from '../../utils/Contants.ts'

interface ColumnProps {
  text: string;
  column: string;
  icon?: string;
  cards: card[];
  setCards?: React.Dispatch<React.SetStateAction<card[]>>;
}

const Column: React.FC<ColumnProps> = ({ text, column, cards, setCards }) => {
  const [adding, setIsAdding] = useState(false);

  const filteredCards = cards.filter((card) => card.column === column);

  const handleDragStart=(e:any,card:card)=>{
    e.dataTransfer.setData("cardId",card.id.toString())
  }

  return (
    <div className="w-56 shrink-0">
      {/* column header */}
      <div className="flex items-center justify-between px-4 py-3 rounded-md bg-white dark:bg-dark-200">
        <div className="flex items-center gap-x-2">
          <h6 className="text-base font-saira">{text}</h6>
          <p className="text-sm">{filteredCards.length}</p>
        </div>
        <span className="h-6 w-6 flex items-center justify-center rounded-full bg-lightmode-100 dark:bg-dark-100">
          <GoPlus />
        </span>
      </div>

      {/* column content */}
      <div className="h-full  mt-4">
        {/* task content */}
        {filteredCards.map((card) => {
          return (
            <motion.div
              layout
              layoutId={card.id.toString()}
              onDragStart={(e)=>handleDragStart(e,card)}
              key={card.id}
              className="bg-white dark:bg-dark-200 rounded-md py-4 px-2 mb-2"
              draggable
            >
              <div className="flex flex-col gap-y-2.5">
                <div className="flex items-center justify-between">
                  <h6 className="text-sm">{card.title}</h6>
                  <span className="text-xs font-medium me-2 px-2.5 py-1 rounded-full bg-green-700 text-green-300">{card.tag}</span>
                </div>
                <p className="text-sm text-gray-500">{card.description}</p>

                <div className="pt-1.5 flex items-center justify-between border-t dark:border-dark-100">
                  {/* assigned members of the task */}
                  <div className="flex -space-x-4 rtl:space-x-reverse">
                    <img
                      className="w-6 h-6 border-2 border-white rounded-full dark:border-gray-800"
                      src={pic}
                      alt=""
                    />

                    <a
                      className="flex items-center justify-center w-6 h-6 text-base font-medium text-white bg-primary-100 border-2 border-white rounded-full hover:bg-primary-100 dark:border-dark-100"
                      href="#"
                    >
                      <GoPlus />
                    </a>
                  </div>
                  {/* assigned members of the task */}

                  <div className="">
                    <IoChatboxOutline />
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}

        {/* task content */}

        {adding ? (
          <Modal title="Create Task" setIsAdding={setIsAdding}>
            <form className="p-4 md:p-5">
              <div className="grid gap-4 mb-4 grid-cols-2">
                <div className="col-span-2">
                  <label className="block mb-2 text-sm  text-gray-900 dark:text-white">
                    Task title
                  </label>
                  <input
                    type="text"
                    name="title"
                    id="name"
                    className="bg-lightmode-100 outline-0 text-gray-900 text-sm rounded-sm block w-full p-2.5 dark:bg-dark-100  dark:placeholder-gray-400 dark:text-white  "
                    placeholder="UI/UX design"
                  />
                </div>

                <div className="col-span-2">
                  <label className="block mb-2 text-sm text-gray-900 dark:text-white">
                    Product Description
                  </label>
                  <textarea
                    id="description"
                    className="bg-lightmode-100 outline-0 text-gray-900 text-sm rounded-sm block w-full p-2.5 dark:bg-dark-100  dark:placeholder-gray-400 dark:text-white "
                    placeholder="Write product description here"
                  ></textarea>
                </div>
              </div>
              <button
                type="submit"
                className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <svg
                  className="me-1 -ms-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Add new Task
              </button>
            </form>
          </Modal>
        ) : (
          <motion.div layout className="flex items-center justify-end w-full">
            <button
              onClick={() => setIsAdding(true)}
              className="flex items-center   text-gray-400 text-sm  gap-x-2 mt-2 py-1.5 px-4 hover:dark:text-gray-200 hover:text-gray-500"
            >
              Add
              <FaPlus />
            </button>
          </motion.div>
        )}
      </div>
      {/* column content */}
    </div>
  );
};

export default Column;
