import {
  BuildingStorefrontIcon,
  CalendarDaysIcon,
  CalendarIcon,
  ChatBubbleLeftEllipsisIcon,
  HomeIcon,
  PlusCircleIcon,
  SquaresPlusIcon,
} from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function SideNav({
  current,
  setCurrent,
}: {
  current: string;
  setCurrent: (v: string) => void;
}) {
  const [username, setUsername] = useState('Loading...');
  useEffect(() => {
    setUsername(JSON.parse(localStorage.getItem('User')!).username);
  }, []);
  const router = useRouter();
  return (
    <div className='flex flex-col text-white space-y-2 items-center rounded-lg px-4 h-full py-8'>
      <p className='font-bold mb-2'>EcoTomorrow</p>
      <div className='flex flex-col space-y-1 font-semibold text-sm w-[15rem]'>
        <div className='space-y-1'>
          <div
            className={`${
              current === 'All Places'
                ? 'bg-blue-600 hover:cursor-pointer space-x-2 px-2 py-2.5 items-center rounded-md text-left flex'
                : 'bg-blue-500 hover:cursor-pointer text-blue-200 hover:text-white hover:bg-blue-600 space-x-2 px-2 py-2.5 items-center rounded-md text-left flex'
            }`}
            onClick={() => {
              if (current !== 'All Places') {
                setCurrent('All Places');
              }
            }}
          >
            <div className='w-5 h-5'>
              <BuildingStorefrontIcon />
            </div>
            <p>All Places</p>
          </div>

          <div
            className={`${
              current == 'All Events'
                ? 'bg-blue-600 hover:cursor-pointer space-x-2 px-2 py-2.5 items-center rounded-md text-left flex'
                : 'bg-blue-500 hover:cursor-pointer text-blue-200 hover:text-white hover:bg-blue-600 space-x-2 px-2 py-2.5 items-center rounded-md text-left flex'
            }`}
            onClick={() => {
              if (current !== 'All Events') {
                setCurrent('All Events');
              }
            }}
          >
            <div className='w-5 h-5'>
              <CalendarDaysIcon />
            </div>
            <p>All Events</p>
          </div>
          <div
            className={`${
              current == 'Created Places'
                ? 'bg-blue-600 hover:cursor-pointer space-x-2 px-2 py-2.5 items-center rounded-md text-left flex'
                : 'bg-blue-500 hover:cursor-pointer text-blue-200 hover:text-white hover:bg-blue-600 space-x-2 px-2 py-2.5 items-center rounded-md text-left flex'
            }`}
            onClick={() => {
              if (current !== 'Created Places') {
                setCurrent('Created Places');
              }
            }}
          >
            <div className='w-5 h-5'>
              <HomeIcon />
            </div>
            <p>Created Places</p>
          </div>
          <div
            className={`${
              current == 'Created Events'
                ? 'bg-blue-600 hover:cursor-pointer space-x-2 px-2 py-2.5 items-center rounded-md text-left flex'
                : 'bg-blue-500 hover:cursor-pointer text-blue-200 hover:text-white hover:bg-blue-600 space-x-2 px-2 py-2.5 items-center rounded-md text-left flex'
            }`}
            onClick={() => {
              if (current !== 'Created Events') {
                setCurrent('Created Events');
              }
            }}
          >
            <div className='w-5 h-5'>
              <CalendarIcon />
            </div>
            <p>Created Events</p>
          </div>
          <div
            className={`${
              current == 'Create a Place'
                ? 'bg-blue-600 hover:cursor-pointer space-x-2 px-2 py-2.5 items-center rounded-md text-left flex'
                : 'bg-blue-500 hover:cursor-pointer text-blue-200 hover:text-white hover:bg-blue-600 space-x-2 px-2 py-2.5 items-center rounded-md text-left flex'
            }`}
            onClick={() => {
              if (current !== 'Create a Place') {
                setCurrent('Create a Place');
              }
            }}
          >
            <div className='w-5 h-5'>
              <PlusCircleIcon />
            </div>
            <p>Create a Place</p>
          </div>
          <div
            className={`${
              current == 'Create an Event'
                ? 'bg-blue-600 hover:cursor-pointer space-x-2 px-2 py-2.5 items-center rounded-md text-left flex'
                : 'bg-blue-500 hover:cursor-pointer text-blue-200 hover:text-white hover:bg-blue-600 space-x-2 px-2 py-2.5 items-center rounded-md text-left flex'
            }`}
            onClick={() => {
              if (current !== 'Create an Event') {
                setCurrent('Create an Event');
              }
            }}
          >
            <div className='w-5 h-5'>
              <SquaresPlusIcon />
            </div>
            <p>Create an Event</p>
          </div>
          <div
            className={`${
              current == 'AI Helper'
                ? 'bg-blue-600 hover:cursor-pointer space-x-2 px-2 py-2.5 items-center rounded-md text-left flex'
                : 'bg-blue-500 hover:cursor-pointer text-blue-200 hover:text-white hover:bg-blue-600 space-x-2 px-2 py-2.5 items-center rounded-md text-left flex'
            }`}
            onClick={() => {
              if (current !== 'AI Helper') {
                setCurrent('AI Helper');
              }
            }}
          >
            <div className='w-5 h-5'>
              <ChatBubbleLeftEllipsisIcon />
            </div>
            <p>AI Helper</p>
          </div>
        </div>
      </div>

      <div className='flex flex-col items-center mb-6 h-full space-y-2'>
        <div className='font-bold mt-auto'>{username}</div>

        <div
          onClick={() => {
            localStorage.removeItem('User');
            router.push('/login');
          }}
          className='font-bold hover:text-red-500 hover:border-red-500 hover:cursor-pointer border border-white px-3 py-1 rounded-md w-full text-center'
        >
          Logout
        </div>
      </div>
    </div>
  );
}
