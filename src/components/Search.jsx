import { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";

const Search = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleCloseClick = () => {
    setIsOpen(false);
  };

  const handleEscapeKeydown = (e) => {
    if (e.key === "Escape") {
      handleCloseClick();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleEscapeKeydown);

    return () => {
      document.removeEventListener("keydown", handleEscapeKeydown);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-primary-background-color flex items-center justify-center ${
        isOpen ? "" : "hidden"
      } z-30`}
    >
      <div className="flex flex-col">
        <div
          className="text-xl text-light-color-alt border-2 p-4 border-secondary-background-color fixed top-20 right-10 cursor-pointer"
          onClick={handleCloseClick}
        >
          <AiOutlineClose />
        </div>
        {/*  */}
        <div className="flex flex-col gap-3 items-end">
          <div className="flex justify-between items-center mb-3">
            <input
              type="text"
              placeholder="Search..."
              className="w-full  border-2 p-4 text-xl text-light-color-alt border-secondary-background-color bg-transparent outline-none"
            />
            <button className="text-primary bg-secondary-background-color p-5 text-light-color-alt text-2xl">
              <BsSearch />
            </button>
          </div>
          <p className="text-lg text-light-color-alt">or press Esc to exit</p>
        </div>
      </div>
    </div>
  );
};

export default Search;
