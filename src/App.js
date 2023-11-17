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
import MobileContent from "./components/mobile/MobileContent";

export default function App() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
  });

  const data = [
    {
      bg_color: "bg-gray-200",
      icon: "./assets/mag-glass.svg",
      title: "Matching Feature",
      description: `With our matching feature, you can find friends and partners alike according to your chosen criteria`,
    },
    {
      bg_color: "bg-yellow-500",
      icon: "./assets/chat.svg",
      title: "Chat with Matches",
      description: `You can instant message users that you have matched with. BeeFriends
      has a feature-rich messaging system, allowing a pleasant experience
      when chatting`,
    },
    {
      bg_color: "bg-gray-200",
      icon: "./assets/handshake.svg",
      title: "Add Friends",
      description: `You can send friend request to your matches as well as accept or
      reject request from other matches`,
    },
    {
      bg_color: "bg-yellow-500",
      icon: "./assets/user-detail.svg",
      title: "Details Revealed",
      description: `After the friend request has been accepted, the full profile of
      your matches will be unlocked. Allowing you to view their name
      as well as pictures`,
    },
    {
      bg_color: "bg-gray-200",
      icon: "./assets/post.svg",
      title: "OpenMessages Feature",
      description:
        "Using our OpenMessages feature, you can view publicly available anonymous messages from other users and post some yourself!",
    },
  ];

  return (
    <div className="overflow-y-scroll snap-y snap-mandatory h-screen">
      {windowSize <= 768 ? (
        <>
          <MobileOne />
          <MobileTwo />
          {data.map((obj) => (
            <MobileContent
              bg_color={obj.bg_color}
              icon={obj.icon}
              title={obj.title}
              description={obj.description}
            />
          ))}
          <Footer isMobile />
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
