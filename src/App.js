import SectionOne from "./components/fullscreen/SectionOne";
import LazyShow from "./components/helper/LazyShow";
import SectionTwo from "./components/fullscreen/SectionTwo";
import SectionThree from "./components/fullscreen/SectionThree";
import SectionFour from "./components/fullscreen/SectionFour";
import SectionFive from "./components/fullscreen/SectionFive";
import Footer from "./components/fullscreen/Footer";

export default function App() {
  return (
    <div className="overflow-y-scroll snap-y snap-mandatory h-screen">
      <LazyShow>
        <SectionOne />
      </LazyShow>
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <Footer />
    </div>
  );
}
