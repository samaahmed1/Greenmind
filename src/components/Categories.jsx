import { Link } from "react-router";
import decorOne from "../assets/images/decor-1.webp";
import decorTwo from "../assets/images/decor-2.webp";
import decorThree from "../assets/images/decor-3.webp";
export default function Categories() {
  return (
    <section className="pt-20">
      <div className="container px-5 mx-auto flex justify-center items-center text-center flex-col gap-9">
        <div className="col flex flex-col gap-4">
          <h2 className="text-3xl font-bold">Categories</h2>
          <p className="text-gray-500 font-semibold">Find what you are looking for</p>
        </div>
        <div className="col bg-[#C1DCDC] flex mx-auto justify-center lg:justify-between gap-7 lg:gap-32 flex-wrap p-10 rounded-xl">
          <div className="flex flex-col gap-3">
            <img src={decorOne} alt={decorOne} />
            <span className="font-bold text-lg">Natural Plants</span>
          </div>
          <div className="flex flex-col gap-3 mt-0 md:mt-14">
            <img src={decorTwo} alt={decorTwo} />
            <span className="font-bold text-lg">Plant Accessories</span>
            <p className="text-gray-500">
              Horem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
            </p>
            <Link className="font-semibold bg-white rounded-md p-2 w-[40%] mx-auto text-center text-lg" to={"/"}>
              More
              <i className="fa-solid fa-arrow-right ml-2 text-lg"></i>
            </Link>
          </div>
          <div className="mx-auto xl:mx-0 flex flex-col gap-3">
            <img src={decorThree} alt={decorThree} />
            <span className="font-bold text-lg">Artificial Plants</span>
          </div>
        </div>
      </div>
    </section>
  );
}
