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
import { Link } from "react-router-dom";

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
      <Link to="/sign-up">Create an account</Link>
      <button onClick={logInUserWithGooglePopUp}>Popup Sign in</button>
      <button onClick={googleSignInWithRedirect}>Redirect Signin</button>;
    </>
  );
};

export default SignIn;
