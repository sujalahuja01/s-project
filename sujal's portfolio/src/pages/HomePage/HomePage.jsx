import Navbar from "../../components/Navbar/Navbar.jsx";
import Hero from "../../components/Hero/Hero.jsx";
import Logos from "../../components/Logos/Logos.jsx";
import About from "../../components/About/About.jsx";
import Blog from "../../components/Blog/Blog.jsx";
import Contact from "../../components/Contact/Contact.jsx";
import Testimonial from "../../components/Testimonials/Testimonials.jsx";

const HomePage = () => {
  return (
    <>
      <main>
        <Navbar />
        <Hero />
        <Logos />
        <About />
        <Blog />
        {/* <Contact /> */}
        <Testimonial />
      </main>
    </>
  );
};

export default HomePage;
