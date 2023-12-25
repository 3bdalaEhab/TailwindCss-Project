export default function GetStarted() {
  return (
    <>
      <section className="container md:px-8 z-20 relative  bottom-[-120px]">
        <div className="mt-48  pb-10 w-[80%] mx-auto shadow-md shadow-black bg-[#232a38]  p-5 rounded-md  dark:shadow-cyan-400 dark:text-black dark:bg-slate-100 dark:border-t text-white text-center">
          <h3 className="text-3xl my-3 font-bold">Get early access today</h3>
          <p className="tracking-wide my-5 ">
            Amet consectetur adipisicing elit. Magnam mollitia, architecto
            itaque doloribus ea quibusdam ut possimus quidem molestiae aut.
          </p>
          <form className="flex flex-wrap  justify-center gap-3 text-black">
            <input
              placeholder="email@example.com"
              className=" dark:bg-slate-200 md:w-[60%] w-full outline-[#77dae6]  rounded-full p-[10px] "
              type="text"
            />
            <button className="btn  md:text-[1rem] text-sm   ">
              Get Started For Free
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
