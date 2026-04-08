import {
  Fragment
} from "react";

import Header from "./components/Header";
import Hero from "./sections/Hero";
import AboutMe from "./sections/AboutMe";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Hero />
      <AboutMe />
    </Fragment>
  );
};

export default App;