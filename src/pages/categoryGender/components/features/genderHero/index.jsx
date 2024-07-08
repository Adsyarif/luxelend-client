import { Card } from "../../../../../components/cards";
// import genderHeroBG from "../../../../assets/img/genderHeroBG.webp";

// bg-[url('src/assets/img/genderHeroBg.webp')]

export function GenderHero() {
  return (
    <Card className="m-0 border-none  flex  h-32 flex-col text-center justify-center gap-2 text-white bg-center bg-no-repeat bg-cover bg-[url('src/assets/img/genderHeroBg.webp')]">
      <p className="text-sm">Category</p>
      <p className="font-bold text-2xl">Women</p>
      {/* <img src="src/assets/img/genderHeroBg.webp" alt="" /> */}
    </Card>
  );
}
