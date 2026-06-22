import {
  Fragment
} from "react";

import Header from "./components/Header";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Services from "./sections/Services";
import AboutMe from "./sections/AboutMe";
import MyOffer from "./sections/MyOffer";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import References from "./sections/References";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Hero />
      <Projects />
      <Services />
      <References />
      <AboutMe />
      <MyOffer />
      <Contact />
      <Footer />
    </Fragment>
  );
};

export default App;