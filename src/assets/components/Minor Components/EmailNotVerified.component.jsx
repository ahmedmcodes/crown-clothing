import { sendEmailVerification } from "firebase/auth";
import { useState } from "react";
import { RiUnderline } from "react-icons/ri";
const EmailNotVerified = ({ currentUser }) => {
  const [EmailVerificationRequest, setEmailVerificationRequest] =
    useState(null);

  //Handling Resend button and sending an email so that the user can verify their email
  const handleOnClick = async () => {
    const req = await sendEmailVerification(currentUser);
    setEmailVerificationRequest(req);
  };

  if (EmailVerificationRequest === undefined) {
    return (
      <div className="bg-black flex  my-1">
        <span className="m-auto text-white p-2 text-sm">
          Email verification link sent successfully!
        </span>
      </div>
    );
  }

  return (
    <div className="bg-black flex  my-1">
      {currentUser.emailVerified ? null : (
        <span className="m-auto text-white p-2 text-sm">
          Your email is unverified. Please check your inbox for a verification
          link
          <button className="ml-2 hover:cursor-pointer" onClick={handleOnClick}>
            Resend
          </button>
        </span>
      )}
    </div>
  );
};

export default EmailNotVerified;
