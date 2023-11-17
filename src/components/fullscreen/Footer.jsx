import DownloadBadges from "../DownloadBadges";

function Footer() {
  return (
    <div className="h-screen snap-start bg-gray-200">
      <div className="bg-yellow-500 w-full h-2/3 rounded-tr-[25%] flex justify-center items-center">
        <div className="text-center">
          <p className="text-5xl font-extrabold">What are you waiting for?</p>
          <p className="text-4xl font-semibold">Download BeeFriends now!</p>
          <div className="divider divider-accent"></div>
          <div className="w-full flex justify-center mt-6">
            <DownloadBadges />
          </div>
        </div>
      </div>
      <div className="h-1/3 w-full bg-yellow-500">
        <div className="h-full w-full bg-accent rounded-t-[10%] text-white p-16">
          FOOTER NGENTOT
        </div>
      </div>
    </div>
  );
}

export default Footer;
