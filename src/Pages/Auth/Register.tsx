import React from 'react'

// components
import Button from '../../Components/Button/Button.tsx'


// router
import { Link } from "react-router-dom";

// image
import astronaut from "../../assets/astronaut.jpg";

const Register = () => {
  const handleSubmit = (): void => {
    console.log("submitting");
  };


  return (
    <div className="  dark:bg-dark-200 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
        <div className="">
          <div className="p-4">
            <div className="">
              <h2 className="font-poppins font-medium text-xl mb-8 dark:text-white text-neutral-950">
                TaskFlow
              </h2>
              <div className="flex items-center justify-center h-full mt-10 ">
                <div className="">
                  <h3 className="text-4xl md:text-7xl font-bold text-center mb-3 dark:text-white text-neutral-950">
                    Hi there!
                  </h3>
                  <h6 className="text-sm text-gray-400 text-center">
                    Welcome to TaskFlow , management tool
                  </h6>
                  <div className="my-8 w-full">
                    <button className="px-4 py-3 w-full border dark:text-white border-gray-500 hover:dark:bg-primary-100 hover:bg-gray-800 hover:text-white transition-colors duration-75">
                      Signup with Google
                    </button>

                    <p className="text-gray-500 text-center my-6 dark:text-white">OR</p>
                  </div>
                  <div className="">
                    <form>
                    <div className="mb-6">
                        <label className="text-base  font-normal dark:text-white">Fullname</label>
                        <input
                          type="text"
                          className="w-full outline-0 px-2 py-3 dark:bg-dark-100 dark:text-white bg-light mt-2"
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      <div className="mb-6">
                        <label className="text-base  font-normal dark:text-white">Email</label>
                        <input
                          type="email"
                          className="w-full outline-0 px-2 py-3 dark:bg-dark-100 dark:text-white bg-light mt-2"
                          placeholder="John@gmail.com"
                          required
                        />
                      </div>

                      <div className="mb-6">
                        <label className="text-sm  font-normal  dark:text-white">Password</label>
                        <input
                          type="password"
                          className="w-full outline-0 px-2 py-3 dark:bg-dark-100 dark:text-white bg-light mt-2"
                          placeholder="password"
                          required
                        />
                      </div>

                      <div className="">
                        <label className="text-sm  font-normal  dark:text-white">Confirm Password</label>
                        <input
                          type="password"
                          className="w-full outline-0 px-2 py-3 dark:bg-dark-100 dark:text-white bg-light mt-2"
                          placeholder="password"
                          required
                        />
                      </div>
                     

                      <Button
                        label="Sign in"
                        onClick={handleSubmit}
                        style="bg-primary-200 text-white mt-8 hover:bg-primary-100"
                      />
                    </form>
                  </div>
                  <p className="mt-8 text-center dark:text-white">
                    <Link to="/login">Have an account ? Sign In</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-full hidden md:block">
          <div className="">
            <img
              src={astronaut}
              alt="astronaut"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register