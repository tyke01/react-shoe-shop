// import { BiMailSend } from "react-icons/bi";

const NewsLetter = () => {
  return (
    <section className="px-6 py-16">
      <h2 className="title section-title mb-10" data-name="Newsletter">
        Newsletter
      </h2>

      <div className="flex flex-col items-center justify-center gap-8">
        <h1 className="font-bold text-3xl text-light-color text-center">
          Subsribe to our Newsletter
        </h1>
        <p className="text-light-color-alt text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio esse
          omnis doloremque repellendus non praesentium beatae optio aut? Fugit
          amet atque modi non praesentium adipisci sequi at magni esse nulla!
        </p>

        <div className="flex items-center mb-3 w-fit">
          <input
            type="text"
            placeholder="Enter your email"
            className="w-full  border-2 p-4 text-xl text-light-color-alt border-secondary-background-color bg-transparent outline-none"
          />
          <button className="text-primary bg-secondary-background-color p-4 text-light-color-alt text-2xl hover:text-light-color">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
