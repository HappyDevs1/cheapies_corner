import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Container for landing page texts */}
      <div className="flex flex-col gap-7">
      <p className="text-4xl">Explore the Road Ahead with <span className="text-blue-500">CheapiesCorner</span> Rentals</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam justo nec ligula eleifend efficitur.</p>
      <div className="">
      <button className="bg-blue-700 px-5 py-3 rounded-md">VIEW OUR FLEET</button>
      </div>
      </div>
      {/* Container for stats and numbers */}
      <div className="flex flex-col">
        <div className="flex flex-col">
          <p className="text-blue-700">10+</p>
          <p>Years of Experience</p>
        </div>
      </div>
    </div>
  );
}
