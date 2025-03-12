import { Link } from "react-router";
import { useState, useEffect } from "react";

export default function PlantsGallery() {
  const [plants, setPlants] = useState([]);

  async function getPlants() {
    try {
      const response = await fetch("/data/data.json");
      if (response.status === 200) {
        const data = await response.json();
        setPlants(data.plants);
      }
    } catch (error) {
      console.error("Error fetching plants data:", error);
    }
  }

  useEffect(() => {
    getPlants();
  }, []);

  return (
    <section className="py-20">
      <div className="container px-5 mx-auto flex flex-col justify-center items-center">
        <div className="flex justify-center items-center-center flex-wrap gap-7 md:gap-20">
          {plants.map((plant) => (
            <div className="flex-grow lg:flex-grow-0 w-auto lg:w-96 bg-[#C1DCDC] rounded-xl p-2 relative" key={plant.id}>
              <img className="w-44 h-44 mx-auto" src={plant.photo} alt={plant.title} />
              <Link to={`/plant/${plant.id}`}>
                <i className="fa-solid fa-arrow-right text-lg absolute right-2 bottom-2 bg-white p-1 rounded-md text-[#5b9797] w-9 text-center"></i>
              </Link>
            </div>
          ))}
        </div>
        <Link className="font-semibold mt-7 border-2 border-[#C1DCDC] text-[#5b9797] bg-white rounded-md p-2 w-36 mx-auto text-lg flex items-center justify-center gap-2" to={"/"}>
          <i className="fa-solid fa-arrow-left mt-1"></i>
          Back
        </Link>
      </div>
    </section>
  );
}
