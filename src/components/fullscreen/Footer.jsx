import { useNavigate } from "react-router-dom";

function Footer({ isMobile = false }) {
  const navigate = useNavigate();
  const scrollToTop = () => {
    const nextSection = document.getElementById(
      isMobile ? "mobile1" : "section1"
    );
    if (nextSection) {
      nextSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="h-screen snap-start bg-gray-200" id="footer">
      <div className="bg-yellow-500 w-full h-5/6 rounded-tr-[25%] flex justify-center items-center">
        <div className="text-center">
          <p className={`${isMobile ? "text-2xl" : "text-5xl"} font-extrabold`}>
            What are you waiting for?
          </p>
          <p
            className={`${
              isMobile ? "text-xl" : "text-4xl"
            } mt-4 font-semibold`}
          >
            Sign up for the Closed Testing now to get early access
          </p>
          <div
            className={`divider divider-accent ${isMobile ? "p-4" : ""}`}
          ></div>
          <div className="w-full flex justify-center mt-6">
            <a
              href="http://closedtestingregistration.beefriendsapp.com/"
              target="_blank"
              onClick={scrollToTop}
              className="btn btn-secondary text-xl m-1 text-white"
              rel="noreferrer"
            >
              Sign Up Now!
            </a>
          </div>
        </div>
      </div>
      <div className="h-1/6 w-full bg-yellow-500">
        <div
          className={`h-full w-full bg-accent rounded-t-[10%] text-white text-center ${
            isMobile ? "pt-2" : "pt-6 "
          }`}
        >
          <p className="text-gray-400">Follow us on Instagram!</p>
          <a
            href="https://www.instagram.com/beefriendsapp/"
            target="_blank"
            className="flex justify-center items-center"
            rel="noreferrer"
          >
            <img
              src="./assets/instagram.svg"
              alt="IG Icon"
              className="h-[32px]"
            />
            <p className="ml-2 text-blue-500 underline">@beefriendsapp</p>
          </a>
          <p className={`${isMobile ? "" : "mt-4"} text-gray-400`}>
            BeeFriends Team &#183;{" "}
            <span>
              <button
                onClick={() => navigate("/privacy-policy")}
                className="hover:text-blue-400 hover:underline"
              >
                Privacy Policy
              </button>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
