import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Partners from "./components/partners";
import WhyChooseUsSection from "./components/whyChooseUs";
import Services from "./components/services";
import CustomersSection from "./components/customers";
import EndSection from "./components/endsection";
import Footer from "./components/footer";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

// change this variable to refelt the languar in complete website.   TRUE = Spanish, FALSE = english
const spanish = false;

function App() {
  return (
    <>
      <Navbar isSpanish={spanish} />
      <Hero isSpanish={spanish} />
      <Partners isSpanish={spanish} />
      <CustomersSection isSpanish={spanish} />
      <Services isSpanish={spanish} />
      <EndSection isSpanish={spanish} />
      <Footer isSpanish={spanish} />
    </>
  );
}

export default App;
