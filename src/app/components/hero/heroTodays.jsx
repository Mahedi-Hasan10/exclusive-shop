import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Product from "./product";
const HeroTodays = () => {
  return (
    <div>
      <div className="flex gap-4 items-center">
        <Image
          src="/rectangle.svg"
          width={20}
          height={40}
          alt="Picture of the author"
        />
        <h5 className="text-base font-semibold text-[#DB4444]">Today&apos;s</h5>
      </div>

      <div className="flex items-center justify-between mt-6">
        <div className="flex items-center gap-[87px]">
            <h5 className="text-4xl font-semibold leading-10">Flash Sales</h5>
           <div className="flex text-center gap-2">
                <div>
                    <p className="text-xs font-medium">days</p>
                    <h5 className="text-4xl font-semibold leading-10">03 : </h5>
                </div>
                <div>
                    <p className="text-xs font-medium">hours</p>
                    <h5 className="text-4xl font-semibold leading-10">&nbsp;23 :</h5>
                </div>
                <div>
                    <p className="text-xs font-medium">minutes</p>
                    <h5 className="text-4xl font-semibold leading-10">&nbsp;19 : </h5>
                </div>
                <div>
                    <p className="text-xs font-medium">Second</p>
                    <h5 className="text-4xl font-semibold leading-10">&nbsp;56</h5>
                </div>
           </div>
        </div>
        <div>
            <div className="flex gap-2 mr-5">
                <div className="p-2 bg-[#f5f5f5] rounded-full cursor-pointer">
                    <FaArrowLeft />
                </div>
                <div className="p-2 bg-[#f5f5f5] rounded-full cursor-pointer">
                    <FaArrowRight />
                </div>
            </div>
        </div>
      </div>

      <div className="mt-[40px] grid grid-cols-3 gap-4 overflow-hidden">
        <Product/>
        <Product/>
        <Product/>
      </div>
      <div className="flex items-center justify-center py-[60px] rounded-md">
          <button className="px-[48px] py-3 bg-[#db4444] text-white">View All Products</button>
      </div>
      <hr />
    </div>
  );
};

export default HeroTodays;
