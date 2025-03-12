import { useState, useEffect } from "react";
import { Link, useParams } from "react-router";
export default function PlantsDetails() {
  const { id } = useParams();
  const [plant, setPlant] = useState({});

  async function getPlant() {
    try {
      const response = await fetch("/data/data.json");
      if (response.status === 200) {
        const data = await response.json();
        const foundPlant = data.plants.find((p) => p.id === id);
        setPlant(foundPlant || {});
      }
    } catch (error) {
      console.error("Error fetching plants data:", error);
    }
  }

  useEffect(() => {
    getPlant();
  }, []);

  return (
    <section className="py-20">
      <div className="container px-5 mx-auto flex flex-col justify-center items-center">
        <div className="flex-grow lg:flex-grow-0 w-auto md:w-96 bg-[#C1DCDC] rounded-xl p-5 relative text-center flex flex-col gap-3" key={plant.id}>
          <img className="w-44 h-44 mx-auto" src={plant.photo} alt={plant.title} />
          <span className="font-bold text-xl">{plant.title}</span>
          <p className="font-semibold text-gray-600">{plant.description}</p>
        </div>
        <Link className="font-semibold mt-7 border-2 border-[#C1DCDC] text-[#5b9797] bg-white rounded-md p-2 w-36 mx-auto text-lg flex items-center justify-center gap-2" to={"/PlantsGallery"}>
          <i className="fa-solid fa-arrow-left mt-1"></i>
          Back
        </Link>
      </div>
    </section>
  );
}
