const Header = () => {
  return (
    <div className="bg-black p-4">
      <div className="flex flex-wrap w-full justify-center items-center">
        <div className="w-11/12 text-center ">
          <h1 className="text-lg tracking-widest text-gradient">LUXELEND</h1>
        </div>
        <button className="w-1/12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Header;
