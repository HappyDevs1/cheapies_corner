import { Mail, Phone, Twitter, Instagram, Facebook, MessageCircle } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="grid grid-cols-1 px-5 lg:grid-cols-2 lg:px-20">
      {/* Container for header texts */}
      <div>
      <div className="flex flex-col gap-3">
        <p className="font-semibold text-xl">Get in touch</p>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing
        </p>
      </div>
      {/* Container for contacts information */}
      <div>
        <div className="flex gap-5 items-center mt-7">
          <div className="bg-blue-500 rounded-full p-5">
            <Mail size={40} color="white" />
          </div>
          <div className="flex flex-col">
            <p className="font-semibold text-xl">Email</p>
            <p className="font-semibold text-lg">info@cheapiescorner.com</p>
          </div>
        </div>
        <div className="flex gap-5 items-center mt-7">
          <div className="bg-blue-500 rounded-full p-5">
            <Phone size={40} color="white" />
          </div>
          <div className="flex flex-col">
            <p className="font-semibold text-xl">Phone</p>
            <p className="font-semibold text-lg">+ 012 457 8329</p>
          </div>
        </div>
      </div>
      </div>
      {/* Container for the contact form */}
      <div className="border-2 rounded-2xl px-6 py-10 mt-16 lg:mt-0">
        <form className="flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col gap-5">
            <label className="font-semibold">First Name</label>
            <input
              type="text"
              placeholder="First Name"
              className="bg-gray-100 p-5 rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-5">
            <label className="font-semibold">Last Name</label>
            <input
              type="text"
              placeholder="Last Name"
              className="bg-gray-100 p-5 rounded-lg"
            />
          </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col gap-5">
            <label className="font-semibold">Email Address</label>
            <input
              type="text"
              placeholder="Email Address"
              className="bg-gray-100 p-5 rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-5">
            <label className="font-semibold">Phone Number</label>
            <input
              type="text"
              placeholder="Phone Number"
              className="bg-gray-100 p-5 rounded-lg"
            />
          </div>
          </div>
          <div className="relative flex flex-col gap-5">
            <input
              type="text"
              placeholder="Message"
              className="bg-gray-100 p-5 rounded-lg h-40 pt-6 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 peer"
            />
            <span className="absolute top-2 left-5 text-gray-400 text-sm pointer-events-none">
              Message
            </span>
          </div>
          <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
          <div className="flex flex-col items-center md:items-start">
            <button className="bg-blue-500 px-20 py-3 text-white font-semibold rounded-md">Send Message</button>
          </div>
          <div className="flex gap-3 items-start md:justify-end">
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
        </form>
      </div>
    </div>
  );
}
