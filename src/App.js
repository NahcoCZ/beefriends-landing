import SectionOne from "./components/fullscreen/SectionOne";
import LazyShow from "./components/helper/LazyShow";
import SectionTwo from "./components/fullscreen/SectionTwo";
import SectionThree from "./components/fullscreen/SectionThree";
import SectionFour from "./components/fullscreen/SectionFour";
import SectionFive from "./components/fullscreen/SectionFive";
import Footer from "./components/fullscreen/Footer";
import { useEffect, useState } from "react";
import MobileOne from "./components/mobile/MobileOne";
import MobileTwo from "./components/mobile/MobileTwo";
import MobileThree from "./components/mobile/MobileThree";

export default function App() {
  const [windowSize, setWindowSize] = useState(window.outerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.outerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
  });

  return (
    <div className="overflow-y-scroll snap-y snap-mandatory h-screen">
      {windowSize <= 768 ? (
        <>
          <MobileOne />
          <MobileTwo />
          <MobileThree />
        </>
      ) : (
        <>
          <LazyShow>
            <SectionOne />
          </LazyShow>
          <SectionTwo />
          <SectionThree />
          <SectionFour />
          <SectionFive />
          <Footer />
        </>
      )}
    </div>
  );
}
