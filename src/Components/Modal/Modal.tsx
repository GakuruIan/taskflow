import React from 'react'
// icons
import { IoClose } from "react-icons/io5";

interface Props {
    children:React.ReactNode,
    title:string,
    setIsAdding:React.Dispatch<React.SetStateAction<boolean>>
}


const Modal:React.FC<Props> = ({children,title, setIsAdding}) => {
    
    const handleClose=()=>{
        setIsAdding((prev=>!prev))
    }

  return (
    <div id="modal"  aria-hidden="true" className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex backdrop-blur-sm dark:backdrop-brightness-50 backdrop-brightness-90  justify-center items-center w-full md:inset-0 h-[calc(100%-0rem)] max-h-full">
    <div className="relative p-4 w-full max-w-md max-h-full">
       
        <div className="relative bg-white rounded-lg shadow dark:bg-dark-200">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                   {title}
                </h3>
                <button onClick={handleClose} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-dark-100 dark:hover:text-white" data-modal-toggle="crud-modal">
                     <IoClose/>
                    <span className="sr-only">Close modal</span>
                </button>
            </div>
           {children}
        </div>
    </div>
</div> 
  )
}

export default Modal