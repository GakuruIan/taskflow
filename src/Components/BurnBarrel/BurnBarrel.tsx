import React, { useState } from "react";

// icons
import { FaFire } from "react-icons/fa";
import { IoTrashBinOutline } from "react-icons/io5";

// constants
import { card } from "../../utils/Contants.ts";

interface Props {
  setCards:React.Dispatch<React.SetStateAction<card[]>>
}


const BurnBarrel:React.FC<Props>= ({setCards}) => {
  const [active, setactive] = useState(false);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setactive(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setactive(false);
  };

  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const cardId = e.dataTransfer.getData("cardId");

    //!! handle sending data backend for deletion
     setCards((prev)=>prev.filter((card)=>card.id !== Number(cardId)))
    setactive(false)
  };

  return (
    <div
      onDragOver={(e) => handleDragOver(e)}
      onDragLeave={(e) => handleDragLeave(e)}
      onDrop={(e) => handleDragEnd(e)}
      className={`mt-16 grid place-content-center h-56 w-56 rounded-md transition-all duration-75 ${
        active
          ? "bg-red-500/50 border-2 border-red-700"
          : " bg-red-500 text-white"
      } `}
    >
      {active ? (
        <FaFire className="animate-bounce text-2xl text-red-200" />
      ) : (
        <div className="flex items-center justify-center flex-col gap-y-2">
          <IoTrashBinOutline className="text-2xl" />
          <p className="text-sm  text-gray-100">Drag in here to delete</p>
        </div>
      )}
    </div>
  );
};

export default BurnBarrel;
