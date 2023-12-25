import { useState } from "react";
import profile1 from "../../assets/profile-1.jpg";
import profile2 from "../../assets/profile-2.jpg";
import profile3 from "../../assets/profile-3.jpg";
import quotes from "../../assets/bg-quotes.png";
export default function Testimonials() {
  const [info, setInfo] = useState([
    {
      name: "Ahmed",
      jobTitle: "Front-End Developer",
      image: profile1,
      desc: "Lorem ipsum dolor sit amet consecteturmet consecteturmfsferge et consectetur,  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipefesum dolor sit amet. adipisicing elit. Officiis, ratione.",
    },
    {
      name: "Mohamed",
      jobTitle: "Back-End Developer",
      image: profile2,
      desc: "Lorem ipsum dolor dgwsg sit amet consecteturmet  Lorem ipsum dolor  Lorem ipsum dolor sit amet, consectetur adipisicing elit. sit amet. consecfbefdb teturmet consectetur, adipisicing elit. Officiis, ratione.",
    },
    {
      name: "Nada",
      jobTitle: "Full-Stack Developer",
      image: profile3,
      desc: "Lorem ipsum dolor sit am Lorem ipsum dolor sit amet consectetur adipisicing elit et consecteturmet dfbvsdfefg consecteturmet consecerfefef tetur, Lorem ipsum dolor sit amet.  adipisicing elit. Officiis, ratione.",
    },
  ]);

  return (
    <>
      <section>
        <div className="container relative">
            <div className="img absolute px-4 top-48">
                <img src={quotes} alt="" />
            </div>
          <div className="grid  gap-5 md:grid-cols-2 lg:grid-cols-3 grid-cols-1 px-8 pt-56">
            {info.map((clint, indx) => (
              <div
                key={indx}
                className="card z-20 p-4  dark:text-black dark:bg-slate-50 bg-[#21293c] shadow-[1px_1px_4px_#39f0fd] rounded-md text-white"
              >
                <p className="tracking-wide">{clint.desc}</p>
                <div className="desc mt-5 flex items-center">
                  <img
                    className="rounded-full w-[55px] me-5 "
                    src={clint.image}
                    alt=""
                  />
                  <div className="info">
                    <h4 className="text-cyan-300">{clint.name}</h4>
                    <h4>{clint.jobTitle}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
