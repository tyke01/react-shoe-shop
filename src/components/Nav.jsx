import {BsFillMoonFill, BsFillSunFill, BsSearch} from "react-icons/bs"
import Search from "./Search";
import { useState } from "react";

const Nav = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false)

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  return (
    <>
    <nav className="flex items-center justify-between px-10 py-5 fixed w-full bg-secondary-background-color">
      <a href="#">
        <h2 className="text-xl text-light-color">Sneaker Shop</h2>
      </a>

      <div className="flex justify-between gap-10">
        <ul className="flex items-center gap-10 text-light-color-alt ">
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

        <div>

          <div className="flex items-center gap-8 text-light-color-alt ">
          <div className="flex items-center text-xl">
            <button type="button" id="light-toggle-btn" title="light" className=" hover:text-light-color">
              <BsFillSunFill />
            </button>
            <button type="button" title="dark" id="dark-toggle-btn" className="hidden hover:text-light-color">
              <BsFillMoonFill />
            </button>
          </div>
          
          <div className="flex items-center gap-6">
            <button onClick={toggleSearch} className="hover:text-light-color"><BsSearch /></button>

            <button className="hover:text-light-color">Sign up</button>
            <button className="hover:text-light-color">Sign in</button>
          </div>
          </div>


        </div>
      </div>
    </nav>

    {isSearchVisible && <Search />}
    </>
  );
};

export default Nav;
