import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import fbAuth from '../Images/fb-auth.png';
import googleAuth from '../Images/google-auth.png';
import twitterAuth from '../Images/twitter-auth.png';
import { HiLockClosed, HiLockOpen } from 'react-icons/hi2';
import { NavBar } from '../Components/Navbar';
import { ReactComponent as LoginSVG } from '../Images/login.svg';

export const SignUp = () => {
  const navigate = useNavigate();
  const [lock, setLock] = useState(true);
  const [load, setLoad] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState('');

  const handleSignUp = async (e) => {
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
            Sign <span className="font-bold">Up</span>
          </div>
          <div className="text-searchLogo font-quicksand mt-8">
            Already have an account?{' '}
            <span
              className="text-btn ml-4 cursor-pointer"
              onClick={() => navigate('/login')}
            >
              Log in
            </span>
          </div>
          {error != '' && (
            <div className="text-red-500 text-sm mt-4">{error}</div>
          )}
          <form onSubmit={handleSignUp}>
            <div className="grid grid-cols-2">
              <div className="">
                <div className="font-quicksand text-pup mt-10 mb-1">
                  First Name
                </div>
                <div className=" flex items-center bg-search w-[90%]">
                  <input
                    className="bg-transparent search text-searchLabel h-10 py-1 px-2  text-[0.8rem] outline-none w-full placeholder:tracking-wider placeholder:text-[0.8rem] placeholder:font-quicksand"
                    type="text"
                    placeholder="First Name"
                    name="fname"
                    required
                    // onFocus={()}
                  ></input>
                </div>
              </div>
              <div className="">
                <div className="font-quicksand text-pup mt-10 mb-1">
                  Last Name
                </div>
                <div className=" flex items-center bg-search w-[90%]">
                  <input
                    className="bg-transparent search text-searchLabel h-10 py-1 px-2  text-[0.8rem] outline-none w-full placeholder:tracking-wider placeholder:text-[0.8rem] placeholder:font-quicksand"
                    type="text"
                    placeholder="Last Name"
                    name="lname"
                    required
                    // onFocus={()}
                  ></input>
                </div>
              </div>
              <div className="">
                <div className="font-quicksand text-pup mt-8 mb-1">
                  Your Email
                </div>
                <div className=" flex items-center bg-search w-[90%]">
                  <input
                    className="bg-transparent search text-searchLabel h-10 py-1 px-2  text-[0.8rem] outline-none w-full placeholder:tracking-wider placeholder:text-[0.8rem] placeholder:font-quicksand"
                    type="email"
                    placeholder="Email here"
                    name="email"
                    required
                    // onFocus={()}
                  ></input>
                </div>
              </div>
              <div className="">
                <div className="font-quicksand text-pup mt-8 mb-1">
                  Password
                </div>
                <div className=" flex bg-search items-center search w-[90%]">
                  <input
                    className="bg-transparent  text-searchLabel h-10 py-1 px-2  text-[0.8rem] outline-none w-full placeholder:tracking-wider placeholder:text-[0.8rem] placeholder:font-quicksand"
                    type={lock ? 'password' : 'text'}
                    placeholder="Password here"
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
              </div>
            </div>
            <div className="flex items-center mt-4">
              <input type="checkbox" name="terms" required />
              <div
                className="font-quicksand text-pup cursor-pointer ml-2"
                // onClick={() => setShowModal(true)}
                onClick={() => navigate('/terms-of-services')}
              >
                Terms of services
              </div>
              {/* <Terms showModal={showModal} setShowModal={setShowModal} /> */}
            </div>
            <div className="flex flex-col items-center w-max relative">
              <button
                type="submit"
                disabled={load}
                class={`${
                  load
                    ? 'py-3 items-center flex justify-center cursor-not-allowed'
                    : ''
                } mt-10 py-2 h-12 px-12 text-center text-white font-semibold uppercase  font-poppins  bg-btn`}
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
                {load ? 'Creating...' : 'Create an account'}
              </button>

              <div className="mt-7 font-quicksand text-searchLogo text-base">
                OR
              </div>
            </div>
          </form>
          <div className="mt-7 flex items-center font-quicksand text-searchLogo">
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
