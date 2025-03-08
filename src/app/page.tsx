"use client"

import Image from "next/image";
import TruckCard from "@/components/TruckCard";
import { Search, Truck, Send, KeySquare } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()

  return (
    <div>
      {/* First container - Inside background image */}
      <div className="relative bg-cover bg-center min-h-[70vh] p-10 text-white text-center object- md:pt-32">
        <p className="text-4xl font-bold">
          Explore the Road Ahead with{" "}
          <span className="text-blue-500">CheapiesCorner</span> Trucks
        </p>
        <p className="text-lg mt-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam
          justo nec ligula eleifend efficitur.
        </p>
        <div>
          <button className="bg-blue-700 px-5 py-3 rounded-md mt-8" onClick={() => router.push("/fleet")}>
            VIEW OUR FLEET
          </button>
        </div>
      </div>

      {/* Second container - Outside the background image */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative bg-white text-black p-10">
        <div className="flex flex-col gap-2 text-center">
          <p className="text-blue-700 text-4xl font-bold">10+</p>
          <p className="text-lg font-semibold">Years of Experience</p>
        </div>
        <div className="flex flex-col gap-2 text-center">
          <p className="text-blue-700 text-4xl font-bold">1000+</p>
          <p className="text-lg font-semibold">Happy Clients</p>
        </div>
        <div className="flex flex-col gap-2 text-center">
          <p className="text-blue-700 text-4xl font-bold">200+</p>
          <p className="text-lg font-semibold">Vehicles</p>
        </div>
        <div className="flex flex-col gap-2 text-center">
          <p className="text-blue-700 text-4xl font-bold">10+</p>
          <p className="text-lg font-semibold">Locations</p>
        </div>
      </div>

      {/* Display latest trucks */}
      <div className="flex flex-col gap-5 relative bg-white text-black p-10">
        {/* Header Section */}
        <div className="md:flex justify-between items-center">
          <p className="font-semibold text-2xl">Latest Trucks</p>
          <div className="py-5">
            <button className="bg-blue-700 px-28 py-3 rounded-md text-white md:px-10" onClick={() => router.push("/fleet")}>
              Show all
            </button>
          </div>
        </div>

        {/* Card Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
          <TruckCard
            imageUrl="https://cdn.yello.link/sheltonmotors/files/2024/06/06154729/20240604_164022-1-480x360.jpg"
            title="Iveco"
            price="R500 000"
            buttonText="See Full Details"
            mileage={30500}
            transmission="Automatic"
            year={2019}
            condition="Used"
          />
          <TruckCard
            imageUrl="https://cdn.yello.link/sheltonmotors/files/2024/06/06154729/20240604_164022-1-480x360.jpg"
            title="Iveco"
            price="R500 000"
            buttonText="See Full Details"
            mileage={30500}
            transmission="Automatic"
            year={2019}
            condition="Used"
          />
          <TruckCard
            imageUrl="https://cdn.yello.link/sheltonmotors/files/2024/06/06154729/20240604_164022-1-480x360.jpg"
            title="Iveco"
            price="R500 000"
            buttonText="See Full Details"
            mileage={30500}
            transmission="Automatic"
            year={2019}
            condition="Used"
          />
          <TruckCard
            imageUrl="https://cdn.yello.link/sheltonmotors/files/2024/06/06154729/20240604_164022-1-480x360.jpg"
            title="Iveco"
            price="R500 000"
            buttonText="See Full Details"
            mileage={30500}
            transmission="Automatic"
            year={2019}
            condition="Used"
          />
        </div>
      </div>

      {/* How we work component */}
      <div className="flex flex-col gap-16 relative bg-white text-black p-10">
        <p className="font-semibold text-2xl lg:self-center">How we work</p>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 ">
        <div className="flex flex-col items-center">
          {/* Icon area */}
          <div className="bg-blue-500 rounded-full p-5">
            <Search size={55} color="white" />
          </div>
          <p className="font-semibold text-xl">Browse Our Fleet</p>
          <p className="text-center text-gray-500 max-w-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing
          </p>
        </div>
        <div className="flex flex-col items-center">
          {/* Icon area */}
          <div className="bg-blue-500 rounded-full p-5">
            <Truck size={55} color="white" />
          </div>
          <p className="font-semibold text-xl">Select Your Vehicle</p>
          <p className="text-center text-gray-500 max-w-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing
          </p>
        </div>
        <div className="flex flex-col items-center">
          {/* Icon area */}
          <div className="bg-blue-500 rounded-full p-5">
            <Send size={55} color="white" />
          </div>
          <p className="font-semibold text-xl">Submit an Enquiry</p>
          <p className="text-center text-gray-500 max-w-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing
          </p>
        </div>
        <div className="flex flex-col items-center">
          {/* Icon area */}
          <div className="bg-blue-500 rounded-full p-5">
            <KeySquare size={55} color="white" />
          </div>
          <p className="font-semibold text-xl">Pick Up & Drive</p>
          <p className="text-center text-gray-500 max-w-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing
          </p>
        </div>
        </div>
      </div>
    </div>
  );
}
