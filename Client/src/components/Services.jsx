// import general from "../assets/General service check-up.jpg";
// import oil from "../assets/Oil change.jpg";
// import wash from "../assets/Water wash.jpg";
// import serviceIcon from "../assets/customer-support.png";
// import oiIcon from "../assets/lubrication.png";div
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="h-[68vh]">
      <h1 className=" text-black text-4xl font-bold flex flex-col text-center top-1 relative ">
        Services
      </h1>
      <div className="flex flex-row h-[13.8cm]">
        <div className=" w-[50%]">
          <p className=" relative top-12 flex">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
            deserunt totam ipsum sequi esse perspiciatis sed reprehenderit
            suscipit aperiam accusamus, amet est, consectetur quam. Molestiae
            sed deserunt praesentium aspernatur corporis ea? Aperiam nulla,
            magni et corrupti ipsam laudantium aliquam. Quisquam voluptas nam in
            architecto magni corporis, asperiores accusamus. Inventore tempora,
            eum, exercitationem recusandae eos, magni possimus quae provident
            vero minus quis. Sequi quod voluptates, iste nostrum beatae minus
            sunt similique illum amet eum accusantium ipsam ullam minima ea
            atque repellendus quidem. Ea temporibus nam perspiciatis repellendus
            id? Itaque deserunt asperiores nostrum natus odio ullam in magnam,
            cumque obcaecati? Voluptatem corporis labore minima. Maxime
            repudiandae distinctio quos deleniti. A quia, rem reprehenderit
            ipsum consectetur in non quo, adipisci molestiae excepturi aperiam!
          </p>
        </div>
        <div className=" w-[50%]">
          <p className=" relative top-12 flex">
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
