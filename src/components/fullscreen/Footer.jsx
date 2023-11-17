function Footer() {
  const scrollToTop = () => {
    const nextSection = document.getElementById("section1");
    if (nextSection) {
      nextSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="h-screen snap-start bg-gray-200">
      <div className="bg-yellow-500 w-full h-5/6 rounded-tr-[25%] flex justify-center items-center">
        <div className="text-center">
          <p className="text-5xl font-extrabold">What are you waiting for?</p>
          <p className="text-4xl font-semibold">Download BeeFriends now!</p>
          <div className="divider divider-accent"></div>
          <div className="w-full flex justify-center mt-6">
            <button
              onClick={scrollToTop}
              className="btn btn-secondary text-xl m-1"
            >
              Download Now
            </button>
          </div>
        </div>
      </div>
      <div className="h-1/6 w-full bg-yellow-500">
        <div className="h-full w-full bg-accent rounded-t-[10%] text-white pt-6 text-center">
          <p>Follow us on Instagram!</p>
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
            <p className="ml-2">@beefriendsapp</p>
          </a>
          <p className="mt-6">BeeFriends Team</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
