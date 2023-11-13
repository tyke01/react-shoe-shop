import { OlderPostsdata } from "../data";
import { BiRightArrow } from "react-icons/bi";

const OlderPosts = () => {
  return (
    <section className="px-6 py-16">
      <h2 className="title section-title mb-10" data-name="Older posts">
        Older posts
      </h2>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
        {OlderPostsdata.map((posts) => (
          <div key={posts.id} className="flex">
            <img
              src={posts.img}
              alt="older posts"
              className=" lg:w-72 w-32 object-cover"
            />
            <div className="flex flex-col gap-4 bg-secondary-background-color hover:bg-primary-background-color px-3 py-5 text-light-color transition-all duration-300">
              <div className="flex justify-between text-sm text-light-color">
                <span>{posts.date}</span>
                <div className="w-[5px] h-[5px] rotate-45 bg-light-color" />
                <span className="cursor-pointer">checkout</span>
              </div>
              <h1 className="font-bold text-2xl">{posts.title}</h1>
              <p className="text-lg text-light-color-alt">{posts.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        className="flex items-center gap-3 text-light-color mt-6 text-xl group">
        See more{" "}
        <span className=" flex items-center group-hover:translate-x-3 transition-transform delay-200">
          <BiRightArrow />
        </span>
      </button>
    </section>
  );
};

export default OlderPosts;
