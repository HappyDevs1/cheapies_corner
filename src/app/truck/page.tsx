import Image from 'next/image';
import { Mail, PhoneIncoming, Gauge, MapPinCheck, PlugZap, Radio, Settings2, CalendarDays, Truck } from 'lucide-react';

export default function ViewCar() {
  return (
    <div className="mx-4">
      {/* Large Image */}
      <div>
        <Image 
          src="https://cdn.yello.link/sheltonmotors/files/2024/06/06154729/20240604_164022-1-480x360.jpg" 
          alt="Truck" 
          width={750} 
          height={250} 
          className="rounded-xl w-full h-auto"
        />
      </div>

      {/* Small Images - Same Row & Shrinking */}
      <div className="flex justify-between gap-2 mt-3">
          <Image
            src="https://cdn.yello.link/sheltonmotors/files/2024/10/25130804/20241015_121853-1024x768.jpg" 
            alt="Truck" 
            width={80} 
            height={20} 
            className="rounded-xl flex-1 min-w-0 h-auto"
          />
          <Image
            src="https://cdn.yello.link/sheltonmotors/files/2024/10/25130756/20241015_121844-1024x768.jpg" 
            alt="Truck" 
            width={80} 
            height={20} 
            className="rounded-xl flex-1 min-w-0 h-auto"
          />
          <Image
            src="https://cdn.yello.link/sheltonmotors/files/2024/10/25130835/20241015_121914-1024x768.jpg" 
            alt="Truck" 
            width={80} 
            height={20} 
            className="rounded-xl flex-1 min-w-0 h-auto"
          />
          <Image
            src="https://cdn.yello.link/sheltonmotors/files/2024/10/25130949/20241015_122043-1024x768.jpg" 
            alt="Truck" 
            width={80} 
            height={20} 
            className="rounded-xl flex-1 min-w-0 h-auto"
          />
      </div>
      {/* Details container */}
      <div className='mt-10'>
        <p className='font-bold text-2xl'>IVECO</p>
        {/* Specs container */}
        <div className='grid grid-cols-2 gap-5 py-7'>
        <div className='flex justify-center gap-1 items-center px-2 py-1 border-2 rounded-3xl'>
          <Gauge size={20} color='gray' />
          <div><p className='text-gray-500'>4700</p></div>
        </div>
        <div className='flex justify-center gap-1 items-center px-2 py-1 border-2 rounded-3xl'>
          <Settings2 size={20} color='gray' />
          <div><p className='text-gray-500'>Automatic</p></div>
        </div>
        <div className='flex justify-center gap-1 items-center px-2 py-1 border-2 rounded-3xl'>
          <CalendarDays size={20} color='gray' />
          <div><p className='text-gray-500'>2019</p></div>
        </div>
        <div className='flex justify-center gap-1 items-center px-2 py-1 border-2 rounded-3xl'>
          <Truck size={20} color='gray' />
          <div><p className='text-gray-500'>Used</p></div>
        </div>
        </div>
        <p className='text-gray-500 text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiatniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        <div className='flex flex-col mt-10 border-2 p-6 rounded-xl'>
          <p className='font-semibold text-gray-500 text-xl pb-8'>ZAR <span className='text-black font-bold text-3xl'>500 000</span></p>
          <p className='font-semibold text-2xl py-5'>Interested in Buying This Car?</p>
          <div>
          <button className='text-white bg-blue-500 font-semibold px-8 py-3 rounded'>SUBMIT AN ENQUIRY</button>
          </div>
          <p className='text-2xl font-semibold mt-14'>Contact Us</p>
          <div className='flex gap-3 items-center mt-4'>
            <Mail size={34} color='blue' />
            <p className='text-lg'>info@cheapiescorner.com</p>
          </div>
          <div className='flex gap-3 items-center mt-4'>
            <PhoneIncoming size={34} color='blue' />
            <p className='text-lg'>+012 457 8329</p>
          </div>
        </div>
        {/* Specifications container */}
        <div>
          <p className='text-2xl font-semibold mt-14'>Specifications</p>
          <div className='flex justify-between bg-gray-100 px-5 py-3 rounded-lg mt-4'>
            <p>Mileage</p>
            <p className='font-semibold'>4700</p>
          </div>
          <div className='flex justify-between bg-gray-100 px-5 py-3 rounded-lg mt-4'>
            <p>Transmission</p>
            <p className='font-semibold'>Automatic</p>
          </div>
          <div className='flex justify-between bg-gray-100 px-5 py-3 rounded-lg mt-4'>
            <p>Year</p>
            <p className='font-semibold'>2019</p>
          </div>
          <div className='flex justify-between bg-gray-100 px-5 py-3 rounded-lg mt-4'>
            <p>Brand</p>
            <p className='font-semibold'>Iveco</p>
          </div>
        </div>
        {/* Features container */}
        <div>
          <p className='text-2xl font-semibold mt-14'>Features</p>
          <div className='flex gap-4 mt-4 items-center'>
            <Gauge size={26} color='gray' />
            <p className='text-lg font-semibold'>Cruise Control</p>
          </div>
          <div className='flex gap-4 mt-4 items-center'>
            <MapPinCheck size={26} color='gray' />
            <p className='text-lg font-semibold'>Built-in GPS</p>
          </div>
          <div className='flex gap-4 mt-4 items-center'>
            <PlugZap size={26} color='gray' />
            <p className='text-lg font-semibold'>Wireless Charging</p>
          </div>
          <div className='flex gap-4 mt-4 items-center'>
            <Radio size={26} color='gray' />
            <p className='text-lg font-semibold'>Parking Sensors</p>
          </div>
        </div>
      </div>
    </div>
  );
}
