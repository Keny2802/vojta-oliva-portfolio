import {
  Fragment
} from "react";

import Header from "./components/Header";
import Hero from "./sections/Hero";
import AboutMe from "./sections/AboutMe";
import MyOffer from "./sections/MyOffer";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Hero />
      <AboutMe />
      <MyOffer />
    </Fragment>
  );
};

export default App;