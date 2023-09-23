import bike from "../assets/bike.png";
import location from "../assets/location.png";
import provider from "../assets/vehicle.png";
import select from "../assets/select.png";
import Package from "../assets/book.png";
import Avail from "../assets/responsible.png";

const HowItWork = () => {
  return (
    <>
      <div className="absolute left-[15cm] pt-3 text-orange-600 text-4xl">
        HOW ITS WORK
      </div>
      <div className=" bg-black h-[40vh] flex flex-row justify-evenly items-center">
        <div className="w-[100px] h-[100px] border-2 rounded-full bg-white flex  justify-center items-center ">
          <img src={bike} alt="" className="w-[50px] h-[50px]" />
        </div>
        <div className="w-[100px] h-[100px] border-2 rounded-full bg-white flex justify-center items-center">
          <img src={location} alt="" className="w-[50px] h-[50px]" />
        </div>
        <div className="w-[100px] h-[100px] border-2 rounded-full bg-white flex justify-center items-center">
          <img src={provider} alt="" className="w-[50px] h-[50px]" />
        </div>
        <div className="w-[100px] h-[100px] border-2 rounded-full bg-white flex justify-center items-center">
          <img src={select} alt="" className="w-[50px] h-[50px]" />
        </div>
        <div className="w-[100px] h-[100px] border-2 rounded-full bg-white flex justify-center items-center">
          <img src={Package} alt="" className="w-[50px] h-[50px]" />
        </div>
        <div className="w-[100px] h-[100px] border-2 rounded-full bg-white flex justify-center items-center">
          <img src={Avail} alt="" className="w-[50px] h-[50px]" />
        </div>
      </div>
      <div className=" flex flex-row justify-evenly relative bottom-[80px] text-white font-bold">
        <h1 className="">Select Vehicle Details</h1>
        <h1 className="">Select Location</h1>
        <h1 className="">Select Service Provider</h1>
        <h1 className=" relative right-4">Select Package</h1>
        <h1 className="">Book Appointment</h1>
        <h1 className="">Avail The Service</h1>
      </div>
    </>
  );
};

export default HowItWork;
