import menOne from "../assets/images/men-1.webp";
import menTwo from "../assets/images/men-2.webp";
export default function CustomerReviews() {
  return (
    <section>
      <div className="container px-5 mx-auto py-20">
        <h2 className="text-2xl font-bold text-center">
          What customers say about <br /> GREEMIND?
        </h2>
        <div className="col flex justify-center gap-7 flex-wrap mt-9">
          <div className="customer-reviews bg-[#C1DCDC] w-[100%] lg:w-[45%] py-2 px-3 rounded-xl">
            <p className="font-semibold">
              Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos.
            </p>
            <div className="flex items-center justify-between">
              <div>
                <img className="w-24 mt-4" src={menOne} alt="men" />
                <span className="font-bold text-sm">John Doe</span>
              </div>
              <span className="font-bold text-lg">
                <i className="text-sm mr-2 fa-solid fa-star"></i>
                4.5
              </span>
            </div>
          </div>
          <div className="customer-reviews bg-[#C1DCDC] w-[100%] lg:w-[45%] py-2 px-3 rounded-xl">
            <p className="font-semibold">
              Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos.
            </p>
            <div className="flex items-center justify-between">
              <div>
                <img className="w-24" src={menTwo} alt="men" />
                <span className="font-bold text-sm">John Doe</span>
              </div>
              <span className="font-bold text-lg">
                <i className="text-sm mr-2 fa-solid fa-star"></i>
                4.5
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
