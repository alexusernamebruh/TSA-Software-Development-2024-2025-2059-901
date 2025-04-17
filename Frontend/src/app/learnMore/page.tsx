'use client';
import {
  BookOpenIcon,
  AcademicCapIcon,
  BookmarkSquareIcon,
  HomeIcon,
} from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';

export default function LearnMore() {
  const router = useRouter();
  return (
    <div className='w-full h-full min-w-screen min-h-screen flex overflow-hidden'>
      <div className='bg-blue-500 px-3 w-fit overflow-hidden h-full min-h-screen'>
        <div className='flex flex-col text-white space-y-2 items-center rounded-lg px-8 h-full py-8'>
          <p className='font-bold mb-2'>Learn More</p>
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
              <div className='bg-blue-600 hover:cursor-pointer space-x-2 px-2 py-2.5 items-center rounded-md text-left flex'>
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
      <div className='w-full h-full min-h-screen overflow-hidden'>
        <div className='bg-grid p-8 w-full h-screen space-y-8 overflow-auto'>
          <div className='rounded-md shadow border border-gray-300 w-full h-fit bg-white flex flex-col'>
            <div className='border-b border-gray-300 p-4'>
              <p className='text-2xl font-semibold'>
                Ways to green up your kitchen
              </p>
            </div>
            <div className='p-4 flex flex-col space-y-2 text-gray-700 text-sm font-semibold'>
              <p>
                1. Don&apos;t waste food, it is easy to turn leftovers into new
                meals!
              </p>
              <p>
                2. Recycle your food waste, composting is a great way to do
                this!
              </p>
              <p>
                3. Shop little and often, so you don&apos;t overbuy and waste
                food during big shops.
              </p>
              <p>4. Try and buy some food locally.</p>
              <p>5. Try your hand at gardening!</p>
            </div>
          </div>
          <div className='rounded-md shadow border border-gray-300 w-full h-fit bg-white flex flex-col'>
            <div className='border-b border-gray-300 p-4'>
              <p className='text-2xl font-semibold'>
                How to be more environmentally friendly
              </p>
            </div>
            <div className='p-4 flex flex-col space-y-2 text-gray-700 text-sm font-semibold'>
              <div>
                <p>1. Limit your energy usage</p>
                <p className='ml-4'>
                  You can turn off air conditioning when the weather is nice
                  out, maybe try turning off air conditioning during some months
                  in fall or spring
                </p>
              </div>
              <div>
                <p>2. Limit your use of plastic</p>
                <p className='ml-4'>
                  Instead of using single-use plastics like plastic bags, you
                  could use reusable items.
                </p>
              </div>
              <div>
                <p>3. Plant a tree!</p>
                <p className='ml-4'>
                  Tree planting could make a real difference
                </p>
              </div>
            </div>
          </div>
          <div className='rounded-md shadow border border-gray-300 w-full h-fit bg-white flex flex-col'>
            <div className='border-b border-gray-300 p-4'>
              <p className='text-2xl font-semibold'>
                Reducing your environmental impact
              </p>
            </div>
            <div className='p-4 flex flex-col space-y-2 text-gray-700 text-sm font-semibold'>
              <div>
                <p>1. Eat less meat</p>
                <p className='ml-4'>
                  The meat industry causes a lot of pollution, so eating less
                  meat will be beneficial.
                </p>
              </div>
              <div>
                <p>2. Cook at home</p>
                <p className='ml-4'>
                  Home cooking lets you control your food sources. You could
                  choose more eco-friendly options when buying food.
                  Additionally, home-cooking is typically healthier.
                </p>
              </div>
              <div>
                <p>3. Use public transport</p>
                <p className='ml-4'>
                  Cars use a lot of fossil fuels, so taking the train or the bus
                  leads to a more sustainable environment. Or alternatively, you
                  could try carpooling with your friends!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
