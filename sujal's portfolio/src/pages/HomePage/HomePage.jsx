import Navbar from "../../components/Navbar/Navbar.jsx";
import Hero from "../../components/Hero/Hero.jsx";
import Logos from "../../components/Logos/Logos.jsx";
import About from "../../components/About/About.jsx";
import Blog from "../../components/Blog/Blog.jsx";
import Contact from "../../components/Contact/Contact.jsx";
import Testimonial from "../../components/Testimonials/Testimonials.jsx";
import Projects from "../../components/Projects/Projects.jsx";
import Services from "../../components/Services/Services.jsx";
import Explore from "../../components/Explore/Explore.jsx";
import Footer from "../../components/Footer/Footer.jsx";

const HomePage = () => {
  return (
    <>
      <main>
        <Navbar />
        <Hero />
        <Logos />
        <About />
        <Services />
        <Projects />
        {/* <Testimonial /> */}
        <Blog />
        <Contact />
        <Explore />
        <Footer />
      </main>
    </>
  );
};

export default HomePage;
