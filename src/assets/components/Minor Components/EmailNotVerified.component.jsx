import { sendEmailVerification } from "firebase/auth";

const EmailNotVerified = ({ currentUser }) => {
  //Handling Resend buttong and sending an email so that the user can verify their email
  const handleOnClick = async () => {
    const req = await sendEmailVerification(currentUser);
  };

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
