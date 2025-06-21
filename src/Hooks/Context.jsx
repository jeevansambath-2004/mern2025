import React, { createContext} from "react";

export const Context = createContext();

export const UserContext= ({ children }) => {
  const user = { name: "Jeevan", age: "26", phn: "9894948791" };
  return (
    <Context.Provider value={user}>
      {children}
    </Context.Provider>
  );
};

 