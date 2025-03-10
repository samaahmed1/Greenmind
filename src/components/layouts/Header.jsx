import { useState } from "react";
import { Link } from "react-router";
export default function Header() {
  const [openNav, setOpenNav] = useState(false);
  function toggleNav() {
    setOpenNav(!openNav);
  }
  return (
    <header className=" text-black py-5 sticky top-0 bg-white z-10">
      <div className="container px-5 mx-auto flex items-center justify-between gap-0 md:gap-10">
        <div className="logo text-2xl font-semibold font-sans">
          <Link to={"/"}>GREENMIND</Link>
        </div>
        <i onClick={toggleNav} className="fa-solid fa-bars text-2xl text-black block md:hidden cursor-pointer"></i>
        <nav
          className={`absolute top-16 left-0 md:static mx-auto flex gap-4 md:flex flex-col md:flex-row justify-center md:justify-between md:items-center w-full p-5 rounded-xl bg-white border-2 border-[#C1DCDC] md:border-none md:p-0 ${
            openNav ? "block" : "hidden"
          }`}
        >
          <ul className="flex gap-4 flex-col md:flex-row text-center">
            <li>
              <Link
                className="font-semibold"
                onClick={() => {
                  setOpenNav(false);
                }}
                to={"/"}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="text-gray-500"
                onClick={() => {
                  setOpenNav(false);
                }}
                to={"/"}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                className="text-gray-500"
                onClick={() => {
                  setOpenNav(false);
                }}
                to={"/"}
              >
                Contacts
              </Link>
            </li>
          </ul>
          <div className="nav-icon flex items-center justify-center gap-5">
            <div className="cart flex gap-5">
              <i className="fa-solid fa-cart-shopping"></i>
              <span className="border-black border-r"></span>
            </div>
            <i className="fa-solid fa-user"></i>
          </div>
        </nav>
      </div>
    </header>
  );
}
