import { NewShoes } from "../data";

const Home = () => {
  return (
    <section className="pt-20 text-xl text-light-color  grid grid-cols-3 gap-4 p-6">
      <div className="flex items-center gap-5 bg-secondary-background-color lg:col-span-2 text-sm text-light-color-alt">
        <button className=" border-[4px] border-light-color-alt p-3">
          <span className="font-bold">Breaking News</span>
        </button>
        <p>Nike releases new and better sneakers</p>
      </div>
      {/*  */}
      <div className="bg-secondary-background-color row-span-3  px-5 ">
        <h1 className="text-center font-bold text-2xl  py-10">Newest shoes</h1>
        <div className="flex flex-col">
          {/*  */}
          {NewShoes.map((shoe) => (
            <div
              key={shoe.id}
              className="flex gap-5 border border-light-border-color py-8 cursor-pointer"
            >
              <div className="w-40 h-24 relative">
                <img
                  src={shoe.img}
                  alt="reviews"
                  className=" object-cover w-full h-full"
                />
                <span className="absolute z-10 text-base w-7 h-7 -top-2 -left-2 bg-secondary-background-color flex items-center justify-center rounded-full">
                  {shoe.number}
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center text-light-color-alt text-sm px-2">
                  <span>{shoe.date}</span>
                  <div className="w-[5px] h-[5px] rotate-45 bg-light-color-alt" />
                  <button>read more</button>
                </div>
                <p className="text-center font-bold text-base tracking-normal px-2">
                  {" "}
                  {shoe.desc}
                </p>
              </div>
            </div>
          ))}
          {/*  */}
        </div>
      </div>
      {/*  */}
      <div className="relative h-[260px] w-full">
        <img src="nikes-2.jpg" alt="shoe" className="h-full w-full" />
        <div className="absolute bottom-0 w-full bg-black/75 hover:bg-primary-background-color transition-all ease-in-out duration-300 px-3 py-3">
          <div className=" flex items-center justify-between text-xs text-light-color-alt ">
            <span>Dec 20th 2023</span>
            <span>sold out in 10 hours</span>
          </div>
          <p className="font-bold text-2xl">how many will you want?</p>
        </div>
      </div>
      {/*  */}
      <div className="relative h-[260px] w-full">
        <img
          src="sharks.jpg"
          alt="shoe"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 w-full bg-black/75 hover:bg-primary-background-color transition-all ease-in-out duration-300 px-3 py-3">
          <div className=" flex items-center justify-between text-xs text-light-color-alt ">
            <span>may 20th 2023</span>
            <span>sold out in 2 hours</span>
          </div>
          <p className="font-bold text-2xl">Comfortable as ever</p>
        </div>
      </div>

      <div className="lg:col-span-2 w-full relative">
        <img
          src="jordans-2.jpg"
          alt=""
          className="object-cover w-full h-[300px]"
        />
        <div className="absolute bottom-0 w-full bg-black/75 hover:bg-primary-background-color transition-all ease-in-out duration-300 px-3 py-3">
          <div className=" flex items-center justify-between text-xs text-light-color-alt ">
            <span>jan 3rd 2023</span>
            <span>sold out</span>
          </div>
          <p className="font-bold text-2xl">
            Pre-order now before you miss the hot deals
          </p>
        </div>
      </div>

      {/*  */}
    </section>
  );
};

export default Home;
