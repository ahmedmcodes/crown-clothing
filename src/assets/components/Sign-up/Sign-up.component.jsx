import { useState } from "react";
import {
  auth,
  addUserDataToDatabase,
} from "../../../Utils/Firebase/firebase.utils";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import FormInput from "../Minor Components/FormInput.component";
import Button from "../Minor Components/Button.component";
import { Link } from "react-router-dom";
//Default user details for Signup form
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
  const [registrationSuccessMessage, setRegistrationSuccessMessage] =
    useState("");

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
        addUserDataToDatabase(user, userDetails);
        setUserDetails(defaultUserDetails);
        setErrorMessage("");
        setRegistrationSuccessMessage("Registration Successful!");
      } else {
        setErrorMessage(
          "Password and Confirm Password do not match, please try again."
        );
      }
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setErrorMessage(
          "The email address is already in use. Please choose another one."
        );
      }

      setUserDetails(defaultUserDetails);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center  mx-60">
      <h2 className="my-4 text-4xl">Create Account</h2>
      <form onSubmit={handleOnSubmit} className="flex flex-col w-96 my-4 ">
        <FormInput
          label="Display Name"
          onChange={handleOnChange}
          type="text"
          name="displayName"
          required
          value={displayName}
        />

        <FormInput
          label="Email"
          onChange={handleOnChange}
          type="email"
          name="email"
          required
          value={email}
        />
        <FormInput
          label="Password"
          onChange={handleOnChange}
          type="password"
          name="password"
          required
          value={password}
        />
        <FormInput
          label="Confirm Password"
          onChange={handleOnChange}
          type="password"
          name="confirmPassword"
          required
          value={confirmPassword}
        />
        <Button type="submit">Register</Button>
        <Link to="/sign-in" className="m-auto pt-2 underline">
          Login
        </Link>
      </form>
      {errorMessage && <div className="text-xl px-44">{errorMessage}</div>}
      {registrationSuccessMessage && (
        <div className="text-xl px-44">{registrationSuccessMessage}</div>
      )}
    </div>
  );
};

export default SignUpForm;
