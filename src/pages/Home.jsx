import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SearchFilter from "../components/SearchFilter";
import Rooms from "../components/Rooms";
import RoomDetailsModal from "../components/RoomDetailsModal";
import Amenities from "../components/Amenities";
import WhyChooseUs from "../components/WhyChooseUs";
import HowItWorks from "../components/HowItWorks";
import Locations from "../components/Locations";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";
import StayValue from "../components/StayValue";
import About from "../components/About";
import FAQ from "../components/FAQ";
import EnquiryForm from "../components/EnquiryForm";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

const INITIAL_FILTERS = { location: "", roomType: "", budget: "" };

export default function Home() {
  const [filters, setFilters] = useState(INITIAL_FILTERS);
  const [activeRoom, setActiveRoom] = useState(null);

  const handleViewLocation = (slug) => {
    setFilters((prev) => ({ ...prev, location: slug }));
    document.getElementById("rooms")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-cream-200 dark:bg-ink-900 transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <SearchFilter filters={filters} setFilters={setFilters} />
        <Rooms filters={filters} setFilters={setFilters} onViewDetails={setActiveRoom} />
        <Amenities />
        <WhyChooseUs />
        <HowItWorks />
        <Locations onViewLocation={handleViewLocation} />
        <Gallery />
        <Testimonials />
        <StayValue />
        <About />
        <FAQ />
        <EnquiryForm />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
      <RoomDetailsModal room={activeRoom} onClose={() => setActiveRoom(null)} />
    </div>
  );
}
