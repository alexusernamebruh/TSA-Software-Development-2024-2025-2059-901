export default function Navbar() {
  return (
    <div className='flex bg-white text-gray-900 items-center rounded-lg px-14 h-16 py-4'>
      <p className='font-bold'>EcoTomorrow</p>
      <div className='ml-auto flex space-x-8'>
        <a href='/signup' className='font-bold hover:cursor-pointer'>
          Sign Up
        </a>
        <a href='/login' className='font-bold hover:cursor-pointer'>
          Log In
        </a>
        <a href='/userGuide' className='font-bold hover:cursor-pointer'>
          User Guide
        </a>
        <a href='/learnMore' className='font-bold hover:cursor-pointer'>
          Learn More
        </a>
        <a href='/sources' className='font-bold hover:cursor-pointer'>
          Sources
        </a>
      </div>
    </div>
  );
}
