import Beehive from "../beehive";
import Phone from "../Phone";

const SectionFour = () => {
  return (
    <div id="section4">
      <Beehive />
      <div className="flex bg-gray-200 overflow-hidden">
        <div className="bg-yellow-500 h-screen w-1/2 flex">
          <div className="h-screen w-full bg-gray-200 rounded-tr-[50%] border-t-8 border-yellow-500 flex justify-center items-center">
            <Phone screenshotLink="./assets/matching.jpg" />
          </div>
        </div>
        <div className="h-screen w-1/2 bg-yellow-500 rounded-bl-[50%] flex justify-center items-center">
          <div className="text-center mb-20 text-white">
            <p className="text-5xl font-extrabold mb-6 text-accent">
              Matching System
            </p>
            <div className="divider divider-accent mx-6"></div>
            <p className="text-2xl font-bold">
              Look for new friends to hangout with or find a potential partner
              through our
              <span className="text-secondary">{" Matching"}</span> Feature
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
