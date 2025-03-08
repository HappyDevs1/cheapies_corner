import { Twitter, Instagram, Facebook, MessageCircle, Truck } from 'lucide-react'

export default function Footer () {
  return (
    <div className="grid grid-col-1 md:grid-cols-2 gap-10 px-7 py-14 bg-gray-700 text-white">
      <div className="flex flex-col gap-4">
        <div className='flex gap-1 items-center'>
        <Truck size={26} />
        <p className="font-bold text-2xl">CheapiesCorner</p>
        </div>
        <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam justo nec ligula eleifend efficitur.</p>
        <div>
        <div className="flex gap-3 items-start">
            <div className="bg-blue-500 rounded-full p-2">
              <Twitter size={25} color="white" />
            </div>
            <div className="bg-blue-500 rounded-full p-2">
              <Instagram size={25} color="white" />
            </div>
            <div className="bg-blue-500 rounded-full p-2">
              <Facebook size={25} color="white" />
            </div>
            <div className="bg-blue-500 rounded-full p-2">
              <MessageCircle size={25} color="white" />
            </div>
          </div>
        </div>
      </div>
      {/* Newletter section */}
      <div className='md:justify-items-end'>
        <div className='flex flex-col gap-4'>
        <p className='font-semibold text-xl'>Subscribe to our newsletter</p>
        <input type="text" placeholder="Enter your email" className="bg-gray-100 p-3 rounded-lg w-72" />
        <div className=''>
          <button className='bg-blue-500 px-5 py-2 rounded'>SUBMIT</button>
        </div>
        </div>
      </div>
    </div>
  )
}