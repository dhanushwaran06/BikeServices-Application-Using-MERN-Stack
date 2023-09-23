import bike1 from "../assets/about_bike1.jpg";
import bike2 from "../assets/abou_bike2.jpg";
const AboutUs = () => {
  return (
    <div className="h-[100vh] bg-white">
      <div className=" relative">
        <p className="flex justify-center text-8xl opacity-5 font-bold">
          ABOUT US
        </p>
        <p className="absolute top-9 left-[17cm] text-3xl font-semibold">
          ABOUT<span className=" text-orange-600">US</span>
        </p>
      </div>
      <div className=" flex flex-row">
        <div className="w-[50%]">
          <img
            src={bike1}
            alt=""
            className="w-[300px] relative left-4 border-orange-600 border-4 p-3"
          />
          <img
            src={bike2}
            alt=""
            className="w-[250px] left-[400px] bottom-[130px] relative  border-orange-600 border-4 p-3"
          />
        </div>
        <div className="w-[50%] flex flex-col gap-[30px] relative top-[100px]">
          <h1 className=" text-orange-600 font-semibold text-base">
            WHO WE ARE
          </h1>
          <h1 className=" text-black text-3xl font-bold">
            We provide quality with our excellent services.
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
            luctus nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus
            nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <div className="flex gap-6 justify-evenly text-orange-500 font-bold text-3xl relative top-[180px]">
            <p className=" relative right-5">20+</p>
            <p className=" relative left-4">300+</p>
            <p className=" relative left-2">120+</p>
            <p className=" relative left-1">120+</p>
          </div>
          <div className="flex gap-6 justify-evenly text-base font-medium relative top-[180px]">
            <p>YEARS EXPERIENCE</p>
            <br />
            <p>HAPPY CUSTOMERS</p>
            <p>PRODUCTS SOLD</p>
            <p>YEARS EXPERIENCE</p>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
