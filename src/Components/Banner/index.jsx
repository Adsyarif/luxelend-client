const Banner = ({ gender }) => {
  const bannerClass = [
    "m-0",
    "border-none",
    "flex",
    "h-32",
    "flex-col",
    "text-center",
    "justify-center",
    "gap-2",
    "text-white",
    "bg-center",
    "bg-no-repeat",
    "bg-cover",
    "w-full",
  ];

  gender === "Women"
    ? bannerClass.push("bg-[url('womenHeroBg.webp')]")
    : bannerClass.push("bg-[url('menHeroBg.webp')]");

  return <div className={bannerClass.join(" ")}></div>;
};

export default Banner;
