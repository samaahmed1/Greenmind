import "./index.css";
import App from "./App.jsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Footer from "./components/layouts/Footer.jsx";
import Header from "./components/layouts/Header.jsx";
import PlantsGallery from "./pages/PlantsGallery.jsx";
import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import ScrollToTopButton from "./components/ScrollToTop.jsx";
import { AnimatePresence, motion } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation(); 

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }} 
            >
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
      </Routes>
    </AnimatePresence>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <AnimatedRoutes />
      <ScrollToTopButton />
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
