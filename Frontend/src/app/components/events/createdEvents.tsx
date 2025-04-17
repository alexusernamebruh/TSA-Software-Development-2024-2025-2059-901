'use client';

import { a } from '@/app/config';
import { truncate } from '@/app/helpers';
import { IEvent } from '@/app/interfaces';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';

export default function CreatedEvents() {
  const [events, setEvents] = useState<IEvent[]>([]);
  const [currentEvent, setCurrentEvent] = useState<IEvent>();

  const getCreatedEvents = async (userId: number) => {
    const { data: response } = await a.get(`/events/getByOwnerId/${userId}`);
    setEvents(response);
    if (!currentEvent) {
      setCurrentEvent(response[0]);
    } else {
      setCurrentEvent(response.find((v: IEvent) => v.id === currentEvent.id));
    }
  };

  useEffect(() => {
    getCreatedEvents(JSON.parse(localStorage.getItem('User') || '{}').id);
  }, []);
  return (
    <>
      <div className='w-full h-full'>
        <div className='flex w-full h-full p-8 space-x-4'>
          <div className='flex flex-col min-w-[10rem] w-fit h-full space-y-4 overflow-y-auto'>
            {events.length ? (
              events.map((v: IEvent, i) => {
                return (
                  <div
                    onClick={() => setCurrentEvent(v)}
                    key={i}
                    className='group'
                  >
                    <div className='shadow-sm min-w-[10rem] group-hover:cursor-pointer group-hover:shadow-md flex flex-col bg-white w-full h-fit rounded-lg border border-gray-300 px-8 py-6'>
                      <div className='group-hover:cursor-pointer'>
                        <p className='font-bold group-hover:underline'>
                          {v.title}
                        </p>
                        <p className='font-medium text-sm/6'>
                          {truncate(v.description, 50)}
                        </p>
                        <p className='font-medium text-xs text-gray-500'>
                          {v.address}, {v.city}, {v.state}
                        </p>
                        <p className='font-medium text-xs text-gray-500'>
                          Starting {dayjs(v.startDate).format('MM/DD/YY')} at{' '}
                          {dayjs(v.startDate).format('hh:mm A')}
                        </p>
                        <p className='font-medium text-xs text-gray-500'>
                          Ending {dayjs(v.endDate).format('MM/DD/YY')} at{' '}
                          {dayjs(v.endDate).format('hh:mm A')}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className='font-semibold'>
                You have not created any events yet
              </div>
            )}
          </div>
          <div className='w-full h-full bg-white rounded-lg border overflow-auto border-gray-300 shadow-md'>
            <div className='border-b border-gray-300 h-fit'>
              <div className='px-6 py-6'>
                <p className='font-bold text-2xl'>{currentEvent?.title}</p>
                <p className='font-medium text-gray-600 mt-1 text-sm'>
                  Created by {currentEvent?.author?.username}
                </p>
              </div>
            </div>
            <div>
              <div className='space-y-1 px-6 py-8 border-b border-gray-300'>
                <p className='text-lg font-bold'>Full description</p>
                <p className='text-sm  text-gray-600 whitespace-pre-wrap'>
                  {currentEvent?.description}
                </p>
              </div>
              <div className='space-y-1 px-6 py-8 border-b border-gray-300'>
                <p className='text-lg font-bold'>Location</p>
                <p className='text-sm  text-gray-600 whitespace-pre-wrap'>
                  {currentEvent?.address}
                </p>
                <p className='text-sm  text-gray-600 whitespace-pre-wrap'>
                  {currentEvent?.city}, {currentEvent?.state}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
