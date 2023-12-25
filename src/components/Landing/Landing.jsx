import landing from "../../assets/illustration-intro.png"
import background from "../../assets/bg-curvy-desktop.svg"
export default function Landing() {
  return <>
  <section className=" relative  bg-gray-800   z-20  dark:bg-slate-100">
    <div className="container px-5">
  <div  className='pt-48 text-center'>
<div className=" w-[80%] sm:w-[70%] md:w-[60%] lg:w-[40%] mx-auto">
  <img className="mx-auto w-[100%]" src={landing} alt="Landing" />
</div>
<div className=" text-white  dark:text-black mx-auto mt-10">
    
    <h2 className=" text-[22px] md:text-[40px] font-semibold my-3">All your files in one secure location,<br/> accessible anywhere.</h2>
    <p className="text-lg max-w-[90%]  px-[20px]  md:w-[600px] m-auto" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur neque illum officiis repellat quas voluptatum laudantium voluptates vel atque dolorum voluptatibus, eaque, quae porro quis?</p>
    
</div>
<button className="btn mt-8">Get Started</button>
  </div>  
    </div>
    <div className="w-full h-[220px]">
      <img className=" w-full dark:opacity-0 h-full " src={background} alt="" />
    </div>
  </section>

  </>
}
