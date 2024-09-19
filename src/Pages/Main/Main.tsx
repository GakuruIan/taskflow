import React from 'react'

// router
import { Outlet } from 'react-router-dom'

// components
import Sidebar from '../../Components/Sidebar/Sidebar.tsx'
import Topbar from '../../Components/Topbar/Topbar.tsx'

const Main = () => {
  return (
    <div>
       <div className="flex relative w-full flex-row">
         <Sidebar/>
         <div className='w-full mx-1'>
           <div className="ml-14 ">
               {/* topbar */}
               <Topbar />
               {/* route content */}
                <Outlet/>
           </div>
         </div>
       </div>
    </div>
  )
}

export default Main