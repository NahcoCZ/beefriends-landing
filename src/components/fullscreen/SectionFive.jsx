import Phone from "../Phone";

function SectionFive() {
  return (
    <div className="h-screen snap-start">
      <div className="w-full bg-gray-200 h-screen flex">
        <div className="w-1/2 bg-yellow-500 rounded-tr-[50%] flex justify-center items-center">
          <div className="text-center text-white mx-16">
            <p className="text-5xl font-extrabold mb-6 text-accent">
              OpenMessage System
            </p>
            <div className="divider divider-accent mx-6"></div>
            <p className="text-2xl font-bold">
              Create anonymous messages for other users to view using our
              <span className="text-secondary">{" OpenMessages"}</span> features
            </p>
          </div>
        </div>
        <div className="w-1/2 bg-yellow-500">
          <div className="w-full h-screen bg-gray-200 rounded-bl-[50%] flex justify-center items-center">
            <Phone
              screenshotLink={"./assets/openmessage.jpg"}
              invertDirection
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionFive;
