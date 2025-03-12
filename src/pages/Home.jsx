import Hero from "../components/Hero";
import { motion } from "framer-motion";
import AboutUs from "../components/AboutUs";
import Categories from "../components/Categories";
import BestSelling from "../components/BestSelling";
import { useInView } from "react-intersection-observer";
import CustomerReviews from "../components/CustomerReviews";

const SectionWrapper = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 70 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
      {children}
    </motion.div>
  );
};

export default function Home() {
  return (
    <>
      <SectionWrapper>
        <Hero />
      </SectionWrapper>

      <SectionWrapper>
        <BestSelling />
      </SectionWrapper>

      <SectionWrapper>
        <AboutUs />
      </SectionWrapper>

      <SectionWrapper>
        <Categories />
      </SectionWrapper>

      <SectionWrapper>
        <CustomerReviews />
      </SectionWrapper>
    </>
  );
}
