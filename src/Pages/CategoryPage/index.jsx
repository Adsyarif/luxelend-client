import { CategoryCard } from "../../Containers";
import { Header, BackButton } from "../../Components";
import { useState } from "react";
import data from "../../data/categoryData.json";

const CategoryPage = () => {
  // console.log(data.gender.men);
  // const [Categories, setCategories] = useState({
  //   women: [],
  //   men: [],
  // });
  // const fetchCategory = async () => {
  //   const response = await fetch("");
  //   const data = await response.json();
  // };

  return (
    <div className="md:mx-auto md:max-w-md">
      <Header />
      <BackButton />
      <CategoryCard items={data.category.women} gender={"Women"} />
      <CategoryCard items={data.category.men} gender={"Men"} />
    </div>
  );
};

export default CategoryPage;
