import { useState } from 'react';
import PropTypes from 'prop-types';
// import axios from 'axios';   

const ServiceCard = ({ service }) => {
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [serviceDetails, setServiceDetails] = useState({});

  const toggleBookingForm = () => {
    setShowBookingForm(!showBookingForm);
  };

//   const submitService = () => {
//     axios.post('http://localhost:5000/book-service', {
//         body: {
//             ...serviceDetails,
//             status: 'servicing',
//             serviceType: service.serviceType,
//             shop: service.shop,

//         }
//     }).then((response) => {console.log(response);})
//     .catch((error) => {console.log(error);})
//   }

  const handleEmailChange = (e) => {
    setServiceDetails({
        ...serviceDetails,
        email: e.target.value
    })
  }

  const handleVehicleChange = (e) => {
    setServiceDetails({
        ...serviceDetails,
        vehicleNumber: e.target.value
    })
  }

  const handleMobileChange = (e) => {
    setServiceDetails({
        ...serviceDetails,
        mobile: e.target.value
    })
  }

  const handleDateChange = (e) => {
    setServiceDetails({
        ...serviceDetails,
        dateOfService: e.target.value
    })
  }


  return (
    <div className="max-w-md bg-black text-white shadow-lg rounded-lg overflow-hidden m-4">
      <div className="px-6 py-4">
        <div className="text-2xl mb-2 text-orange-500 font-semibold">
          {service.name}
        </div>
        <p className="text-lg">Price: ${service.price}</p>
        <p className="text-lg">Location: {service.location}</p>
        <p className="text-lg">Mobile: {service.mobile}</p>
      </div>
      {/* Add a button to book the service */}
      <div className="px-6 py-4">
        <button
          className="text-black bg-orange-500 w-[150px] h-[45px] hover:bg-orange-400 hover:text-black hover:border-2 hover:border-orange-400 font-bold py-2 px-4 rounded"
          onClick={toggleBookingForm}
        >
          Book Service
        </button>
      </div>
      {/* Popup form */}
      {showBookingForm && (
        <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-md">
          <div className="bg-white text-black p-6 max-w-lg rounded-lg shadow-lg">
            <h2 className="text-2xl text-orange-500 font-semibold mb-4">
              Book {service.name} Service
            </h2>
            <form>
              
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-semibold mb-2">
                  Email
                </label>
                <input
                  type="text"
                  onChange={handleEmailChange}
                  className="w-full bg-gray-100 border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-orange-500"
                />
              </div>
              {/* Additional form fields */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-semibold mb-2">
                  Bike Number
                </label>
                <input
                  type="text"
                  onChange={handleVehicleChange}
                  className="w-full bg-gray-100 border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-orange-500"
                />
              </div>
             
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-semibold mb-2">
                  Mobile
                </label>
                <input
                  type="text"
                  onChange={handleMobileChange}
                  className="w-full bg-gray-100 border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-orange-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-semibold mb-2">
                  Date of Service
                </label>
                <input
                  type="date"
                  onChange={handleDateChange}
                  className="w-full bg-gray-100 border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-orange-500"
                />
              </div>
              <div className="flex justify-between items-center">
                <button
                  type="button"
                  onClick={() => {
                    toggleBookingForm();
                    setServiceDetails({});
                }}
                  className="text-white bg-red-500 py-2 px-4 rounded hover:bg-red-600 mr-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="text-white bg-green-500 py-2 px-4 rounded hover:bg-green-600"
                //   onClick={submitService}
                >
                  Book
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    mobile: PropTypes.string.isRequired,
  }).isRequired,
};

export default ServiceCard;
