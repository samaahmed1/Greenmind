import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Categories from "../components/Categories";
import BestSelling from "../components/BestSelling";
import CustomerReviews from "../components/CustomerReviews";

export default function Home() {
  return (
    <>
      <Hero />
      <BestSelling />
      <AboutUs />
      <Categories />
      <CustomerReviews />
    </>
  );
}
