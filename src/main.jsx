import "./index.css";
import App from "./App.jsx";
import { createRoot } from "react-dom/client";
import Footer from "./components/layouts/Footer.jsx";
import Header from "./components/layouts/Header.jsx";
import PlantsGallery from "./pages/PlantsGallery.jsx";
import PlantsDetails from "./pages/PlantsDetails.jsx";
import { StrictMode, useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LoadingSpinner from "./pages/LoadingSpinner.jsx";
import ScrollToTopButton from "./components/ScrollToTop.jsx";
import { BrowserRouter, Route, Routes, useLocation } from "react-router";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
              <App />
            </motion.div>
          }
        />
        <Route
          path="/PlantsGallery"
          element={
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
              <PlantsGallery />
            </motion.div>
          }
        />
        <Route
          path="/Plant/:id"
          element={
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
              <PlantsDetails />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

const Root = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <StrictMode>
      <BrowserRouter>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <>
            <Header />
            <AnimatedRoutes />
            <ScrollToTopButton />
            <Footer />
          </>
        )}
      </BrowserRouter>
    </StrictMode>
  );
};

createRoot(document.getElementById("root")).render(<Root />);
