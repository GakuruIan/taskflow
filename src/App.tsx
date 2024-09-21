import React  from 'react'
import {createBrowserRouter,RouterProvider} from "react-router-dom";

// pages
import Login from './Pages/Auth/Login.tsx';
import Register from './Pages/Auth/Register.tsx';
import Main from './Pages/Main/Main.tsx';
import Home from './Pages/Home/Home.tsx';
import Projects from './Pages/Projects/Projects.tsx';
import Project from './Pages/Project/Project.tsx'

function App() {
  
  const router = createBrowserRouter([
     {
      path:'/',
      element:<Main />,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/projects',
          element:<Projects />
        },
        {
          path:'/project/:id',
          element:<Project/>
        }
      ]
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
