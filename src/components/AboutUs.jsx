import vectorOne from "../assets/icons/Vector-1.webp";
import vectorTwo from "../assets/icons/Vector-2.webp";
import vectorThree from "../assets/icons/Vector-3.webp";
export default function AboutUs() {
  return (
    <section>
      <div className="container px-5 mx-auto flex justify-center items-center text-center flex-col gap-9">
        <div className="col flex flex-col gap-4">
          <h2 className="text-3xl font-bold">About us</h2>
          <p className="text-gray-500 font-semibold">Order now and appreciate the beauty of nature</p>
        </div>
        <div className="details flex justify-center lg:justify-between gap-7 md:gap-20 flex-wrap">
          <div className="col flex flex-col gap-3">
            <img className="mx-auto bg-[#C1DCDC] rounded-xl p-4 w-16" src={vectorOne} alt={vectorOne} />
            <span className="font-semibold">Large Assortment</span>
            <p className="text-gray-500">
              we offer many different types of products <br /> with fewer variations in each category.
            </p>
          </div>
          <div className="col flex flex-col gap-3">
            <img className="mx-auto bg-[#C1DCDC] rounded-xl p-4 w-16" src={vectorTwo} alt={vectorTwo} />
            <span className="font-semibold">Fast & Free Shipping</span>
            <p className="text-gray-500">
              4-day or less delivery time, free shipping <br /> and an expedited delivery option.
            </p>
          </div>
          <div className="col flex flex-col gap-3 mx-auto xl:mx-0">
            <img className="mx-auto bg-[#C1DCDC] rounded-xl p-4 w-16" src={vectorThree} alt={vectorThree} />
            <span className="font-semibold">24/7 Support</span>
            <p className="text-gray-500">
              answers to any business related inquiry <br /> 24/7 and in real-time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
