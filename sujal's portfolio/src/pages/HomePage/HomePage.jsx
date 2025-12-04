import Navbar from "../../components/Navbar/Navbar.jsx";
import Hero from "../../components/Hero/Hero.jsx";
import Logos from "../../components/Logos/Logos.jsx";
import About from "../../components/About/About.jsx";
import Blog from "../../components/Blog/Blog.jsx";

const HomePage = () => {
  return (
    <>
      <main>
        <Navbar />
        <Hero />
        <Logos />
        <About />
        {/* <Blog /> */}
      </main>
    </>
  );
};

export default HomePage;
