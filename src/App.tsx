import React  from 'react'
import {createBrowserRouter,RouterProvider} from "react-router-dom";

// pages
import Login from './Pages/Auth/Login.tsx';
import Register from './Pages/Auth/Register.tsx';
import Main from './Pages/Main/Main.tsx';

function App() {
  
  const router = createBrowserRouter([
     {
      path:'/',
      element:<Main />
     },
     {
      path:'/login',
      element:<Login />
     },
     {
      path:'/register',
      element:<Register/>
     }
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
