import heroImage from "../assets/images/hero.webp"
import arrowIcons from "../assets/icons/Arrow.webp"
export default function Hero() {
  return (
    <section>
      <div className="container pt-10 md:pt-0 px-5 mx-auto bg-[#C1DCDC] rounded-xl flex justify-center lg:justify-between items-center flex-wrap gap-7 md:gap-0">
        <div className="col flex flex-col gap-7">
          <h1 className="text-4xl md:text-6xl font-bold">
            Buy your <br /> dream plants
          </h1>
          <div className="statistics flex gap-7">
            <div className="col">
              <p className="font-semibold text-3xl">50+</p>
              <span>Plant Species</span>
            </div>
            <span className="border-black border-r"></span>
            <div className="col">
              <p className="font-semibold text-3xl">100+</p>
              <span>Customers</span>
            </div>
          </div>
            <div className="search border bg-white flex justify-between items-center p-2 rounded-md gap-4">
              <input className="border-none outline-none" type="text" name="search" id="search" placeholder="What are you looking for?" />
              <i className="fa-solid fa-magnifying-glass bg-[#C1DCDC] rounded-md p-2"></i>
            </div>
        </div>
        <div className="col relative">
          <img className="absolute top-0 right-0" src= {arrowIcons} alt="Arrow" />
          <img src= {heroImage} alt="hero" />
        </div>
      </div>
    </section>
  );
}
