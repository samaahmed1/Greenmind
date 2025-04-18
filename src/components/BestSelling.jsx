import frameOne from "../assets/images/Frame-1.webp";
import frameTwo from "../assets/images/Frame-2.webp";
import frameThtee from "../assets/images/Frame-3.webp";
export default function BestSelling() {
  return (
    <section id="best-selling" className="py-20">
      <div className="container px-5 mx-auto flex flex-wrap justify-center lg:justify-between gap-8">
        <div className="col flex flex-col gap-4">
          <h2 className="text-3xl font-bold">
            Best Selling <br /> Plants
          </h2>
          <p className="text-gray-500 font-semibold">
            Easiest way to <br /> healthy life by buying <br /> your favorite plants
          </p>
        </div>
        <div className="col flex flex-col gap-2 text-center md:text-start">
          <img src={frameOne} alt={frameOne} />
          <p className="font-medium">Natural Plants</p>
          <span className="text-gray-500 ">₱ 1,400.00</span>
        </div>
        <div className="col flex flex-col gap-2 text-center md:text-start">
          <img src={frameTwo} alt={frameTwo} />
          <p className="font-medium">Artificial Plants</p>
          <span className="text-gray-500 ">₱ 900.00</span>
        </div>
        <div className="col flex flex-col gap-2 text-center md:text-starttext-center md:text-start mx-auto xl:mx-0">
          <img src={frameThtee} alt={frameThtee} />
          <p className="font-medium">Artificial Plants</p>
          <span className="text-gray-500 ">₱ 3,500.00</span>
        </div>
      </div>
    </section>
  );
}
