const BackButton = ({ handleClick }) => {
  return (
    <button className="p-5 flex gap-5" onClick={handleClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 19.5 8.25 12l7.5-7.5"
        />
      </svg>
      <h2 className="font-bold">Categories</h2>
    </button>
  );
};

export default BackButton;
