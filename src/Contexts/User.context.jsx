import { createContext, useState } from "react";

//Creating Context for the App to use
export const userContext = createContext();

//Creating Context Provider to Wrap the enitre app
export const UserContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <userContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </userContext.Provider>
  );
};
