// import { Button } from "../../Components";
import { selectCategory } from "../../utils/buttonClick";

const ListCard = ({ items }) => {
  return (
    <>
      <div className="grid grid-cols-2 w-80 mx-auto">
        {items.map((item, index) => {
          return (
            <button
              onClick={() => selectCategory(item)}
              key={index}
              className="text-start text-sm p-2 hover:font-bold hover:bg-yellow-200 w-40"
            >
              {item}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default ListCard;
