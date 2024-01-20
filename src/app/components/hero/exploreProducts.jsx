import Product from "./product";
import Image from 'next/image';
const ExploreProducts = () => {
    return (
        <div>
             <div className="flex gap-4 items-center">
        <Image
          src="/rectangle.svg"
          width={20}
          height={40}
          alt="Picture of the author"
        />
        <h5 className="text-base font-semibold text-[#DB4444]">Our Product&apos;s</h5>
      </div>

      <div className="flex items-center justify-between mt-6">
        <div className="flex items-center gap-[87px]">
            <h5 className="text-4xl font-semibold leading-10">Explore Our Products</h5>
        </div>
        <div>
            <div className="flex gap-2 mr-5">
            <button className="px-[30px] py-3 bg-[#db4444] text-white">View All Products</button>
            </div>
        </div>
      </div>

      <div className="mt-[40px] grid grid-cols-3 gap-4 overflow-hidden">
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
      </div>
      
      <hr className="mt-[50px]"/>
        </div>
    );
};

export default ExploreProducts;