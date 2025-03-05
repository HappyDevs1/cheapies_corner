import Image from "next/image";
import { Gauge, Settings2, CalendarDays, Truck } from "lucide-react";

// Define the props the card will accept
interface TruckCardProps {
  imageUrl: string;
  title: string;
  price: string;
  buttonText: string;
  mileage: number;
  transmission: string;
  year: number;
  condition: string
}

const TruckCard: React.FC<TruckCardProps> = ({ imageUrl, title, price, buttonText, mileage, transmission, year, condition }) => {
  return (
    <div className="max-w-sm rounded-lg shadow-lg overflow-hidden bg-white">
      {/* Image Section */}
      <div className="relative h-64 w-full">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Card Content */}
      <div className="p-4">
        {/* Title */}
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>

        {/* Price */}
        <p className="text-lg text-blue-600 mt-2">{price}</p>

        {/* Specs */}
        <div className="flex justify-between bg-gray-100 rounded-xl py-3 px-5">
          <div className="flex flex-col text-gray-500 text-sm items-center">
            <Gauge size={20}/>
            <p>{mileage}</p>
          </div>
          <div className="flex flex-col text-gray-500 text-sm items-center">
            <Settings2 size={20} />
            <p>{transmission}</p>
          </div>
          <div className="flex flex-col text-gray-500 text-sm items-center">
            <CalendarDays size={20} />
            <p>{year}</p>
          </div>
          <div className="flex flex-col text-gray-500 text-sm items-center">
            <Truck size={20} />
            <p>{condition}</p>
          </div>
        </div>

        {/* Button */}
        <div className="mt-4">
          <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TruckCard;
