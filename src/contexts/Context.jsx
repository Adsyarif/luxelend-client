import { createContext, useState } from "react";

const defaultValue = {
  gender: undefined,
  setGender: undefined,
  category: [],
  setCategory: undefined,
};

export const AppContext = createContext(defaultValue);

export const AppContextProvider = ({ children }) => {
  const [gender, setGender] = useState(undefined);
  const [category, setCategory] = useState([]);

  const value = { gender, setGender, category, setCategory };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
