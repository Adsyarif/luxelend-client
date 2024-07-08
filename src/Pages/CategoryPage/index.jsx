import { CategoryCard } from "../../Containers";
import { Header, BackButton } from "../../Components";
import { useState } from "react";
import data from "../../data/categoryData.json";

const CategoryPage = () => {
  console.log(data);
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
      <CategoryCard items={data.gender.women} gender={"Women"} isWomen={true} />
      <CategoryCard items={data.gender.men} gender={"Men"} isWomen={false} />
    </div>
  );
};

export default CategoryPage;
