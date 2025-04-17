'use client';

import { a } from '@/app/config';
import { truncate } from '@/app/helpers';
import { IEvent } from '@/app/interfaces';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import Success from '../success';

export default function AllEvents() {
  const [events, setEvents] = useState<IEvent[]>([]);
  const [currentEvent, setCurrentEvent] = useState<IEvent>();
  const [showSignupSuccess, setShowSignupSuccess] = useState(false);
  const [showUnsignupSuccess, setShowUnsignupSuccess] = useState(false);

  const getEvents = async () => {
    const { data: response } = await a.get(`/events`);
    setEvents(response);
    if (!currentEvent) {
      setCurrentEvent(response[0]);
    } else {
      setCurrentEvent(response.find((v: IEvent) => v.id === currentEvent.id));
    }
  };

  const signupForEvent = async () => {
    const { data: response } = await a.put('/events/signup', {
      eventId: currentEvent?.id,
      userId: JSON.parse(localStorage.getItem('User') || '{}').id,
    });
    if (response) {
      getEvents();
      setShowSignupSuccess(true);
      setTimeout(() => {
        setShowSignupSuccess(false);
      }, 3000);
    }
  };

  const unsignupForEvent = async () => {
    const { data: response } = await a.put('/events/unsignup', {
      eventId: currentEvent?.id,
      userId: JSON.parse(localStorage.getItem('User') || '{}').id,
    });
    if (response) {
      getEvents();
      setShowUnsignupSuccess(true);
      setTimeout(() => {
        setShowUnsignupSuccess(false);
      }, 3000);
    }
  };

  const hasSignedUp = () => {
    const userId = JSON.parse(localStorage.getItem('User') || '{}').id;
    if (currentEvent?.users.find((v) => v.id === userId)) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <>
      <div className='absolute top-0 right-0'>
        <Success
          title={'Success!'}
          description={'Successfully signed up for event'}
          show={showSignupSuccess}
          setShow={setShowSignupSuccess}
        />
        <Success
          title={'Success'}
          description={'Successfully left event'}
          show={showUnsignupSuccess}
          setShow={setShowUnsignupSuccess}
        />
      </div>
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
                No events have been created yet
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
                <div
                  onClick={() => {
                    if (hasSignedUp()) {
                      unsignupForEvent();
                    } else {
                      signupForEvent();
                    }
                  }}
                  className='bg-blue-500 mt-2 hover:bg-blue-600 hover:cursor-pointer rounded-md font-semibold text-white w-fit h-fit px-3 py-2'
                >
                  {hasSignedUp() ? 'Leave this Event' : 'Sign Up for Event'}
                </div>
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
              <div className='space-y-1 px-6 py-8 border-b border-gray-300'>
                <p className='text-lg font-bold'>
                  Users signed up for this event
                </p>
                {currentEvent?.users.length ? (
                  <div className='grid grid-cols-20 gap-3'>
                    {currentEvent?.users.map((v, i) => {
                      return (
                        <div
                          key={i}
                          className='flex border overflow-x-auto border-gray-300 rounded-md py-2 px-3 w-full justify-center h-fit items-center space-x-2'
                        >
                          <p className='text-sm text-gray-600'>{v.username}</p>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className='text-gray-600 text-sm'>
                    No users have signed up for this event yet
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
