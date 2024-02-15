import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Partners from "./components/partners";
import WhyChooseUsSection from "./components/whyChooseUs";
import Services from "./components/services";
import CustomersSection from "./components/customers";
import EndSection from "./components/endsection";
import Footer from "./components/footer";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function App() {
  return (
    <>
      <Navbar />
      <Hero />

      <Partners />
      <CustomersSection />
      <Services />
      <EndSection />
      <Footer />
    </>
  );
}

export default App;
