'use client';
import { useEffect, useState } from 'react';

import { a } from '../config';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [windowWidth, setWindowWidth] = useState(1024);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();
  const Login = async () => {
    const { data: response } = await a.post('/users/signIn', {
      username: username,
      password: password,
    });
    if (response) {
      localStorage.setItem('User', JSON.stringify(response));
      router.push('/home');
    }
  };
  return (
    <>
      {windowWidth > 1023 && (
        <div className='flex min-h-screen h-full bg-white'>
          <div className='h-screen bg-grid w-1/2 bg-white'>
            <div className='mx-auto h-full max-w-[30rem] w-full my-auto'>
              <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
                <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
                  <h2 className='mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900'>
                    Log in to your account
                  </h2>
                </div>

                <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
                  <div className='space-y-6'>
                    <div>
                      <label
                        htmlFor='username'
                        className='block text-sm/6 font-bold text-gray-900'
                      >
                        Username*
                      </label>
                      <div className='mt-2'>
                        <input
                          type='text'
                          onChange={(v) => setUsername(v.target.value)}
                          value={username}
                          required
                          className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6'
                        />
                      </div>
                    </div>

                    <div>
                      <div className='flex items-center justify-between'>
                        <label
                          htmlFor='password'
                          className='block text-sm/6 font-bold text-gray-900'
                        >
                          Password*
                        </label>
                      </div>
                      <div className='mt-2'>
                        <input
                          id='password'
                          name='password'
                          type='password'
                          required
                          onChange={(v) => setPassword(v.target.value)}
                          value={password}
                          className='block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6'
                        />
                      </div>
                    </div>

                    <div>
                      <button
                        onClick={() => Login()}
                        className='flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
                      >
                        Login
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='h-screen w-1/2'>
            <img
              src='https://cdn.pixabay.com/photo/2015/11/10/19/39/leaves-1037624_1280.jpg'
              className='w-full h-full object-cover'
            />
          </div>
        </div>
      )}
    
    </>
  );
}
