import EaseInComponent from "./animations/EaseInComponent";

function Phone({ screenshotLink, invertDirection = false }) {
  return (
    <EaseInComponent invertDirection={invertDirection}>
      <div className="mockup-phone border-primary">
        <div className="camera"></div>
        <div className="display">
          <div className="artboard artboard-demo w-[30vh] h-[66vh]">
            <img src={screenshotLink} alt="Screenshot" />
          </div>
        </div>
      </div>
    </EaseInComponent>
  );
}

export default Phone;
