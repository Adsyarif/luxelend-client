import { ButtonNavigation, Header, Hero, GenderButton } from "../../components";

const Home = () => {
  const midCards = [
    {
      link: "/your-link-url",
      imageSrc: "images/TenthSection/11.webp",
      text: "Windows Users Didn't Know This Simple Trick To Block All Ads (Do It Now)",
      horizontal: true,
    },
  ];
  return (
    <>
      <Header />
      <ButtonNavigation />
      <Hero />
      <GenderButton />
    </>
  );
};

export default Home;
