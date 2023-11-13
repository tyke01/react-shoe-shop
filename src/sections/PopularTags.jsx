import { PopularTagsData } from "../data";

const PopularTags = () => {
  return (
    <section className="px-6 py-16">
      <h2 className="title section-title mb-10" data-name="Popular tags">
        Popular tags
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {PopularTagsData.map((popular) => (
          <div key={popular.id} className="relative md:w-[23rem] lg:w-[25rem] lg:h-[12rem]">
            <img
              src={popular.img}
              alt=""
              className="w-full h-full object-cover"
            />
            <p className="absolute top-[50%] right-[40%] font-bold text-light-color-alt bg-black/70 px-5 py-3 hover:bg-primary-background-color transition-colors duration-200 cursor-pointer">
              {popular.tag}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularTags;
