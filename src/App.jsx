import "react";
import "./App.css";
import { Routes, Route } from "react-router";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ServicesPage from "./Pages/ServicesPage";
import UseCasePage from "./Pages/UseCasePage";
import PricingPage from "./Pages/PricingPage";
import BlogPage from "./Pages/BlogPage";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/usecase" element={<UseCasePage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </>
  );
}

export default App;
