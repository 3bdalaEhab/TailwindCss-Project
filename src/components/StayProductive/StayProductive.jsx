import img from "../../assets/illustration-stay-productive.png";
import right from "../../assets/icon-arrow.svg";
export default function StayProductive() {
  return (
    <>
      <section className="  dark:bg-slate-100 ">
        <div className="container pb-10 ">
          <div className="mt-40   lg:flex justify-between items-center">
            <div className="image mx-auto lg:w-[45%] w-[80%]">
              <img className="w-full pt-10" src={img} alt="" />
            </div>
            <div className="info mx-auto lg:w-[40%] tracking-wide w-[80%] mt-10 lg:text-start text-center  dark:text-black text-white">
              <h3 className="text-4xl mb-4">
                Stay productive,
                <br />
                wherever you are
              </h3>
              <p className="leading-7 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                accusantium voluptatum, ex neque nostrum doloribus quos deleniti
                quasi molestiae tempora quidem iusto sunt architecto eaque dolor
                vero consequuntur harum enim!
              </p>
              <br />
              <p className="leading-7 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                accusantium voluptatum, ex neque nostrum doloribus quos deleniti
                quasi molestiae tempora quidem iusto sunt architecto eaque dolor
                vero consequuntur harum enim!
              </p>
              <a className="flex border-cyan-200 mx-auto lg:mx-0  pb-2 border-b-2 w-fit duration-200 transition-colors hover:text-[#42b0d1]  mt-6 text-cyan-300 text-xl" href="#">
                <p> See how Fylo works</p>
                <img src={right} alt=""  className="ms-3 w-6 animate-moveRight"/>
                
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
