import EaseInComponent from "../animations/EaseInComponent";

function MobileThree() {
  return (
    <div
      id="mobile3"
      className="h-screen snap-start bg-gray-200 flex justify-center items-center"
    >
      <EaseInComponent>
        <div className="text-center">
          <div className="flex justify-center items-center">
            <img src="./assets/chat.svg" alt="chaticon" className="h-[128px]" />
          </div>
          <p className="text-xl font-bold">Chat with Matches</p>
          <div className="divider divider-accent px-10"></div>
          <p className="font-semibold px-10">
            You can instant message users that you have matched with. BeeFriends
            has a feature-rich messaging system, allowing a pleasant experience
            when chatting
          </p>
        </div>
      </EaseInComponent>
    </div>
  );
}

export default MobileThree;
