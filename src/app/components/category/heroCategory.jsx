import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import CategoryCard from "./categoryCard";
import CategoryThumbnail from "./categoryThumbnail";

const HeroCategory = () => {
  return (
    <div>
      <div className="flex gap-4 items-center">
        <Image
          src="/rectangle.svg"
          width={20}
          height={40}
          alt="Picture of the author"
        />
        <h5 className="text-base font-semibold text-[#DB4444]">
          Category&apos;s
        </h5>
      </div>
      <div className="flex items-center justify-between mt-6">
        <div className="flex items-center gap-[87px]">
          <h5 className="text-4xl font-semibold leading-10">Browse By Category</h5>
        </div>

        <div className="flex gap-2 mr-5">
          <div className="p-2 bg-[#f5f5f5] rounded-full cursor-pointer">
            <FaArrowLeft />
          </div>
          <div className="p-2 bg-[#f5f5f5] rounded-full cursor-pointer">
            <FaArrowRight />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-6 mt-14">
            <CategoryCard/>
            <CategoryCard/>
            <CategoryCard/>
            <CategoryCard/>
            <CategoryCard/>
            <CategoryCard/>
      </div>
      <div className="mt-[100px]">
        <CategoryThumbnail/>
      </div>
    </div>
  );
};

export default HeroCategory;
