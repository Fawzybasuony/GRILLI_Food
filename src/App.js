import React, { useState } from "react";

import Footer from "./components/footer/Footer";
import Headar from "./components/headar/Headar";
import Main from "./components/Slider/Main";
import Service from "./components/service/Service";
import About from "./components/about/About";
import Special from "./components/special_dish/Special";
import Menu from "./components/menu/Menu";
import Sectiontesti from "./components/section_testi/Sectiontesti";
import Reservation from "./components/reservation/Reservation";
import Features from "./components/features/Features";
import Eventt from "./components/section_event/Eventt";

function App() {
  const [showload, setshowload] = useState(true);

  setTimeout(() => {
    setshowload(false);
  }, 2000);

  return (
    <>
      {showload && (
        <div className="preload" data-preaload>
          <div className="circle"></div>
          <p className="text">Amazing Food</p>
        </div>
      )}

      <Headar />
      <Main />
      <Service />
      <About />
      <Special />
      <Menu />
      <Sectiontesti />
      <Reservation />
      <Features />
      <Eventt />
      <Footer />
    </>
  );
}

export default App;
