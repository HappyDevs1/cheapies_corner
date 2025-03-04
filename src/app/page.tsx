import Image from "next/image";

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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam justo nec ligula eleifend efficitur.
        </p>
        <div>
          <button className="bg-blue-700 px-5 py-3 rounded-md mt-8">VIEW OUR FLEET</button>
        </div>
      </div>

      {/* Second container - Outside the background image */}
      <div className="flex flex-col gap-5 relative bg-white text-black p-10">
        <div className="flex flex-col text-center">
          <p className="text-blue-700 text-4xl font-bold">10+</p>
          <p className="text-lg">Years of Experience</p>
        </div>
        <div className="flex flex-col text-center">
          <p className="text-blue-700 text-4xl font-bold">1000+</p>
          <p className="text-lg">Happy Clients</p>
        </div>
        <div className="flex flex-col text-center">
          <p className="text-blue-700 text-4xl font-bold">200+</p>
          <p className="text-lg">Vehicles</p>
        </div>
        <div className="flex flex-col text-center">
          <p className="text-blue-700 text-4xl font-bold">10+</p>
          <p className="text-lg">Locations</p>
        </div>
      </div>
      {/* Display latest cars */}
      <div className="flex flex-col gap-5 relative bg-white text-black p-10">
        <p className="font-semibold text-2xl">Latest Trucks</p>
        <button className="bg-blue-700 px-5 py-3 rounded-md text-white">Show all</button>
        {/* Card for the truck */}
        <div>
          
        </div>
      </div>
    </div>
  );
}
