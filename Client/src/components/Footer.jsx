import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter, AiFillYoutube } from "react-icons/ai";
import { BiLogoPinterestAlt } from "react-icons/bi";

function Footer() {
  const iconsTab = [
    { icon: <FaFacebookF /> },
    { icon: <AiOutlineTwitter /> },
    { icon: <AiFillYoutube /> },
    { icon: <BiLogoPinterestAlt /> },
  ];
  return (
    <>
      <footer className="bg-black ]">
        <div className="container mx-auto  py-[10rem]">
          <div className="flex justify-between flex-col md:flex-row  items-center md:items-start  md:gap-[5rem] text-left">
            <div className="flex flex-col w-1/2 md:p-0 py-4 gap-8">
              {/* <img
                src={"https://i.imgur.com/520zDfd.png"}
                alt="footer_logo"
                className="w-[18rem]"
              /> */}
              <p className="text-[15px] font-medium text-[#646464]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                sed, iure explicabo voluptate temporibus animi nobis enim
                repellendus magni, deserunt eligendi in eveniet nulla, tempore
                blanditiis laborum quos assumenda ipsa accusamus illo molestias
                aliquid quod nesciunt? Quos sequi iusto perferendis culpa
                consequuntur mollitia eum, optio, doloribus deserunt maiores
                ipsa quo.
              </p>
              <div className="flex gap-7 text-[18px] text-[#646464] justify-center md:justify-start">
                {iconsTab.map(({ icon }, index) => {
                  return (
                    <div
                      key={index}
                      className="text-2xl bg-[#efefef] p-2 rounded-full hover:bg-orange-600 hover:text-white"
                      style={{ transition: "all 0.3s" }}>
                      {icon}
                    </div>
                  );
                })}
              </div>
              <p className="text-[16px] font-medium text-[#646464]">
                Privacy Policy | © {new Date().getFullYear()}<br />{" "}
                Design by{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.radiustheme.com/">
                  Dhanushwaran
                </a>
              </p>
            </div>

            <div className="flex flex-col gap-8 relative">
              <p className="text-[22px] font-bold footer-main text-orange-500">
                Our Services
              </p>

              <span className="top-[33px] absolute w-[7rem] h-[4px] bg-orange-600"></span>

              <p className="text-[16px] hover:text-orange-500 cursor-pointer text-[#646464] font-medium hover:font-bold">
                General Service
              </p>
              <p className="text-[16px] hover:text-orange-500 cursor-pointer text-[#646464] font-medium hover:font-bold">
                Oil Change
              </p>
              <p className="text-[16px] hover:text-orange-500 cursor-pointer text-[#646464] font-medium hover:font-bold">
                Water Wash
              </p>
            </div>

            {/* right div */}
            <div className="flex flex-col gap-8 relative">
              <p className="text-[22px] font-bold footer-main text-orange-500">
                Working Hours
              </p>

              <span className="top-[33px] absolute w-[7rem] h-[4px] bg-orange-600"></span>

              <p className="text-[16px]  text-[#646464] font-bold">
                Monday - Friday:
              </p>
              <p className="text-[16px] text-[#646464] font-medium">
                7:00am - 21:00pm
              </p>
              <p className="text-[16px] text-[#646464] font-bold">Saturday:</p>
              <p className="text-[16px] text-[#646464] font-medium">
                7:00am - 19:00pm
              </p>
              <p className="text-[16px] text-[#646464] font-bold ">
                Sunday - Closed
              </p>
            </div>

            {/* middle div */}
            <span></span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
