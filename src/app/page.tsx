import Image from "next/image";
import TruckCard from "@/components/TruckCard";
import { Search, Truck, Send, KeySquare } from "lucide-react";

export default function Home() {
  return (
    <div>
      {/* First container - Inside background image */}
      <div className="relative bg-cover bg-center min-h-[70vh] p-10 text-white text-center object-">
        <p className="text-4xl font-bold">
          Explore the Road Ahead with{" "}
          <span className="text-blue-500">CheapiesCorner</span> Rentals
        </p>
        <p className="text-lg mt-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam
          justo nec ligula eleifend efficitur.
        </p>
        <div>
          <button className="bg-blue-700 px-5 py-3 rounded-md mt-8">
            VIEW OUR FLEET
          </button>
        </div>
      </div>

      {/* Second container - Outside the background image */}
      <div className="flex flex-col gap-8 relative bg-white text-black p-10">
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
      {/* Display latest cars */}
      <div className="flex flex-col gap-5 relative bg-white text-black p-10">
        <p className="font-semibold text-2xl">Latest Trucks</p>
        <button className="bg-blue-700 px-5 py-3 rounded-md text-white">
          Show all
        </button>
        {/* Card for the truck */}
        <div className="flex flex-col gap-16 justify-center">
          <TruckCard
            imageUrl="https://via.placeholder.com/500"
            title="Product 1"
            price="$99.99"
            buttonText="See Full Details"
          />
          <TruckCard
            imageUrl="https://via.placeholder.com/500"
            title="Product 2"
            price="$99.99"
            buttonText="See Full Details"
          />
          <TruckCard
            imageUrl="https://via.placeholder.com/500"
            title="Product 3"
            price="$99.99"
            buttonText="See Full Details"
          />
          <TruckCard
            imageUrl="https://via.placeholder.com/500"
            title="Product 4"
            price="$99.99"
            buttonText="See Full Details"
          />
        </div>
      </div>
      {/* How we work component */}
      <div className="flex flex-col gap-16 relative bg-white text-black p-10">
        <p className="font-semibold text-2xl">How we work</p>
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
  );
}
