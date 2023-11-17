import DownloadBadges from "../DownloadBadges";
import Canvas from "../animations/Canvas";

function MobileOne() {
  return (
    <div id="mobile1" className="h-screen snap-start bg-gray-200">
      <div className="h-screen flex flex-col justify-between z-10">
        <div className="h-screen pt-32 flex items-center">
          <div className="w-full">
            <div className="flex justify-center items-end">
              <img src="./assets/logo.png" alt="logo" className="h-[20vw]" />
              <p className="text-center font-extrabold text-5xl text-yellow-500">
                BeeFriends
              </p>
            </div>
            <p className="mt-3 font-semibold text-base mx-4  text-center">
              A brand new application for{" "}
              <span className="text-warning">Bina Nusantara University</span>{" "}
              Students to forge relationships
            </p>
            <div className="divider divider-accent px-4"></div>
            <div className="w-full flex justify-center">
              <DownloadBadges />
            </div>
            <div className="divider divider-primary text-gray-500 mx-8">OR</div>
            <p className="text-center font-semibold">
              Scroll down to learn more
            </p>
          </div>
        </div>
        <Canvas />
      </div>
    </div>
  );
}

export default MobileOne;
