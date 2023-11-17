function MobileTwo() {
  const scrollNext = () => {
    const nextSection = document.getElementById("mobile3");
    if (nextSection) {
      nextSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div id="mobile2" className="h-screen snap-start bg-yellow-500 ">
      <div className="h-screen text-center flex items-center">
        <div>
          <div className="font-extrabold text-5xl">What is BeeFriends?</div>
          <div className="divider divider-accent mx-6"></div>
          <div className="mx-4">
            <div className="font-semibold text-xl">
              <span className="text-secondary">BeeFriends</span> is an
              application designed specifically for{" "}
              <span className="text-secondary">Bina Nusantara University</span>{" "}
              Students to make new connections with fellow students.
            </div>
            <button onClick={scrollNext}>
              <div className="text-lg mt-6">Keep scrolling to learn more!</div>
              <div className="w-full flex justify-center">
                <img
                  src="./assets/down.svg"
                  alt="downarrow"
                  className="opacity-50 w-[64px]"
                />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileTwo;
