'use client';
import { useEffect, useState } from 'react';

import Navbar from './components/navbar';

export default function Home() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {windowWidth > 1023 && (
        <div className='flex flex-col min-h-screen h-full p-4 bg-gray-100'>
          <div className='w-full h-full pb-4'>
            <Navbar />
          </div>
          <div className='flex flex-col bg-grid w-full bg-cover h-full bg-white rounded-lg shadow mb-4'>
            <div className='flex w-full h-full space-x-6 px-18 items-center py-12 '>
              <div className='text-left w-1/2 flex flex-col space-y-3 h-full'>
                <div className='space-y-3 h-full text-center items-center flex flex-col justify-center'>
                  <p className='font-bold text-5xl'>EcoTomorrow</p>
                  <div className='text-gray-600'>
                    <p className='font-bold text-lg'>
                      Connecting eco-conscious people to eco-friendly places
                    </p>
                    <p className='font-bold text-md pt-4'>
                      A tool that{' '}
                      <span className='text-blue-500 font-semibold'>
                        empowers
                      </span>{' '}
                      people to make more{' '}
                      <span className='text-blue-500 font-semibold'>
                        environmentally sustainable
                      </span>{' '}
                      decisions in their everyday life.
                    </p>
                  </div>

                  <div></div>
                  <a
                    href='/signup'
                    className='bg-blue-500 hover:bg-blue-600 px-4 py-2 text-white hover:cursor-pointer rounded-lg w-fit font-bold'
                  >
                    Get Started
                  </a>
                </div>
              </div>
              <div className='w-6' />
              <div className='w-1/2 flex-col my-auto p-6 rounded-xl bg-blue-50'>
                <img
                  src='https://cdn.pixabay.com/photo/2019/01/02/07/51/landscape-3908270_1280.jpg'
                  className='rounded-xl'
                />
              </div>
            </div>

            <div className='text-center flex space-y-3 w-full h-full space-x-6 px-18 items-center py-12'>
              <div className='flex my-auto w-1/2'>
                <div className='p-6 bg-blue-50 rounded-xl'>
                  <img
                    src='https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    className='rounded-xl'
                  />
                </div>
              </div>
              <div className='w-6' />

              <div className='space-y-3 pl-4 w-1/2 h-full flex flex-col justify-center'>
                <p className='font-bold text-5xl'>Learn More</p>
                <div className='text-gray-600'>
                  <p className='font-bold text-lg'>
                    There is so much to learn about being eco-friendly!
                  </p>
                  <p className='font-bold text-md pt-4'>
                    Learn more about{' '}
                    <span className='text-blue-500 font-semibold'>
                      environmentally sustainable
                    </span>{' '}
                    practices
                  </p>
                </div>

                <div></div>
                <a
                  href='/learnMore'
                  className='bg-blue-500 mx-auto hover:bg-blue-600 px-4 py-2 text-white hover:cursor-pointer rounded-lg w-fit font-bold'
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
