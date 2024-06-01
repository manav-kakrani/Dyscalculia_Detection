import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import fbAuth from '../Images/fb-auth.png';
import googleAuth from '../Images/google-auth.png';
import twitterAuth from '../Images/twitter-auth.png';
import { HiLockClosed, HiLockOpen } from 'react-icons/hi2';
import { NavBar } from '../Components/Navbar';

// Import an svg
import { ReactComponent as LoginSVG } from '../Images/login.svg';

export const Login = () => {
  const navigate = useNavigate();
  const [lock, setLock] = useState(true);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState('');

  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoad(true);
    setError('');
    const formData = new FormData(e.currentTarget);

    let data = {};
    for (let [key, value] of formData.entries()) {
      data = {
        ...data,
        [key]: value,
      };
    }

    setLoad(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <NavBar />
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex justify-center items-center">
          <LoginSVG className="max-h-[60vh]" />
        </div>
        <div className="pt-20 px-10 md:pl-10 lg:pl-16">
          <div className="text-pup font-poppins text-2xl md:text-4xl tracking-wider ">
            Log <span className="font-bold">In</span>
          </div>
          <div className="text-searchLogo font-quicksand mt-8">
            New to app?{' '}
            <span
              className="text-btn ml-4 cursor-pointer"
              onClick={() => navigate('/signup')}
            >
              Create an account
            </span>
          </div>
          {error != '' && (
            <div className="text-red-500 text-sm mt-4">{error}</div>
          )}
          <form onSubmit={handleSignIn}>
            <div className="font-quicksand text-pup mt-10 mb-1">Your Email</div>
            <div className=" flex items-center bg-search w-[80%]  lg:w-[50%]">
              {/* <CiSearch class="text-xl ml-3  text-searchLogo" /> */}
              <input
                className="bg-transparent search text-searchLabel h-10 py-1 px-2  text-[0.8rem] outline-none w-full placeholder:tracking-wider placeholder:text-[0.8rem] placeholder:font-quicksand"
                type="email"
                placeholder="Enter your email here"
                name="email"
                required
                // onFocus={()}
              ></input>
            </div>
            <div className="font-quicksand text-pup mt-5 mb-1">Password</div>
            <div className=" flex items-center search w-[80%] bg-search  lg:w-[50%]">
              <input
                className="bg-search text-searchLabel h-10 py-1 px-2  text-[0.8rem] outline-none w-full placeholder:tracking-wider placeholder:text-[0.8rem] placeholder:font-quicksand"
                type={lock ? 'password' : 'text'}
                placeholder="Enter your password here"
                name="password"
                required
              ></input>
              {lock ? (
                <HiLockClosed
                  class="text-xl mx-3 cursor-pointer text-searchLogo"
                  onClick={() => setLock(!lock)}
                />
              ) : (
                <HiLockOpen
                  class="text-xl mx-3 cursor-pointer text-searchLogo"
                  onClick={() => setLock(!lock)}
                />
              )}
            </div>
            <div
              className="font-quicksand text-btn cursor-pointer mt-2 text-sm w-max"
              // onClick={() => navigate('/forget-password')}
            >
              Forgot Password?
            </div>

            {/* <Captcha /> */}

            <div className="flex flex-col items-center w-max relative">
              <button
                type="submit"
                disabled={load}
                class={`${
                  load
                    ? 'flex items-center py-3 h-12 w-44 justify-center cursor-not-allowed'
                    : 'py-2 h-12 w-32'
                } mt-8  text-center rounded-md text-white font-semibold uppercase font-poppins bg-btn`}
              >
                {load && (
                  <svg
                    class="mr-3 h-5 w-5 animate-spin text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      class="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      // strokeWidth="4"
                    ></circle>
                    <path
                      class="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                )}
                {load ? 'Verifiying...' : 'Log in'}
              </button>
              <div className="mt-7 font-quicksand text-searchLogo text-base">
                OR
              </div>
            </div>
          </form>
          <div className="mt-7 flex items-center font-quicksand text-searchLogo text-sm">
            You can connect with
            <img
              src={googleAuth}
              alt=""
              className="h-8 w-8 ml-3 cursor-pointer"
            />
            <img src={fbAuth} alt="" className="h-8 w-8 ml-3 cursor-pointer" />
            <img
              src={twitterAuth}
              alt=""
              className="h-8 w-8 ml-3 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </>
  );
};
