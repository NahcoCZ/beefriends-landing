import EaseInComponent from "../animations/EaseInComponent";

function MobileContent({ bg_color, title, description, icon }) {
  return (
    <div
      id="mobile4"
      className={`h-screen snap-start flex justify-center items-center ${bg_color}`}
    >
      <EaseInComponent>
        <div className="text-center">
          <div className="flex justify-center items-center">
            <img src={icon} alt="chaticon" className="h-[128px]" />
          </div>
          <p className="text-xl font-bold">{title}</p>
          <div className="divider divider-accent px-10"></div>
          <p className="font-semibold px-10">{description}</p>
        </div>
      </EaseInComponent>
    </div>
  );
}

export default MobileContent;
