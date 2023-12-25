import { useState } from "react";
import logo from "../../assets/logo.svg";

export default function Footer() {
  const [links, setLinks] = useState([
    {name:"About Us",url:""},
    {name:"Contact Us",url:""},
    {name:"Jobs",url:""},
    {name:"Terms",url:""},
    {name:"Privacy",url:""},
    {name:"Press",url:""},
  ])
 
  return (
    <>
      <div  className="  dark:text-black dark:bg-slate-100 bg-slate-800">
        <div className=" container pt-40 pb-10 dark:text-black text-white ">
          <img className="mb-10 ml-[10px] px-10 logo" src={logo} alt="Logo" />

          <div className="   items-center gap-y-10  gap-5 grid  justify-center  lg:grid-cols-4 md:grid-cols-2  px-8 grid-cols-1">


            <div className="location w-[80%]     ">
              <div className="md:flex  mx-auto gap-4  ">
                <i className="fa-solid fa-location-dot"></i>
                <p className="">
                  Ipsum natus, repellat Lorem ipsum dolor sit amet. labore
                  placeat maquis explicabo.
                </p>
              </div>
            </div>

            <div className="cullMy  lg:ms-auto    ">
              <div className="flex my-2  gap-2">
                <i className="fa-solid fa-phone"></i> <p>+201018823693</p>
              </div>
              <div className="flex my-2 gap-2 ">
                <i className="fa-brands fa-whatsapp"></i>
                <p>+201204262987</p>
              </div>
              <div className="flex my-2 gap-2 ">
                <i className="fa-solid fa-envelope"></i>
                <p>abdalaehab3@gmail.com</p>
              </div>
            </div>

            <div className="titles    lg:ms-auto  flex gap-x-9">
              <div className=" grid grid-cols-1 sm:grid-cols-2 gap-3 md:text-center">
              {links.map((link, index) => (
  <a  className="hover:text-cyan-300  hover:scale-105 duration-200" href={link.url} key={index}>{link.name}</a>
))}


              </div>
            </div>

            <div className="icons      lg:ms-auto  flex gap-3">
              <span className="w-10 h-10 rounded-full cursor-pointer  dark:border-black hover:border-[#77dae6] hover:scale-110 transition-all duration-200 hover:text-cyan-300 flex justify-center items-center border">
                <i className="fa-brands text-[24px] fa-facebook"></i>
              </span>
              <span className="w-10 h-10 rounded-full cursor-pointer  dark:border-black hover:border-[#77dae6] hover:scale-110 transition-all duration-200 hover:text-cyan-300 flex justify-center items-center border">
                <i className="fa-brands text-[24px] fa-linkedin"></i>
              </span>
              <span className="w-10 h-10 rounded-full cursor-pointer  dark:border-black hover:border-[#77dae6] hover:scale-110 transition-all duration-200 hover:text-cyan-300 flex justify-center items-center border">
                <i className="fa-brands text-[24px] fa-twitter"></i>
              </span>
              <span className="w-10 h-10 rounded-full cursor-pointer  dark:border-black hover:border-[#77dae6] hover:scale-110 transition-all duration-200 hover:text-cyan-300 flex justify-center items-center border">
                <i className="fa-brands text-[24px] fa-instagram"></i>
              </span>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
