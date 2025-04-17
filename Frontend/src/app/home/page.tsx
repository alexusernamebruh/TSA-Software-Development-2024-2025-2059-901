'use client';
import { useState } from 'react';
import SideNav from '../components/sidenav';
import AllPlaces from '../components/places/allPlaces';
import CreatePlace from '../components/places/createPlace';
import CreateEvent from '../components/events/createEvent';
import CreatedPlaces from '../components/places/createdPlaces';
import CreatedEvents from '../components/events/createdEvents';
import AllEvents from '../components/events/allEvents';
import AIHelper from '../components/aiHelper';

export default function Home() {
  const [currentPage, setCurrentPage] = useState('All Places');
  return (
    <div className='w-screen h-screen'>
      <div className='bg-white h-screen w-full flex'>
        <div className='bg-blue-500 w-fit h-full min-h-screen'>
          <SideNav current={currentPage} setCurrent={setCurrentPage} />
        </div>
        <div className='min-h-screen h-full w-full bg-grid'>
          {currentPage === 'All Places' && <AllPlaces />}
          {currentPage === 'All Events' && <AllEvents />}
          {currentPage === 'Created Places' && <CreatedPlaces />}
          {currentPage === 'Created Events' && <CreatedEvents />}
          {currentPage === 'Create a Place' && <CreatePlace />}
          {currentPage === 'Create an Event' && <CreateEvent />}
          {currentPage === 'AI Helper' && <AIHelper />}
        </div>
      </div>
    </div>
  );
}
