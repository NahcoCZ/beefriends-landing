import EaseInComponent from "../animations/EaseInComponent";

function SectionFour() {
  return (
    <div id="section4" className="h-screen snap-start bg-yellow-500">
      <div className="bg-gray-200 flex items-center justify-center h-screen w-full rounded-tr-[25%] rounded-bl-[25%]">
        <EaseInComponent>
          <div className="w-screen px-24 flex text-center">
            <div className="w-1/3">
              <div className="flex justify-center items-center">
                <img
                  src="./assets/chat.svg"
                  alt="chaticon"
                  className="h-[256px]"
                />
              </div>
              <p className="text-xl font-bold">Chat with Matches</p>
              <div className="divider divider-accent px-10"></div>
              <p className="font-semibold">
                You can instant message users that you have matched with.
                BeeFriends has a feature-rich messaging system, allowing a
                pleasant experience when chatting
              </p>
            </div>
            <div className="w-1/3">
              <div className="flex justify-center items-center">
                <img
                  src="./assets/handshake.svg"
                  alt="handshakeicon"
                  className="h-[256px]"
                />
              </div>
              <p className="text-xl font-bold">Add Friends</p>
              <div className="divider divider-accent px-10"></div>
              <p className="font-semibold">
                You can send friend request to your matches as well as accept or
                reject request from other matches
              </p>
            </div>
            <div className="w-1/3">
              <div className="flex justify-center items-center">
                <img
                  src="./assets/user-detail.svg"
                  alt="userdetail"
                  className="h-[256px]"
                />
              </div>
              <p className="text-xl font-bold">Details Revealed</p>
              <div className="divider divider-accent px-10"></div>
              <p className="font-semibold">
                After the friend request has been accepted, the full profile of
                your matches will be unlocked. Allowing you to view their name
                as well as pictures
              </p>
            </div>
          </div>
        </EaseInComponent>
      </div>
    </div>
  );
}

export default SectionFour;
