import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Partners from "./components/partners";
import WhyChooseUsSection from "./components/whyChooseUs";
function App() {
  return (
    <>
      <div className="relative">
        <Navbar />
        <Hero />
        <Partners />
        <WhyChooseUsSection />
      </div>
    </>
  );
}

export default App;
