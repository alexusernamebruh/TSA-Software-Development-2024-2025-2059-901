'use client';

import {
  AcademicCapIcon,
  BookmarkSquareIcon,
  BookOpenIcon,
  HomeIcon,
} from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';

export default function UserGuide() {
  const router = useRouter();
  return (
    <div className='w-full h-full min-h-screen min-w-screen flex'>
      <div className='bg-blue-500 px-3 w-fit overflow-hidden h-screen max-h-screen'>
        <div className='flex flex-col text-white space-y-2 items-center rounded-lg px-8 h-full py-8'>
          <p className='font-bold mb-2'>User Guide</p>
          <div className='flex flex-col space-y-1 font-semibold text-sm w-[15rem]'>
            <div className='space-y-1'>
              <div className='bg-blue-600 hover:cursor-pointer space-x-2 px-2 py-2.5 items-center rounded-md text-left flex'>
                <div className='w-5 h-5'>
                  <BookOpenIcon />
                </div>
                <p>User guide</p>
              </div>
              <div
                onClick={() => router.push('/learnMore')}
                className='bg-blue-500 hover:cursor-pointer text-blue-200 hover:text-white hover:bg-blue-600 space-x-2 px-2 py-2.5 items-center rounded-md text-left flex'
              >
                <div className='w-5 h-5'>
                  <AcademicCapIcon />
                </div>
                <p>Learn More</p>
              </div>
              <div
                onClick={() => router.push('/sources')}
                className='bg-blue-500 hover:cursor-pointer text-blue-200 hover:text-white hover:bg-blue-600 space-x-2 px-2 py-2.5 items-center rounded-md text-left flex'
              >
                <div className='w-5 h-5'>
                  <BookmarkSquareIcon />
                </div>
                <p>Sources</p>
              </div>
              <div
                onClick={() => router.push('/home')}
                className='bg-blue-500 hover:cursor-pointer text-blue-200 hover:text-white hover:bg-blue-600 space-x-2 px-2 py-2.5 items-center rounded-md text-left flex'
              >
                <div className='w-5 h-5'>
                  <HomeIcon />
                </div>
                <p>Home</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full h-full max-h-screen overflow-auto'>
        <div className='bg-grid p-8 w-full min-h-screen h-full space-y-8 overflow-auto'>
          <div className='rounded-md shadow border border-gray-300 w-full h-full bg-white flex flex-col'>
            <div className='border-b border-gray-300 p-4'>
              <p className='text-2xl font-semibold'>Places</p>
            </div>
            <div className='p-4 flex flex-col space-y-2 text-gray-700 text-sm font-semibold'>
              <div>
                <p>Users like you can create eco-friendly places.</p>
                <p className='ml-4'>
                  - For example, you could open a grocery store that is
                  sustainably sourced, or a restaurant that uses local
                  ingredients.
                </p>
              </div>
              <p>
                You can show off your eco-friendly place here! And, you can see
                other people&apos;s eco-friendly places
              </p>
              <div className='flex flex-col'>
                <p>
                  Ratings and reviews are available for each place. You can rate
                  and review places.
                </p>
                <p className='ml-4'>
                  - Places will be rated on a scale of 1 to 5 stars.
                </p>
              </div>
            </div>
          </div>
          <div className='rounded-md shadow border border-gray-300 w-full h-full bg-white flex flex-col'>
            <div className='border-b border-gray-300 p-4'>
              <p className='text-2xl font-semibold'>Events</p>
            </div>
            <div className='p-4 flex flex-col space-y-2 text-gray-700 text-sm font-semibold'>
              <p>Users like you can host eco-friendly events</p>
              <div className='flex flex-col space-y-2'>
                <p className='ml-4'>
                  - For example, you could host a tree-planting event
                </p>
              </div>
            </div>
          </div>
          <div className='rounded-md shadow border border-gray-300 w-full h-full bg-white flex flex-col'>
            <div className='border-b border-gray-300 p-4'>
              <p className='text-2xl font-semibold'>AI helper</p>
            </div>
            <div className='p-4 flex flex-col space-y-2 text-gray-700 text-sm font-semibold'>
              <p>
                The AI helper is a tool you can use to help with many things.
              </p>
              <div className='flex flex-col space-y-2'>
                <p className='ml-4'>
                  - You can ask it to decide on a place to visit.
                </p>
                <div>
                  <p className='ml-4'>
                    - You can also ask it to recommend you an event.
                  </p>
                  <p className='ml-8'>
                    - For example: &quot;Recommend me an event that helps the
                    community&quot;
                  </p>
                </div>
                <p className='ml-4'>
                  - You can ask it general questions about sustainable
                  environmental practices and other things.
                </p>
              </div>
            </div>
          </div>
          <div className='rounded-md shadow border border-gray-300 w-full h-full bg-white flex flex-col'>
            <div className='border-b border-gray-300 p-4'>
              <p className='text-2xl font-semibold'>Learn More</p>
            </div>
            <div className='p-4 flex flex-col space-y-2 text-gray-700 text-sm font-semibold'>
              <p>
                There is a lot of information about eco-friendly practices, you
                can learn more about it in the &apos;Learn More&apos; page
              </p>
            </div>
          </div>
          <div className='rounded-md shadow border border-gray-300 w-full h-full bg-white flex flex-col'>
            <div className='border-b border-gray-300 p-4'>
              <p className='text-2xl font-semibold'>Sources</p>
            </div>
            <div className='p-4 flex flex-col space-y-2 text-gray-700 text-sm font-semibold'>
              <p>
                The &apos;Sources&apos; page contains a list of sources used in
                the website.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
