import React from "react";
import { Link } from 'react-router-dom';
import descussLogo from "../assets/images/descussLogo.png";
import { eyeIcon, lockIcon, userircleIcon, } from "../utils/Icons";
const Login = () => {
  return (
    <div className="bg-gradient-to-r from-black font-inter to-gray-900 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md">
        {/* Logo and Title */}
        <div className="text-center mb-6">
          <img
            src={descussLogo}
            alt="Logo"
            className="mx-auto w-20 h-16 mb-4"
          />
          <h1 className="text-2xl font-semibold text-white">Login to Descuss</h1>
        </div>

        <div className=" bg-gray-800 rounded-lg shadow-lg p-8">
          <form>
            <div className="mb-4">
              <label className="block text-[#FFFFFF] mb-2" htmlFor="username">
                Username or email
              </label>
              <div className="flex items-center bg-gray-700 rounded p-2">
                <span className="text-gray-400 mr-2">
                  {userircleIcon}
                </span>
                <input
                  id="Username or email"
                  type="text"
                  placeholder="First Name"
                  className="bg-gray-700 w-full text-sm text-[#FFFFFF52] focus:outline-none placeholder-gray-400"
                />

              </div>
            </div>

            {/* Password */}
            <div className="mb-4">

              <div className="flex items-center justify-between mt-1">
                <label className="block text-[#FFFFFF] mb-2" htmlFor="password">
                  Password
                </label>
                <Link to="/forgot-password" className="text-[#D10000] font-semibold	 text-sm">
                  Forgot Password?
                </Link>
              </div>

              <div className="flex justify-between items-center bg-gray-700 rounded">
                <div className="flex items-center bg-gray-700 rounded p-2">
                  <span className="text-gray-400 mr-2">
                    {lockIcon}
                  </span>
                  <input
                    id="password"
                    type="password"
                    placeholder="Password"
                    className="bg-gray-700 text-sm text-white w-full focus:outline-none placeholder-gray-400"
                  />
                </div>

                <div className="mr-4 cursor-pointer">
                  {eyeIcon}
                </div>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="remember-me"
                className="w-4 h-4 !text-[#D10000] !bg-[#D10000] rounded focus:ring-red-600"
              />
              <label htmlFor="remember-me" className="ml-2 text-gray-400 text-sm">
                Remember Me
              </label>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-[#D10000] text-white font-semibold py-2 px-4 rounded hover:bg-red-700 transition duration-300">
              Log In
            </button>
          </form>
        </div>

        {/* Footer Links */}
        <div className="text-center mt-4">
          <p className="text-[#FFFFFF] text-sm">
            Do not have an account?{" "}
            <Link to="/signup" className="text-red-500">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
