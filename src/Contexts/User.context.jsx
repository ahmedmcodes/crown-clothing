import { createContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Utils/Firebase/firebase.utils";

//Creating Context for the App to use
export const userContext = createContext();

//Creating Context Provider to Wrap the enitre app
export const UserContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        setCurrentUser(null);
      }
      console.log(user);
      setCurrentUser(user);
    });
  }, []);

  return (
    <userContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </userContext.Provider>
  );
};
