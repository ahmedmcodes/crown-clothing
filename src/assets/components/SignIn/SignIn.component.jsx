import { useEffect } from "react";
import {
  googleSignInWithPopUp,
  googleSignInWithRedirect,
  db,
  auth,
  addUserDataToDatabase,
} from "../../../Utils/Firebase/firebase.utils";
import { getRedirectResult } from "firebase/auth";
import SignUpForm from "../Sign-up/Sign-up.component";

const SignIn = () => {
  useEffect(() => {
    const fetchData = async () => {
      const response = await getRedirectResult(auth);
      if (response) {
        const userDocRef = await addUserDataToDatabase(response.user);
      }
    };
    fetchData();
  }, []);

  const logInUserWithGooglePopUp = async () => {
    const { user } = await googleSignInWithPopUp();
    const userDocRef = await addUserDataToDatabase(user);
  };

  return (
    <>
      <button onClick={logInUserWithGooglePopUp}>Popup Sign in</button>
      <button onClick={googleSignInWithRedirect}>Redirect Signin</button>;
      <SignUpForm />
    </>
  );
};

export default SignIn;
