import { useEffect, useState } from "react";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 72);
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`flex  justify-center 2xl:text-2xl sm:text-xl text-lg font-medium 2xl:mt-20 mt-10 animate-slideInTop opacity-0 transition-all ease-in-out duration-100 sticky top-0 z-30 ${
          isSticky
            ? "bg-primary border-b-4 border-thirdary text-thirdary p-2 "
            : ""
        }`}
      >
        <ul className="flex  sm:gap-48 gap-5 ">
          <li>
            <a
              href="#about"
              className="transition-all ease-in-out duration-200 cursor-pointer hover:text-secondary "
            >
              About me
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="transition-all ease-in-out duration-200 cursor-pointer hover:text-secondary "
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="transition-all ease-in-out duration-200 cursor-pointer  hover:text-secondary "
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className="w-1/2 m-auto h-1 rounded mt-2 animate-pulse animate-slideInRight transition-all ease-in-out duration-100 bg-gradient-to-r from-primary  via-green-900 to-primary ${getGradient("></div>
    </>
  );
};

export default Navbar;
