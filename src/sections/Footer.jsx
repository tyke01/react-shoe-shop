import { AiFillInstagram, AiFillGithub } from "react-icons/ai";
import { BsDiscord, BsTwitter, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="px-6 py-16 flex flex-col gap-10 md:gap-[10rem] lg:flex-row">
      <div className="flex flex-col gap-5">
        <h1 className="text-light-color text-2xl font-bold">Sneaker Shop</h1>
        <p className="text-light-color-alt md:w-[400px]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum labore
          iusto, illo autem assumenda sed esse aspernatur praesentium blanditiis
          nobis cum totam quo iste sequi dolor aliquam sapiente unde repellat.
        </p>
        <div className="flex gap-2 text-light-color-alt">
          <AiFillInstagram />
          <BsDiscord />
          <BsTwitter />
          <AiFillGithub />
          <BsLinkedin />
        </div>
        <p className="text-light-color-alt mt-32">
          ©2023 Sneaker shop. All rights reserved
        </p>
      </div>
      {/*  */}
      <div className="flex flex-col">
        <h1 className="text-2xl text-light-color font-bold">Categories</h1>
        <ul className="flex flex-col gap-6 text-light-color-alt">
          <li>
            <a href="#" className="hover:text-light-color">
              Nike
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-light-color">
              Jordans
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-light-color">
              Sharks
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-light-color">
              Apollo
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-light-color">
              Converse
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-light-color">
              Air force
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-light-color">
              prada
            </a>
          </li>
        </ul>
      </div>
      {/*  */}
      <div className="flex flex-col">
        <h1 className="text-2xl text-light-color font-bold">Companies</h1>
        <div>
        <ul className="flex flex-col gap-6 text-light-color-alt">
          <li>
            <a href="#" className="hover:text-light-color">
              Nike
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-light-color">
              Jordans
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-light-color">
              Sharks
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-light-color">
              Apollo
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-light-color">
              Converse
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-light-color">
              Air force
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-light-color">
              prada
            </a>
          </li>
        </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
