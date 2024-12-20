import React from 'react'
import { Link } from 'react-router-dom';
import descussLogo from "../assets/images/descussLogo.png";
import { eyeIcon, lockIcon, userircleIcon, } from "../utils/Icons";
const ForgotPassword = () => {
  return (
    <div className="bg-gradient-to-r from-black font-inter to-gray-900 min-h-screen flex flex-col items-center justify-center">
      <div className="text-center mb-6">
        <img
          src={descussLogo}
          alt="Logo"
          className="mx-auto w-20 h-16 mb-4"
        />
        <h1 className="text-2xl font-semibold text-white mb-4">Forgot Password</h1>
        <p className="text-[#FFFFFF] text-sm">
          Enter your email for the verification proccess,we will send 4 digits code to your email.
        </p>
      </div>
      <div className="w-full max-w-md">
        <div className=" bg-gray-800 rounded-lg shadow-lg p-8">
          <form>
            <div className="mb-4">
              <label className="block text-[#FFFFFF] mb-2" htmlFor="username">
                Email
              </label>
              <div className="flex items-center bg-gray-700 rounded p-2">
                <span className="text-gray-400 mr-2">
                  {userircleIcon}
                </span>
                <input
                  id="Username or email"
                  type="text"
                  placeholder="Username or email"
                  className="bg-gray-700 w-full text-sm text-[#FFFFFF52] focus:outline-none placeholder-gray-400"
                />

              </div>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-[#D10000] text-white font-semibold py-2 px-4 rounded hover:bg-red-700 transition duration-300">
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword

