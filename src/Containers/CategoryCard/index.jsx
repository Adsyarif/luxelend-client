import { Banner } from "../../Components";
import { ListCard } from "../index";

const CategoryCard = ({ items, gender, isWomen }) => {
  return (
    <div className="">
      <Banner isWomen={isWomen} />
      <div className="py-2">
        <div className="py-2 flex justify-center">
          <h2 className="font-bold">{gender}</h2>
        </div>
        <ListCard items={items} />
      </div>
    </div>
  );
};

export default CategoryCard;
