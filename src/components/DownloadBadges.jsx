import React from "react";

function DownloadBadges() {
  return (
    <div className="flex mx-2 items-center">
      <a
        href="https://apps.apple.com/us/app/your-app-name/id123456789"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="p-[9px]"
          src="./assets/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
          alt="Download on the App Store"
        />
      </a>
      <a
        href="https://play.google.com/store/apps/details?id=your.package.name"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="h-[58px]"
          src="./assets/en_badge_web_generic.png"
          alt="Get it on Google Play"
        />
      </a>
    </div>
  );
}

export default DownloadBadges;
