import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Partners from "./components/partners";
import WhyChooseUsSection from "./components/whyChooseUs";
import Services from "./components/services";
import CustomersSection from "./components/customers";
import EndSection from "./components/endsection";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <div className="">
        <Navbar />
        <Hero />
        <Partners />
        <WhyChooseUsSection />
        <Services />
        <CustomersSection />
        <EndSection />
        <Footer />
      </div>
    </>
  );
}

export default App;
