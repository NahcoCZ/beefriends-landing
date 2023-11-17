import EaseInComponent from "../animations/EaseInComponent";

function SectionTwo() {
  return (
    <div id="section2" className="h-screen snap-start">
      <div className="bg-[#eab308] flex h-screen w-full">
        <div className="w-1/3 h-screen flex justify-center items-center">
          <EaseInComponent>
            <div className="text-center">
              <img src="./assets/logo.png" alt="" />
              <p className="font-extrabold text-6xl">BeeFriends</p>
            </div>
          </EaseInComponent>
        </div>
        <div className="h-full py-10">
          <div className="h-full border border-black "></div>
        </div>
        <div className="w-2/3 h-screen flex justify-center items-center">
          <div className="text-center p-16 mx-24 bg-primary rounded-3xl shadow-2xl">
            <div className="font-extrabold text-5xl">What is BeeFriends?</div>
            <div className="divider divider-accent"></div>
            <div className="font-bold text-xl">
              <span className="text-secondary">BeeFriends</span> is an
              application designed specifically for{" "}
              <span className="text-secondary">Bina Nusantara University</span>{" "}
              Students to make new connections with fellow students.
            </div>
            <div className="font-bold text-xl px-4 mt-4">
              Users are able to{" "}
              <span className="text-secondary">match anonymously</span> by only
              revealing basic information such as gender, major, and their
              generation number. More information can be revealed later with
              both parties' consent
            </div>
            <div className="font-bold text-xl mt-4">
              Users can also post publicly viewable messages anonymously in the
              form of <span className="text-secondary">OpenMessages</span>.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionTwo;
