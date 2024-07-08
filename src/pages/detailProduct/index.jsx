import { Carousel } from "../../components/Carousel/Carousel";
import { StickyRent } from "../../components/StickyRent/StickyRent";
import TableSizeGuide from "../../components/TableSizeGuide/TableSizeGuide";
import Navbar from "../../containers/Navbar/Navbar";

export function DetailProductPage() {
  return (
    <>
      <div className="bg-[#F4F4F4] w-full h-full">
        <Navbar />

        <div className="flex mt-4">
          <div className="mr-5">
            <button className="mt-0 ml-3">back</button>
          </div>
          <Carousel />
        </div>

        <div className="flex justify-around items-center">
          <div className="mr-2 mt-3">
            <h1 className="font-bold text-2xl">Michael Michael Kors</h1>
            <p>Shadow Floral Tie-Neck Blouse</p>
            <p>Retail value Rp 5.676.000</p>
          </div>
          <div>
            <button>share</button>
          </div>
        </div>

        <div className="ml-7 my-3">
          <h1 className="font-bold text-xl">Product Details</h1>
          <ul className="list-disc ml-5">
            <li>Style: Blouse, georgette, button fastening</li>
            <li>Material: 60% viscose/40% silk</li>
            <li>Size: S, M, L, XL</li>
            <li>Fit note: Model is 5'9"/175 cm wearing size XS</li>
            <li>Color: Black/White</li>
          </ul>
        </div>

        <TableSizeGuide />

        <StickyRent />
      </div>
    </>
  );
}
