import { Link } from "react-router-dom";
import serviceBike from "../assets/serrviceBike.jpg"
const Services = () => {
  return (
    <div className="h-[68vh]">
      <h1 className=" text-black text-4xl font-bold flex flex-col text-center top-0 relative ">
        Services
      </h1>
      <div className="flex flex-row h-[13.8cm]">
        <div className=" w-[50%]">
          <img src={serviceBike} alt="" />
        </div>
        <div className=" w-[50%]">
          <p className=" relative top-12 flex flex-col justify-evenly">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            expedita fuga laboriosam dolores ab eos minus veritatis, sint
            corrupti dignissimos at doloribus quo sed aspernatur, quam facere
            placeat sit repudiandae eligendi iure, numquam eum possimus.
            Perspiciatis nisi consequuntur dolore voluptatum laboriosam quidem
            dolor ratione officia a. Ab animi ullam neque. Quasi labore earum,
            obcaecati officia quos a, est quo debitis minima doloribus
            cupiditate distinctio aspernatur, similique vero quia. Id,
            distinctio? Placeat, quisquam quaerat id debitis aut excepturi,
            delectus, commodi tenetur maiores laudantium iusto eaque incidunt
            numquam error impedit.
          </p>
          <button
            className=" relative top-[130px] left-[50px] cursor-pointe text-white bg-orange-600 w-[150px] h-[45px] hover:bg-black hover:text-balck hover:border-2 hover:border-orange-600"
            onClick="">
            <Link to={"/servicetype"}>Explore Services</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
