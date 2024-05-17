import { BsFillMoonFill, BsFillSunFill, BsSearch } from "react-icons/bs";
import Search from "./Search";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi";

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  return (
    <>
      <nav className="flex items-center justify-between px-4 lg:px-10 py-5 fixed w-full bg-secondary-background-color z-50">
        {/* Logo */}
        <a href="#" className="text-xl text-light-color">
          Sneaker Shop
        </a>

        {/* Desktop Navigation Menu */}
        <ul className="hidden lg:flex items-center gap-10 text-light-color-alt">
          <li className="hover:text-light-color">
            <a href="#">Home</a>
          </li>
          <li className="hover:text-light-color">
            <a href="#">Shop</a>
          </li>
          <li className="hover:text-light-color">
            <a href="#">News</a>
          </li>
          <li className="hover:text-light-color">
            <a href="#">Reviews</a>
          </li>
          <li className="hover:text-light-color">
            <a href="#">Contact</a>
          </li>
        </ul>

        {/* Mobile Navigation Menu Toggle */}
        <div className="lg:hidden absolute right-0">
          <button onClick={toggleMenu} className="text-3xl text-light-color-alt">
            {isMobileMenuOpen ? <AiOutlineClose /> : <BiMenuAltRight />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-16 left-0 right-0 bg-secondary-background-color">
            <ul className="flex flex-col items-center gap-3 text-light-color-alt p-4">
              <li className="hover:text-light-color">
                <a href="#">Home</a>
              </li>
              <li className="hover:text-light-color">
                <a href="#">Shop</a>
              </li>
              <li className="hover:text-light-color">
                <a href="#">News</a>
              </li>
              <li className="hover:text-light-color">
                <a href="#">Reviews</a>
              </li>
              <li className="hover:text-light-color">
                <a href="#">Contact</a>
              </li>

              <button className="hover:text-light-color">Sign up</button>
              <button className="hover:text-light-color">Sign in</button>
            </ul>
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center gap-6 text-light-color-alt">
          <div className="flex items-center text-xl absolute right-40 lg:right-56">
            {/* <button
              type="button"
              id="light-toggle-btn"
              title="light"
              className="hover:text-light-color"
            >
              <BsFillSunFill />
            </button>
            <button
              type="button"
              title="dark"
              id="dark-toggle-btn"
              className="hidden hover:text-light-color"
            >
              <BsFillMoonFill />
            </button> */}
          </div>
          <div className="hidden lg:flex gap-5">
            <button onClick={toggleSearch} className="hover:text-light-color">
              <BsSearch />
            </button>
            <button className="hover:text-light-color">Sign up</button>
            <button className="hover:text-light-color">Sign in</button>
          </div>
        </div>
      </nav>

      {/* Search Component */}
      {isSearchVisible && <Search />}
    </>
  );
};

export default Nav;
