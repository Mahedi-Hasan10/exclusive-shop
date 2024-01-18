import Image from 'next/image'
import { Carousel } from 'antd'
import { FaApple } from "react-icons/fa";
import Link from 'next/link'
import { FaArrowRight } from "react-icons/fa6";
const HeroCarosul = () => {
    return (
        <div>
        <Carousel autoplay className=''>
         <div className="!flex !justify-between h-[344px] w-[892px] bg-black text-white">
             <div className='text-white px-[28px] py-[38px] flex flex-col justify-center gap-5'>
               <div className='flex items-center gap-3 text-white'>
                 <FaApple size={30}/>
                 <p className='text-base font-bold leading-6'>iPhone 14 Series</p>
               </div>
               <h2 className='text-[48px] font-semibold leading-10'>Up to 10% off Voucher</h2>
               <Link className='flex items-center gap-2 text-base font-medium leading-6 underline pb-2' href="/">Shop <FaArrowRight /></Link>
             </div>
             <div className=' py-[38px]'>
               <Image src='/hero/herocar1.png' alt='banner' height={352} width={496} />
             </div>
         </div>
         <div className="!flex !justify-between h-[344px] w-[892px] bg-black text-white">
             <div className='text-white px-[28px] py-[38px] flex flex-col justify-center gap-5'>
               <div className='flex items-center gap-3 text-white'>
                 <FaApple size={30}/>
                 <p className='text-base font-bold leading-6'>iPhone 14 Series</p>
               </div>
               <h2 className='text-[48px] font-semibold leading-10'>Up to 10% off Voucher</h2>
               <Link className='flex items-center gap-2 text-base font-medium leading-6 underline pb-2' href="/">Shop <FaArrowRight /></Link>
             </div>
             <div className=' py-[38px]'>
               <Image src='/hero/herocar1.png' alt='banner' height={352} width={496} />
             </div>
         </div>
         <div className="!flex !justify-between h-[344px] w-[892px] bg-black text-white">
             <div className='text-white px-[28px] py-[38px] flex flex-col justify-center gap-5'>
               <div className='flex items-center gap-3 text-white'>
                 <FaApple size={30}/>
                 <p className='text-base font-bold leading-6'>iPhone 14 Series</p>
               </div>
               <h2 className='text-[48px] font-semibold leading-10'>Up to 10% off Voucher</h2>
               <Link className='flex items-center gap-2 text-base font-medium leading-6 underline pb-2' href="/">Shop <FaArrowRight /></Link>
             </div>
             <div className=' py-[38px]'>
               <Image src='/hero/herocar1.png' alt='banner' height={352} width={496} />
             </div>
         </div>
         <div className="!flex !justify-between h-[344px] w-[892px] bg-black text-white">
             <div className='text-white px-[28px] py-[38px] flex flex-col justify-center gap-5'>
               <div className='flex items-center gap-3 text-white'>
                 <FaApple size={30}/>
                 <p className='text-base font-bold leading-6'>iPhone 14 Series</p>
               </div>
               <h2 className='text-[48px] font-semibold leading-10'>Up to 10% off Voucher</h2>
               <Link className='flex items-center gap-2 text-base font-medium leading-6 underline pb-2' href="/">Shop <FaArrowRight /></Link>
             </div>
             <div className=' py-[38px]'>
               <Image src='/hero/herocar1.png' alt='banner' height={352} width={496} />
             </div>
         </div>
       
         
     </Carousel>
        </div>
    );
};

export default HeroCarosul;