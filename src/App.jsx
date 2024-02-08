import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Partners from "./components/partners";
function App() {
  return (
    <>
      <div className="relative">
        <Navbar />
        <Hero />
        <Partners />
      </div>
    </>
  );
}

export default App;
