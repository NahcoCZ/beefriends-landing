import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Privacy() {
  const navigate = useNavigate();
  const backToHome = () => {
    navigate("/");
  };
  useEffect(() => {
    document.title = "BeeFriends: Privacy Policy";
  });
  return (
    <div className="bg-yellow-500 h-screen">
      <header className="navbar bg-primary text-black">
        <div className="flex">
          <button className="flex items-center" onClick={backToHome}>
            <img
              src="./assets/logo.png"
              alt="logo"
              className="w-[64px] md:w-[96px]"
            />
            <p className="text-2xl md:text-5xl font-extrabold">BeeFriends</p>
          </button>
          <div className="divider divider-accent divider-horizontal"></div>
          <p className="font-bold text-xl md:text-3xl">Privacy Policy</p>
        </div>
      </header>
      <main className="p-6">
        <div className="card bg-white shadow-2xl max-h-[80vh] md:pr-4">
          <div className="card-body overflow-y-auto">
            <p className="card-title font-bold text-2xl">
              BeeFriends App Privacy Policy
            </p>
            <div className="divider divider-accent"></div>
            <p>
              BeeFriends Team built the BeeFriends app as a Freemium app. This
              SERVICE is provided by BeeFriends Team at no cost and is intended
              for use as is.
            </p>
            <p>
              This page is used to inform visitors regarding our policies with
              the collection, use, and disclosure of Personal Information if
              anyone decided to use our Service.
            </p>
            <p>
              If you choose to use our Service, then you agree to the collection
              and use of information in relation to this policy. The Personal
              Information that we collect is used for providing and improving
              the Service. We will not use or share your information with anyone
              except as described in this Privacy Policy.
            </p>
            <p>
              The terms used in this Privacy Policy have the same meanings as in
              our Terms and Conditions, which are accessible at BeeFriends
              unless otherwise defined in this Privacy Policy.
            </p>

            <p className="text-xl font-semibold mt-2">
              Information Collection and Use
            </p>
            <p>
              For a better experience, while using our Service, We may require
              you to provide us with certain personally identifiable
              information, including but not limited to Email Address, Student
              ID, Student Major, Birthdate, Social Accounts, Full Name, College
              Account, Religious Beliefs, Gender Identification. The information
              that we request will be retained on your device and is not
              collected by us in any way.
            </p>
            <p>
              The app does use third-party services that may collect information
              used to identify you.
            </p>
            <p>
              Link to the privacy policy of third-party service providers used
              by the app:
            </p>
            <ul className="list-disc ml-6">
              <li>
                <a
                  href="https://www.google.com/policies/privacy/"
                  target="_blank"
                  rel="noreferrer"
                  className="underline text-blue-500"
                >
                  Google Play Services
                </a>
              </li>
              <li>
                <a
                  href="https://firebase.google.com/support/privacy"
                  target="_blank"
                  rel="noreferrer"
                  className="underline text-blue-500"
                >
                  Google Analytics for Firebase
                </a>
              </li>
              <li>
                <a
                  href="https://firebase.google.com/support/privacy/"
                  target="_blank"
                  rel="noreferrer"
                  className="underline text-blue-500"
                >
                  Firebase Crashlytics
                </a>
              </li>
            </ul>

            <p className="text-xl font-semibold mt-2">Log Data</p>
            <p>
              We want to inform you that whenever you use our Service, in a case
              of an error in the app we collect data and information (through
              third-party products) on your phone called Log Data. This Log Data
              may include information such as your device Internet Protocol
              (“IP”) address, device name, operating system version, the
              configuration of the app when utilizing our Service, the time and
              date of your use of the Service, and other statistics.
            </p>

            <p className="text-xl font-semibold mt-2">Cookies</p>
            <p>
              Cookies are files with a small amount of data that are commonly
              used as anonymous unique identifiers. These are sent to your
              browser from the websites that you visit and are stored on your
              device's internal memory.
            </p>
            <p className="text-xl font-semibold mt-2">Service Providers</p>
            <p>
              We may employ third-party companies and individuals due to the
              following reasons:
            </p>
            <ul className="list-disc ml-6">
              <li>To facilitate our Service;</li>
              <li>To provide the Service on our behalf;</li>
              <li>To perform Service-related services; or</li>
              <li>To assist us in analyzing how our Service is used.</li>
            </ul>
            <p>
              We want to inform users of this Service that these third parties
              have access to their Personal Information. The reason is to
              perform the tasks assigned to them on our behalf. However, they
              are obligated not to disclose or use the information for any other
              purpose.
            </p>

            <p className="text-xl font-semibold mt-2">Security</p>
            <p>
              We value your trust in providing us your Personal Information,
              thus we are striving to use commercially acceptable means of
              protecting it. But remember that no method of transmission over
              the internet, or method of electronic storage is 100% secure and
              reliable, and we cannot guarantee its absolute security.
            </p>

            <p className="text-xl font-semibold mt-2">Links to Other Sites</p>
            <p>
              This Service may contain links to other sites. If you click on a
              third-party link, you will be directed to that site. Note that
              these external sites are not operated by us. Therefore, we
              strongly advise you to review the Privacy Policy of these
              websites. We have no control over and assume no responsibility for
              the content, privacy policies, or practices of any third-party
              sites or services.
            </p>

            <p className="text-xl font-semibold mt-2">Children’s Privacy</p>
            <p>
              These Services do not address anyone under the age of 13. We do
              not knowingly collect personally identifiable information from
              children under 13 years of age. In the case we discover that a
              child under 13 has provided us with personal information, we
              immediately delete this from our servers. If you are a parent or
              guardian and you are aware that your child has provided us with
              personal information, please contact us so that we will be able to
              do the necessary actions.
            </p>

            <p className="text-xl font-semibold mt-2">
              Changes to This Privacy Policy
            </p>
            <p>
              We may update our Privacy Policy from time to time. Thus, you are
              advised to review this page periodically for any changes. We will
              notify you of any changes by posting the new Privacy Policy on
              this page.
            </p>
            <p>This policy is effective as of 2023-11-19</p>

            <p className="text-xl font-semibold mt-2">Contact Us</p>
            <p>
              If you have any questions or suggestions about our Privacy Policy,
              do not hesitate to contact us at user-support@beefriendsapp.com.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Privacy;
