'use client';

import {
  BookOpenIcon,
  AcademicCapIcon,
  BookmarkSquareIcon,
  HomeIcon,
} from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';

const sources = [
  {
    title: 'Ways to green up your kitchen',
    url: 'https://www.theguardian.com/environment/2020/feb/29/50-ways-to-green-up-your-life-save-the-planet',
  },
  {
    title: 'How to be more environmentally friendly',
    url: 'https://justenergy.com/blog/the-top-9-environmentally-friendly-tips-to-save-the-planet/',
  },
  {
    title: 'Reducing your environmental impact',
    url: 'https://chariotenergy.com/blog/15-easy-ways-to-become-environmentally-friendly/',
  },
];

export default function Sources() {
  const router = useRouter();
  return (
    <div className='w-full h-full min-w-screen min-h-screen flex'>
      <div className='bg-blue-500 px-3 w-fit overflow-hidden h-screen max-h-screen'>
        <div className='flex flex-col text-white space-y-2 items-center rounded-lg px-8 h-full py-8'>
          <p className='font-bold mb-2'>Sources</p>
          <div className='flex flex-col space-y-1 font-semibold text-sm w-[15rem]'>
            <div className='space-y-1'>
              <div
                onClick={() => router.push('/userGuide')}
                className='bg-blue-500 hover:cursor-pointer text-blue-200 hover:text-white hover:bg-blue-600 space-x-2 px-2 py-2.5 items-center rounded-md text-left flex'
              >
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
              <div className='bg-blue-600 hover:cursor-pointer space-x-2 px-2 py-2.5 items-center rounded-md text-left flex'>
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
      <div className='bg-grid p-8 w-full h-screen space-y-8 overflow-auto'>
        <div className='rounded-md shadow border border-gray-300 w-full h-fit bg-white flex flex-col'>
          <div className='border-b border-gray-300 p-4'>
            <p className='text-2xl font-semibold'>Sources</p>
          </div>
          <div className='p-4 flex flex-col space-y-2 text-gray-700 text-sm font-semibold'>
            {sources.map((v, i) => (
              <a
                href={v.url}
                target='_blank'
                key={i}
                className='hover:underline w-fit text-blue-500 hover:text-blue-600 hover:cursor-pointer'
              >
                {v.title}
              </a>
            ))}
            <p>
              White windmill. (n.d.). Pexels.
              https://www.pexels.com/photo/white-windmill-414837/
            </p>
            <p>
              Landscape Fog Outlook. (n.d.). Pixabay.
              https://pixabay.com/photos/landscape-fog-outlook-mountains-3908270/
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
