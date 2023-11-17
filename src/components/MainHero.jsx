import React from "react";
import DownloadBadges from "./DownloadBadges";

function MainHero() {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("section2");
    if (nextSection) {
      nextSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  return (
    <main className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10 pt-16`}>
      <div className="flex">
        <div className="sm:text-center lg:text-left">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <div className="flex items-end">
              <img
                src="./assets/logo.png"
                alt="logo"
                className="h-[7rem] inline mr-[1rem]"
              />
              <span className="block xl:inline text-yellow-500">
                BeeFriends
              </span>
            </div>
          </h1>
          <p className="mt-3 font-semibold text-base sm:mt-5 sm:text-lg  sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            A brand new application for{" "}
            <span className="text-warning">Bina Nusantara University</span>{" "}
            Students to forge relationships
          </p>
        </div>
        <div className="flex-col justify-center items-center mt-4 ml-10">
          <DownloadBadges />
          <div className="divider text-gray-500">OR</div>
          <div className="w-full flex justify-center">
            <button
              onClick={scrollToNextSection}
              className="btn btn-primary text-lg m-1"
            >
              Download Now
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainHero;
