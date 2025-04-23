// import Navbar from "./Navbar";
import Hero from "./Hero";
import Services from "./Services";
import Team from "./Team";
import Testimonial from "./Testimonial";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <div className="bg-[url('hero-bg.svg')] bg-cover bg-center">
        {/* <Navbar /> */}
        <Hero />
      </div>
      <Services />
      <Testimonial />
      <Team />
      <Contact />
    </>
  );
};

export default Home;
