import Image from "next/image";
import { Award, ShieldCheck, HandCoins, Handshake } from "lucide-react";

export default function About () {
  return (
    <div>
      <div className="flex flex-col gap-5 relative bg-cover bg-center min-h-[70vh] p-10 text-white text-center object- md:pt-32">
        <p className="text-4xl font-bold">About <span className="text-blue-400">CheapiesCorner</span></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam justo nec ligula eleifend efficitur.</p>
      </div>
      {/* Outside background image */}
      <div className="grid grid-cols-1 items-center gap-10 relative bg-white text-black p-10 lg:grid-cols-2">
        <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-6">
        <p className="font-semibold text-2xl">Our Journey</p>
        <p className="text-gray-500 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className="flex flex-col gap-6">
        <p className="font-semibold text-2xl">Our Mission</p>
        <p className="text-gray-500 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        </div>
        {/* Picture of trucks within the 2nd container */}
        <div className="flex justify-center mt-5">
        {/* https://img.freepik.com/premium-photo/cargo-trucks-row-logistics_570545-28.jpg */}
        <Image src="https://img.freepik.com/premium-photo/cargo-trucks-row-logistics_570545-28.jpg" alt="Cargo trucks row logistics" width={750} height={250} className="rounded-xl" />
        </div>
      </div>
      {/* Stats numbers container */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative bg-white text-black p-10">
        <div className="flex flex-col gap-2 text-center">
          <p className="text-blue-700 text-4xl font-bold">10+</p>
          <p className="text-lg font-semibold">Years of Experience</p>
          <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
        </div>
        <div className="flex flex-col gap-2 text-center">
          <p className="text-blue-700 text-4xl font-bold">1000+</p>
          <p className="text-lg font-semibold">Happy Clients</p>
          <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
        </div>
        <div className="flex flex-col gap-2 text-center">
          <p className="text-blue-700 text-4xl font-bold">200+</p>
          <p className="text-lg font-semibold">Vehicles</p>
          <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
        </div>
        <div className="flex flex-col gap-2 text-center">
          <p className="text-blue-700 text-4xl font-bold">10+</p>
          <p className="text-lg font-semibold">Locations</p>
          <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
        </div>
      </div>
      {/* Founder information */}
      <div className="grid grid-cols-1 items-center gap-14 relative bg-white text-black p-10 lg:grid-cols-2">
        <div>
          <Image src="https://img.freepik.com/free-photo/friendly-ceo-desk_23-2147626294.jpg" alt="CEO" width={750} height={250} className="rounded-xl" />
        </div>
        <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-7">
          <p className="font-semibold text-2xl">Meet Our Founder</p>
          <p className="text-lg text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className="flex flex-col gap-7">
          <p className="font-semibold text-2xl">Leadership & Expertise</p>
          <p className="text-lg text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        </div>
      </div>
      {/* Values section */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 relative bg-white text-black p-10">
      <div className="flex flex-col gap-4 items-center">
          {/* Icon area */}
          <div className="bg-blue-500 rounded-full p-5">
            <Award size={55} color="white" />
          </div>
          <p className="font-semibold text-xl">Excellence</p>
          <p className="text-center text-gray-500 max-w-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing
          </p>
        </div>
        <div className="flex flex-col gap-4 items-center">
          {/* Icon area */}
          <div className="bg-blue-500 rounded-full p-5">
            <ShieldCheck size={55} color="white" />
          </div>
          <p className="font-semibold text-xl">Reliability</p>
          <p className="text-center text-gray-500 max-w-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing
          </p>
        </div>
        <div className="flex flex-col gap-4 items-center">
          {/* Icon area */}
          <div className="bg-blue-500 rounded-full p-5">
            <HandCoins size={55} color="white" />
          </div>
          <p className="font-semibold text-xl">Affordability</p>
          <p className="text-center text-gray-500 max-w-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing
          </p>
        </div>
        <div className="flex flex-col gap-4 items-center">
          {/* Icon area */}
          <div className="bg-blue-500 rounded-full p-5">
            <Handshake size={55} color="white" />
          </div>
          <p className="font-semibold text-xl">Loyalty</p>
          <p className="text-center text-gray-500 max-w-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing
          </p>
        </div>
      </div>
    </div>
  )
}