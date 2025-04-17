'use client';

import { a } from '@/app/config';
import { truncate } from '@/app/helpers';
import { IPlace } from '@/app/interfaces';
import { useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import Success from '../success';
import Modal from '../modal';

export default function CreatedPlaces() {
  const [places, setPlaces] = useState<IPlace[]>([]);
  const [currentPlace, setCurrentPlace] = useState<IPlace>();
  const [newRating, setNewRating] = useState(0);
  const [newComment, setNewComment] = useState('');
  const [showCreateRatingModal, setShowCreateRatingModal] = useState(false);
  const [showCreateRatingSuccess, setShowCreateRatingSuccess] = useState(false);

  const getCreatedPlaces = async (userId: number) => {
    const { data: response } = await a.get(`/places/getByOwnerId/${userId}`);
    setPlaces(response);
    if (!currentPlace) {
      setCurrentPlace(response[0]);
    } else {
      setCurrentPlace(response.find((v: IPlace) => v.id === currentPlace.id));
    }
  };

  const createRating = async () => {
    const { data: response } = await a.post('/ratings', {
      rating: newRating,
      placeId: currentPlace?.id,
      authorId: JSON.parse(localStorage.getItem('User') || '{}').id,
      comment: newComment,
    });
    if (response) {
      setNewRating(0);
      setNewComment('');
      getCreatedPlaces(JSON.parse(localStorage.getItem('User') || '{}').id);
      setShowCreateRatingSuccess(true);
      setShowCreateRatingModal(false);
      setTimeout(() => {
        setShowCreateRatingSuccess(false);
      }, 3000);
    }
  };

  const findCommentsAmount = () => {
    let amount = 0;
    for (let i = 0; i < (currentPlace?.ratings ?? []).length; i++) {
      if (currentPlace?.ratings[i].comment !== '') {
        amount++;
      }
    }
    return amount;
  };

  useEffect(() => {
    getCreatedPlaces(JSON.parse(localStorage.getItem('User') || '{}').id);
  }, []);
  return (
    <>
      <Modal open={showCreateRatingModal} setOpen={setShowCreateRatingModal}>
        <div>
          <div className='mb-2'>
            <p className='font-semibold text-lg'>Create a rating</p>
          </div>
          <div className='flex flex-col space-y-3 w-full min-w-96'>
            <div className='outline-none focus:outline-none'>
              <Rating
                style={{ maxWidth: 100 }}
                value={newRating}
                onChange={(v: number) => setNewRating(v)}
              />
            </div>
            <div>
              <label className='block text-sm/6 font-bold text-gray-900'>
                Comment(optional)
              </label>
              <div className='mt-2'>
                <textarea
                  onChange={(v) => setNewComment(v.target.value)}
                  value={newComment}
                  rows={10}
                  required
                  className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6'
                />
              </div>
            </div>
            <div
              onClick={() => createRating()}
              className='mt-1 w-full h-fit py-2 text-center font-semibold text-white rounded-md hover:bg-blue-600 bg-blue-500 hover:cursor-pointer'
            >
              Create Rating
            </div>
          </div>
        </div>
      </Modal>

      <div className='w-full h-full'>
        <div className='absolute top-0 right-0'>
          <Success
            title={'Success!'}
            description={'Successfully created a rating'}
            show={showCreateRatingSuccess}
            setShow={setShowCreateRatingSuccess}
          />
        </div>

        <div className='flex w-full h-full p-8 space-x-4'>
          <div className='flex flex-col min-w-[10rem] w-fit h-full space-y-4 overflow-y-auto'>
            {places.length ? (
              places.map((v: IPlace, i) => {
                return (
                  <div
                    onClick={() => setCurrentPlace(v)}
                    key={i}
                    className='group'
                  >
                    <div className='shadow-sm min-w-[10rem] group-hover:cursor-pointer group-hover:shadow-md flex flex-col bg-white w-full h-fit rounded-lg border border-gray-300 px-8 py-6'>
                      <div className='group-hover:cursor-pointer'>
                        <p className='font-bold group-hover:underline'>
                          {v.name}
                        </p>
                        <p className='font-medium text-sm/6'>
                          {truncate(v.description, 50)}
                        </p>
                        <p className='font-medium text-xs text-gray-500'>
                          {v.category.name}
                        </p>
                        <p className='font-medium text-xs text-gray-500'>
                          {v.address}, {v.city}, {v.state}
                        </p>
                        <p className='font-medium text-xs text-gray-500'>
                          {v.ratingsAverage === -1
                            ? 'No ratings yet'
                            : v.ratingsAverage}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className='font-semibold'>
                You have not created any places yet
              </div>
            )}
          </div>
          <div className='w-full h-full bg-white rounded-lg border overflow-auto border-gray-300 shadow-md'>
            <div className='border-b border-gray-300 h-fit'>
              <div className='px-6 py-6'>
                <p className='font-bold text-2xl'>{currentPlace?.name}</p>
                <p className='font-medium text-gray-600 mt-1 text-sm'>
                  Created by {currentPlace?.owner?.username}
                </p>
                <div className='flex space-x-2 text-sm text-gray-600'>
                  <p>{currentPlace?.category.name}</p>
                </div>
              </div>
            </div>
            <div>
              <div className='space-y-1 px-6 py-8 border-b border-gray-300'>
                <p className='text-lg font-bold'>Full description</p>
                <p className='text-sm  text-gray-600 whitespace-pre-wrap'>
                  {currentPlace?.description}
                </p>
              </div>
              <div className='space-y-1 px-6 py-8 border-b border-gray-300'>
                <p className='text-lg font-bold'>Location</p>
                <p className='text-sm  text-gray-600 whitespace-pre-wrap'>
                  {currentPlace?.address}
                </p>
                <p className='text-sm  text-gray-600 whitespace-pre-wrap'>
                  {currentPlace?.city}, {currentPlace?.state}
                </p>
              </div>
              <div className='space-y-1 px-6 py-8 border-b border-gray-300'>
                <p className='text-lg font-bold'>Rating</p>
                {currentPlace && currentPlace.ratingsAverage !== -1 ? (
                  <div>
                    <Rating
                      style={{ maxWidth: 100 }}
                      value={currentPlace?.ratingsAverage}
                      halfFillMode='svg'
                      readOnly
                    />
                  </div>
                ) : (
                  <div className='text-gray-600 text-sm'>
                    <p>There have been no ratings yet</p>
                  </div>
                )}
              </div>

              <div className='space-y-1 px-6 py-8 border-b border-gray-300'>
                <p className='text-lg font-bold'>Comments</p>
                <div className='grid grid-cols-2 gap-2'>
                  {currentPlace?.ratings.map((v, i) => (
                    <div
                      key={i}
                      className={`${
                        v.comment === '' && 'hidden'
                      } flex flex-col border border-gray-300 rounded-md shadow p-3.5 w-full h-fit`}
                    >
                      <p className='font-semibold text-sm'>
                        {v.author?.username}
                      </p>
                      <div className='text-sm space-x-1 items-center text-gray-600 flex'>
                        <p className='text-xs'>Rating: </p>
                        <div>
                          <Rating
                            style={{ maxWidth: 70 }}
                            value={v.rating}
                            halfFillMode='svg'
                            readOnly
                          />
                        </div>
                      </div>
                      <p className='text-sm mt-0.5 text-gray-600'>
                        {v.comment}
                      </p>
                    </div>
                  ))}
                  {findCommentsAmount() === 0 && (
                    <div className='text-gray-600 text-sm'>
                      <p>There have been no comments yet</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
