import Navbar from "../../components/Navbar/Navbar.jsx";
import Hero from "../../components/Hero/Hero.jsx";
import Logos from "../../components/Logos/Logos.jsx";
import About from "../../components/About/About.jsx";

const HomePage = () => {
  return (
    <>
      <main>
        <Navbar />
        <Hero />
        <Logos />
        <About />
      </main>
    </>
  );
};

export default HomePage;
