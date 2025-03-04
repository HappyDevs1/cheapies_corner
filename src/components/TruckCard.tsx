import Image from "next/image";

// Define the props the card will accept
interface TruckCardProps {
  imageUrl: string;
  title: string;
  price: string;
  buttonText: string;
}

const TruckCard: React.FC<TruckCardProps> = ({ imageUrl, title, price, buttonText }) => {
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
