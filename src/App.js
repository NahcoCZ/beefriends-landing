import SectionOne from "./components/fullscreen/SectionOne";
import LazyShow from "./components/helper/LazyShow";
import SectionFour from "./components/fullscreen/SectionFour";
import SectionTwo from "./components/fullscreen/SectionTwo";

export default function App() {
  return (
    <div className="overflow-y-scroll snap-y snap-mandatory h-screen">
      <LazyShow>
        <SectionOne />
      </LazyShow>
      <LazyShow>
        <SectionTwo />
      </LazyShow>
      <LazyShow>
        <SectionFour />
      </LazyShow>
    </div>
  );
}
