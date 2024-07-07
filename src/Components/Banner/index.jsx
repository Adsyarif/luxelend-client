const Banner = ({ isWomen }) => {
  return (
    <div className="">
      <div
        className={`${
          isWomen
            ? "bg-[url('womenHeroBg.webp')]"
            : "bg-[url('menHeroBg.webp')]"
        } "m-0 border-none flex h-32 flex-col text-center justify-center gap-2 text-white bg-center bg-no-repeat bg-cover w-full"`}
      ></div>
    </div>
  );
};

export default Banner;
