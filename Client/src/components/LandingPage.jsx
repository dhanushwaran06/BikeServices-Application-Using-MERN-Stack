import landingBike from "../assets/landing_bike.png";

// import OrangeDot from "../assets/OrangeDot_bg.jpg"
const LandingPage = () => {
  return (
    <div className="bg-black h-[100vh]">
      {/* <img src={OrangeDot} alt=""  className=" absolute h-full opacity-20"/> */}
      <div className="flex flex-col absolute gap-10 text-white items-start left-[200px] top-[200px]">
        <p className=" font-bold text-lg text-orange-600">Since 1999</p>
        <h1 className=" text-5xl font-bold">TOTS TO REPAIR</h1>
      </div>
      <h1 className=" flex flex-col absolute gap-2 text-white items-start left-[180px] top-[400px]">
        <h1 className=" text-2xl font-bold text-orange-600">
          GENERAL SERVICE NOW
          <br />
          START AT
        </h1>
        <h1 className="text-8xl opacity-[0.08] font-bold text-white relative">
          999₹
        </h1>
        <h1 className=" text-white text-4xl relative font-semibold bottom-[70px] left-[80px]">
          799₹
        </h1>
      </h1>
      <div className="bg-orange-600 w-[35%] h-[91.2vh] left-[22cm] relative" />
      <div className="flex flex-row gap-[60px] relative pl-[100px] bottom-[140px]">
        <button className=" text-white bg-orange-600 w-[150px] h-[45px] hover:bg-black hover:text-orange-600 hover:border-2 hover:border-orange-600">
          SERVICES
        </button>
        <button className=" text-white bg-black border-2 w-[150px] h-[45px] hover:border-orange-600 hover:text-orange-600">
          EXPLORE
        </button>
      </div>
      <img
        className="relative bottom-[700px] w-[50%] left-[18cm] "
        src={landingBike}
        alt="Bike Image"
      />
    </div>
  );
};

export default LandingPage;
