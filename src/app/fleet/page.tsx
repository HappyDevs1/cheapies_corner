import TruckCard from "@/components/TruckCard";

export default function Fleet() {
  return (
    <div>
      {/* Inside background image */}
      <div className="flex flex-col gap-5 relative bg-cover bg-center min-h-[70vh] p-10 text-white text-center object- md:pt-32">
        <p className="text-4xl font-bold text-blue-400">
          CheapiesCorner <span className="text-white">Cars</span>
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam
          justo nec ligula eleifend efficitur.
        </p>
      </div>
      {/* Outside background image */}
      <div>{/* Container for inputs for filtering */}</div>
      {/* Trucks cards */}
      <div className="relative bg-white text-black p-5 md:gap-10 grid grid-cols-1 md:grid-cols-2 gap-7 md:px-5 lg:grid-cols-4">
        <TruckCard
          imageUrl="https://via.placeholder.com/500"
          title="Product 4"
          price="$99.99"
          buttonText="See Full Details"
          mileage={30500}
          transmission="Automatic"
          year={2019}
          condition="Used"
        />
        <TruckCard
          imageUrl="https://via.placeholder.com/500"
          title="Product 4"
          price="$99.99"
          buttonText="See Full Details"
          mileage={30500}
          transmission="Automatic"
          year={2019}
          condition="Used"
        />
        <TruckCard
          imageUrl="https://via.placeholder.com/500"
          title="Product 4"
          price="$99.99"
          buttonText="See Full Details"
          mileage={30500}
          transmission="Automatic"
          year={2019}
          condition="Used"
        />
        <TruckCard
          imageUrl="https://via.placeholder.com/500"
          title="Product 4"
          price="$99.99"
          buttonText="See Full Details"
          mileage={30500}
          transmission="Automatic"
          year={2019}
          condition="Used"
        />
      </div>
      {/* Pagination */}
      <div className="flex justify-center relative bg-white text-black p-5">
        <button className="bg-blue-400 text-white px-6 py-2 rounded">
          Next &gt;
        </button>
      </div>
    </div>
  );
}