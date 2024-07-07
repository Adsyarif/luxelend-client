import { CategoryCard } from "../../Containers";
import { Header, BackButton } from "../../Components";

const CategoryPage = () => {
  const gender = {
    women: [
      "View All Styles",
      "Pants",
      "Dresses",
      "Skirts",
      "Tops",
      "Sweaters + Swetshirt",
      "Jackets + Coats",
      "Jumpsuits + Rompers",
    ],
    men: [
      "View All Styles",
      "Jackets + Coats",
      "Tops",
      "Sweaters + Swetshirt",
      "Pants",
    ],
  };
  return (
    <div className="md:mx-auto md:max-w-md">
      <Header />
      <BackButton />
      <CategoryCard items={gender.women} gender={"Women"} isWomen={true} />
      <CategoryCard items={gender.men} gender={"Men"} isWomen={false} />
    </div>
  );
};

export default CategoryPage;
