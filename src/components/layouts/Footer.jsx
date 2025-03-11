import { Link } from "react-router";
export default function Footer() {
  return (
    <footer className="bg-[#C1DCDC] rounded-xl py-5">
      <div className="container px-5 mx-auto">
        <div className="flex flex-col md:flex-row justify-between text-center md:text-start">
          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold">GREENMIND</h2>
            <p className="text-sm text-gray-500">
              We help you find <br /> your dream plant
            </p>
            <div className="flex gap-7 text-lg text-gray-700 mx-auto mb-10 md:mb-0">
              <Link to={"/"}>
                <i className="fa-brands fa-facebook-f"></i>
              </Link>
              <Link to={"/"}>
                <i className="fa-brands fa-instagram"></i>
              </Link>
              <Link to={"/"}>
                <i className="fa-brands fa-twitter"></i>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold">Information</h3>
              <ul className="text-gray-500">
                <li>
                  <Link className="hover:underline" to={"/"}>
                    About
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" to={"/"}>
                    Product
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" to={"/"}>
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold">Company</h3>
              <ul className="text-gray-500">
                <li>
                  <Link className="hover:underline" to={"/"}>
                    Community
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" to={"/"}>
                    Career
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" to={"/"}>
                    Our story
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold">Contact</h3>
              <ul className="text-gray-500">
                <li>
                  <Link className="hover:underline" to={"/"}>
                    Getting Started
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" to={"/"}>
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link className="hover:underline" to={"/"}>
                    Resources
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="text-center text-sm text-gray-500 mt-10 font-semibold">&copy; 2023 All Rights Reserved Term of Use GREENMIND</p>
      </div>
    </footer>
  );
}
