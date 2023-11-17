import React from "react";
import useResponsiveSize from "../../hooks/useResponsiveSize";
import MainHero from "../MainHero";
import Canvas from "../animations/Canvas";

const SectionOne = () => {
  const { height } = useResponsiveSize();
  return (
    <div className="bg-gray-200 z-10" id="section1">
      <div className="h-screen flex flex-col justify-between items-end z-10">
        {height > 600 && <div></div>}
        <MainHero />
        <Canvas />
      </div>
    </div>
  );
};

export default SectionOne;
