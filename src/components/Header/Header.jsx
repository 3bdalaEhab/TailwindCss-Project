import logo from "../../assets/logo.svg";
import MyPhoto from "../../assets/Abdala.png";
import { Disclosure, Menu } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useRef } from "react";

const navigation = [
  { name: "Features", href: "#fo", current: true },
  { name: "Team", href: "team", current: false },
  { name: "Signin", href: "signin", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header({ modeNow, mode }) {
  let headerRef = useRef();
  useEffect(() => {



    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        if(mode){
          headerRef.current.style.background = "#181e2a";
          headerRef.current.style.boxShadow = "1px 1px 7px  rgb(4,8,9,9)";
          headerRef.current.style.padding = "20px 0";
        }else{
          headerRef.current.style.background = "#fff";
          headerRef.current.style.boxShadow = "1px 1px 7px  rgb(4,8,9,9)";
          headerRef.current.style.padding = "20px 0";
        }
      
      } else {
        if(mode){
          headerRef.current.style.background = "#1f2937";
          headerRef.current.style.boxShadow = "none";
        }else{
          headerRef.current.style.background = "#f1f5f9";
          headerRef.current.style.boxShadow = "none";
        }
     
      }
    });
  }, [mode]);

  return (
    <header
      ref={headerRef}
      className={`pt-10 fixed top-0 w-full duration-100 transition-all z-30 ` }

    >
      <Disclosure as="nav">
        {({ open }) => (
          <>
            <div className="container">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <img className={"h-8 w-auto  logo "} src={logo} alt="Your Company" />
                  </div>
                  <div className="hidden   sm:ml-6 sm:block">
                    <div className="  flex space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? " text-white  "
                              : "text-gray-300 hover:bg-gray-800  hover:text-white",
                            "rounded-md px-3 py-2  font-medium text-lg  dark:text-black"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <button
                    onClick={() => {
                      modeNow();
                      if(!mode){

                        headerRef.current.style.background = "#1f2937";
                      }else{
                        headerRef.current.style.background = "#f1f5f9";
                        
                      }
                    
                    }}
                    type="button"
                    className="relative w-8 h-8  border-cyan-300 overflow-hidden rounded-full bg-white dark:bg-gray-700 p-1 text-gray-400  "
                  >
                      {!mode?<i className="fa-solid fa-moon "></i>:<i className="text-yellow-300   fa-solid fa-sun"></i>}

                  </button>



                  {/* Profile dropdown */}
                  <Menu as="div" className="relative md:block  hidden ml-3">
                    <div>
                      <Menu.Button className="relative flex rounded-full border-cyan-300 border-2 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-500">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-12 w-12 rounded-full"
                          src={MyPhoto}
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                  </Menu>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </header>
  );
}
