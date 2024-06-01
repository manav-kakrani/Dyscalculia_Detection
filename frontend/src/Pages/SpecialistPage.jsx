import React from 'react';
import { NavBar } from '../Components/Navbar';

import { AiFillStar } from 'react-icons/ai';
import { IoMdThumbsUp } from 'react-icons/io';

export const SpecialistPage = ({ result = 'false', resultQuiz, resultHandwritten }) => {
  const data = [
    {
      name: 'Ms. Sneha',
      surname: 'Kumar',
      percentage: 92,
      votes: 75,
      star: 4,
      experience: 10,
      category: 0,
      index: 0
    },
    {
      name: 'Mr. Rahul',
      surname: 'Gupta',
      percentage: 87,
      votes: 82,
      star: 3,
      experience: 12,
      category: 0,
      index: 1
    },
    {
      name: 'Ms. Priya',
      surname: 'Sharma',
      percentage: 85,
      votes: 63,
      star: 5,
      experience: 9,
      category: 0,
      index: 2
    },
    {
      name: 'Mr. Karan',
      surname: 'Singh',
      percentage: 89,
      votes: 79,
      star: 4,
      experience: 11,
      category: 1,
      index: 3
    },
    {
      name: 'Ms. Aarti',
      surname: 'Patel',
      percentage: 91,
      votes: 68,
      star: 4,
      experience: 8,
      category: 1,
      index: 4
    },
    {
      name: 'Mr. Rajesh',
      surname: 'Kumar',
      percentage: 92,
      votes: 75,
      star: 3,
      experience: 10,
      category: 1,
      index: 5
    },
    {
      name: 'Ms. Shalini',
      surname: 'Gupta',
      percentage: 87,
      votes: 82,
      star: 5,
      experience: 12,
      category: 1,
      index: 6
    },
    {
      name: 'Ms. Sarika',
      surname: 'Jain',
      percentage: 90,
      votes: 70,
      star: 4,
      experience: 9,
      category: 2,
      index: 7
    },
    {
      name: 'Mr. Prakash',
      surname: 'Sharma',
      percentage: 88,
      votes: 78,
      star: 3,
      experience: 11,
      category: 2,
      index: 8
    },
    {
      name: 'Mr. Amit',
      surname: 'Patel',
      percentage: 85,
      votes: 68,
      star: 3,
      experience: 8,
      category: 2,
      index: 9
    },
    {
      name: 'Ms. Neha',
      surname: 'Bhat',
      percentage: 91,
      votes: 80,
      star: 5,
      experience: 10,
      category: 0,
      index: 10
    },
    {
      name: 'Mr. Anil',
      surname: 'Verma',
      percentage: 86,
      votes: 75,
      star: 4,
      experience: 9,
      category: 0,
      index: 11
    },
    {
      name: 'Mr. Manish',
      surname: 'Choudhary',
      percentage: 89,
      votes: 72,
      star: 4,
      experience: 11,
      category: 1,
      index: 12
    },
    {
      name: 'Mr. Deepak',
      surname: 'Goyal',
      percentage: 83,
      votes: 63,
      star: 3,
      experience: 8,
      category: 2,
      index: 13
    }
  ];

  const getRandomCategory = Math.floor(Math.round(Math.random() * 100) % 3);

  return (
    <>
      {result == 'false' && <NavBar />}
      <div>
        <div className='ml-1 my-10 md:ml-12 text-2xl font-medium font-poppins'>
          Recommended Specialists :
        </div>
        <div className='md:mt-2 ml-1 md:ml-12 mb-20 grid md:grid-cols-2 gap-8'>
          {data
            .filter((item) =>
              resultHandwritten
                ? item.category === Math.round(resultHandwritten * 100) % 3
                : item.category === getRandomCategory
            )
            .map((item, index) => {
              return (
                <div className='bg-white border-qBor border rounded py-3 px-3 shadow w-max'>
                  <div className='w-80 max-w-2xl h-auto m-auto'>
                    <img
                      src={require(`../Images/specialist${item.index}.jpg`)}
                      alt='specialist'
                      className='max-w-[100%] h-auto'
                    />
                  </div>
                  <div className='font-poppins text-2xl font-medium mt-3'>
                    {item.name} {item.surname}
                  </div>
                  <div className='text-base mt-1 text-special'>BA, MA - Psychology</div>
                  <div className='flex mt-5 items-center'>
                    <button className='bg-specialBtn text-special rounded-3xl text-sm py-1 px-2 mr-2'>
                      Therapist
                    </button>
                    <div className='text-sm text-special'>
                      {item.experience} Years Experience Overall
                    </div>
                  </div>
                  <div className='flex items-baseline text-special mt-5'>
                    <IoMdThumbsUp className='text-green-600 text-lg pt-[0.12rem] mr-1' />
                    <div className='text-green-600 font-medium'>{item.percentage}%</div>
                    <div className='text-xs ml-2'>({item.votes} votes)</div>
                  </div>
                  <div className='text-xs mt-5 text-special'>Andheri West, Mumbai</div>
                  <div className='flex mt-4'>
                    <div className='text-xs tracking-tight font-medium font-poppins text-blue-400'>
                      Inner Light Conselling Center
                    </div>
                    <div className='text-xs font-poppins track-tight font-medium pl-12'>
                      Mon-Sat
                    </div>
                    <div className='text-xs font-poppins  text-center pl-10'>1800</div>
                  </div>
                  <div className='flex mt-4'>
                    <div className='flex items-center text-xs tracking-tight font-medium font-poppins text-green-600'>
                      {item.star}.0 stars
                      <AiFillStar className='ml-1' />
                      {(() => {
                        const options = [];

                        for (let i = 2; i <= item.star; i++) {
                          options.push(<AiFillStar />);
                        }

                        return options;
                      })()}
                    </div>
                    <div className='text-xs font-poppins font-light  pl-24'>
                      11.00 AM - 02.00 PM
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};
