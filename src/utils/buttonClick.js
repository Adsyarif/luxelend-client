import { useContext } from "react";
import data from "../data/categoryData.json";
import { AppContext } from "../contexts/Context";

const { gender } = useContext(AppContext);

const selectCategory = (category) => {
  return category;
};

const getProductItems = (gender, selectCategory) => {};

export { selectCategory };
