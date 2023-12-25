import cart1 from "../../assets/icon-access-anywhere.svg";
import cart2 from "../../assets/icon-any-file.svg";
import cart4 from "../../assets/icon-security.svg";
import cart3 from "../../assets/icon-collaboration.svg";
import { useState } from "react";
export default function Features() {
  const [carts, setCarts] = useState([
    { desc:"Access your files anytime, anywhere with our cloud storage service. Secure, convenient, and always within reach." ,img: cart1, title: "Acces your files,anywhere" },
    { desc:"Effortlessly store a variety of file types securely in our versatile platform From documents to multimedia, our storage solution accommodates all your file needs." ,img: cart2, title: "Store any type of file" },
    { desc:"Boost productivity with seamless real-time collaboration on documents, spreadsheets, and presentations. Multiple users can edit simultaneously, fostering efficient teamwork." ,img: cart3, title: "Real-time collaboration" },
    { desc:"Our platform prioritizes your data security with advanced encryption, ensuring protection against unauthorized access for a secure storage experience." ,img: cart4, title: "Security you can trust" },
  ]);
  return (
    <>
      <section className="features pt-32  ">
        <div className="container">
          <div className="grid  gap-y-28  grid-cols-1 md:grid-cols-2">
            {carts.map((cart, indx) => (
              <div
                key={indx}
                className="w-9/12  lg:w-8/12   dark:p-4 dark:rounded-md dark:shadow-md dark:shadow-cyan-300  mx-auto text-white  dark:text-black cart text-center "
              >
                <img
                  className=" mb-6 mx-auto"
                  src={cart.img}
                  alt={cart.title}
                />
                <h3 className="text-3xl">{cart.title}</h3>
                <p className="text-sm mt-2 leading-6  dark:text-black text-stone-200">
                 {cart.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
