import Navbar from "../../sections/Navbar/Navbar.jsx";
import Hero from "../../sections/Hero/Hero.jsx";
import Logos from "../../sections/Logos/Logos.jsx";
import About from "../../sections/About/About.jsx";
import Blog from "../../sections/Blog/Blog.jsx";
import Contact from "../../sections/Contact/Contact.jsx";
import Testimonial from "../../sections/Testimonials/Testimonials.jsx";
import Projects from "../../sections/Projects/Projects.jsx";
import Services from "../../sections/Services/Services.jsx";
import Explore from "../../sections/Explore/Explore.jsx";
import Footer from "../../sections/Footer/Footer.jsx";

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
        <Testimonial />
        <Blog />
        <Contact />
        <Explore />
        <Footer />
      </main>
    </>
  );
};

export default HomePage;
