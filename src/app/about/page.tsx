export default function About () {
  return (
    <div>
      <div className="flex flex-col gap-5 relative bg-cover bg-center min-h-[70vh] p-10 text-white text-center object- md:pt-32">
        <p className="text-4xl font-bold">About <span className="text-blue-400">CheapiesCorner</span></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam justo nec ligula eleifend efficitur.</p>
      </div>
      {/* Outside background image */}
      <div className="flex flex-col gap-5 relative bg-white text-black p-10">
        <div className="flex flex-col gap-6">
        <p className="font-semibold text-2xl">Our Journey</p>
        <p className="text-gray-500 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className="flex flex-col gap-6">
        <p className="font-semibold text-2xl">Our Mission</p>
        <p className="text-gray-500 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        {/* Picture of trucks within the 2nd container */}
        <div>

        </div>
      </div>
    </div>
  )
}