'use client';

import { a } from '@/app/config';
import { useState } from 'react';
import Success from '../success';

export default function CreateEvent() {
  const [newName, setNewName] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newAddress, setNewAddress] = useState('');
  const [newCity, setNewCity] = useState('');
  const [newState, setNewState] = useState('');
  const [startDateTime, setStartDateTime] = useState('');
  const [endDateTime, setEndDateTime] = useState('');
  const [showCreateSuccess, setShowCreateSuccess] = useState(false);

  const createEvent = async () => {
    const { data: response } = await a.post('/events', {
      title: newName,
      description: newDescription,
      address: newAddress,
      city: newCity,
      state: newState,
      startDate: startDateTime,
      endDate: endDateTime,
      authorId: JSON.parse(localStorage.getItem('User') || '{}').id,
    });
    if (response) {
      setNewName('');
      setNewDescription('');
      setNewAddress('');
      setNewCity('');
      setNewState('');
      setStartDateTime('');
      setEndDateTime('');
      setShowCreateSuccess(true);
      setTimeout(() => {
        setShowCreateSuccess(false);
      }, 3000);
    }
  };

  return (
    <div className='w-full h-full'>
      <div className='absolute top-0 right-0'>
        <Success
          title={'Success!'}
          description={'Successfully created a place'}
          show={showCreateSuccess}
          setShow={setShowCreateSuccess}
        />
      </div>
      <div className='p-6 h-full w-full'>
        <div className='w-full h-full bg-white overflow-auto flex flex-col rounded-lg border border-gray-300 shadow-md'>
          <div className='border-b border-gray-300 h-fit'>
            <div className='px-6 py-6'>
              <p className='font-bold text-2xl'>Create an event</p>
            </div>
          </div>
          <div className='p-6 space-y-4 flex flex-col'>
            <div className='space-y-2'>
              <div>
                <label
                  htmlFor='username'
                  className='block text-sm/6 font-bold text-gray-900'
                >
                  Title
                </label>
                <div className='mt-2'>
                  <input
                    type='text'
                    onChange={(v) => setNewName(v.target.value)}
                    value={newName}
                    required
                    className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6'
                  />
                </div>
              </div>
              <div>
                <label className='block text-sm/6 font-bold text-gray-900'>
                  Address
                </label>
                <div className='mt-2'>
                  <input
                    type='text'
                    onChange={(v) => setNewAddress(v.target.value)}
                    value={newAddress}
                    className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6'
                  />
                </div>
              </div>
              <div>
                <label className='block text-sm/6 font-bold text-gray-900'>
                  City
                </label>
                <div className='mt-2'>
                  <input
                    type='text'
                    onChange={(v) => setNewCity(v.target.value)}
                    value={newCity}
                    className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6'
                  />
                </div>
              </div>
              <div>
                <label className='block text-sm/6 font-bold text-gray-900'>
                  State
                </label>
                <div className='mt-2'>
                  <input
                    type='text'
                    onChange={(v) => setNewState(v.target.value)}
                    value={newState}
                    className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6'
                  />
                </div>
              </div>
              <div className=''>
                <label className='block text-sm/6 font-bold text-gray-900'>
                  Description*
                </label>
                <div className='mt-2'>
                  <textarea
                    onChange={(v) => setNewDescription(v.target.value)}
                    value={newDescription}
                    rows={10}
                    required
                    className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6'
                  />
                </div>
              </div>
              <div className='flex flex-col'>
                <label className='block text-sm/6 font-bold text-gray-900'>
                  Start Date and Time
                </label>
                <input
                  type='datetime-local'
                  className='rounded-md px-3 py-1.5 border border-gray-300'
                  onChange={(v) => {
                    setStartDateTime(v.target.value);
                  }}
                  value={startDateTime}
                />
              </div>
              <div className='flex flex-col mb-1'>
                <label className='block text-sm/6 font-bold text-gray-900'>
                  End Date and Time
                </label>
                <input
                  type='datetime-local'
                  className='rounded-md px-3 py-1.5 border border-gray-300'
                  onChange={(v) => {
                    setEndDateTime(v.target.value);
                  }}
                  value={endDateTime}
                />
              </div>
            </div>

            <div
              onClick={() => createEvent()}
              className='bg-blue-500 w-fit hover:bg-blue-600 hover:cursor-pointer font-bold text-lg text-white rounded-md px-4 py-2'
            >
              Create event
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
