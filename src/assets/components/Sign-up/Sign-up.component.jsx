import { useState } from "react";
import {
  auth,
  addUserDataToDatabase,
} from "../../../Utils/Firebase/firebase.utils";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";

const defaultUserDetails = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

//Signup form Component Code
const SignUpForm = () => {
  const [userDetails, setUserDetails] = useState(defaultUserDetails);
  const [errorMessage, setErrorMessage] = useState("");

  const { displayName, email, password, confirmPassword } = userDetails;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      if (password === confirmPassword) {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;
        sendEmailVerification(user);
        addUserDataToDatabase(user, userDetails);
        setUserDetails(defaultUserDetails);
        setErrorMessage("");
      } else {
        setErrorMessage(
          "Password and Confirm Password do not match, please try again. "
        );
      }
    } catch (error) {
      console.log(error);
      setErrorMessage(error.message);
      setUserDetails(defaultUserDetails);
    }
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <label htmlFor="name">Name</label>
        <input
          onChange={handleOnChange}
          type="text"
          name="displayName"
          required
          value={displayName}
        />
        <label htmlFor="email">Email</label>
        <input
          onChange={handleOnChange}
          type="email"
          name="email"
          required
          value={email}
        />
        <label htmlFor="password">Password</label>
        <input
          onChange={handleOnChange}
          type="password"
          name="password"
          required
          value={password}
        />
        <label htmlFor="confirmPasword">Confirm Password</label>
        <input
          onChange={handleOnChange}
          type="password"
          name="confirmPassword"
          required
          value={confirmPassword}
        />
        <button type="submit">Signup</button>
      </form>
      {errorMessage && <div>{errorMessage}</div>}
    </div>
  );
};

export default SignUpForm;
