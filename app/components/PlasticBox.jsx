// components/PlasticBox.js

const PlasticBox = ({ image, type, count }) => {
    return (
        <div className="group pb-4 cursor-pointer bg-blue-200 text-black relative h-fit  m-4 border rounded-lg shadow-md overflow-hidden transition-transform transform-gpu duration-300 hover:scale-105">
        <img src={image} alt={type} className="w-full object-cover h-48 mx-auto mb-2" />
        <p className="text-center font-semibold text-xl mb-1">{type}</p>
        <p className="text-center text-gray-600">Count: {count}</p>
      </div>
    );
  };
  
  export default PlasticBox;
  