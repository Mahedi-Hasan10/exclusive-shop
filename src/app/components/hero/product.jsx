"use client";
import Image from 'next/image';
import { Rate } from 'antd';
import { FaRegHeart } from 'react-icons/fa';
import { LuEye } from "react-icons/lu";

const Product = ({thumbnail, productTitle, productPrice}) => {
    const loveClick = () => {
        alert("added to wishlist")
    }
    const eyeClick = () => {
        alert("viewed")
    }
    const addCart = () => {
        alert("item added to cart")
    }

    return (
            <div className=' w-[350px] mb-2 group relative cursor-pointer !rounded-[15px]'>
                <div className='bg-[rgb(245,245,245)] p-[49px] rounded-tl-2xl'>
                    <Image height={240} width={240} src="/products/game.png" alt="product" />
                    <div onClick={addCart} className='px-4 py-3 font-medium bg-black w-full absolute bottom-[90px] left-0 hidden group-hover:flex items-center justify-center cursor-pointer text-white'><h5>Add To Cart</h5></div>
                </div>
                <div className='mt-4 bg-white w-full '>
                    <h3 className='text-base font-medium leading-6'>HAVIT HV-G92 Gamepad</h3>
                    <p className='text-base font-medium leading-6 text-[#DB4444]'>$350  <strike className="text-[#ddd]">$500</strike></p>
                </div>
                <div className='flex gap-2'>
                <Rate disabled defaultValue={4} /> <p className='text-slate-500'>(60)</p>
                </div>
                <div className='absolute top-4 right-4 flex flex-col gap-2 text-2xl'>
                    <LuEye onClick={loveClick} className='hover:bg-red-600 hover:text-white bg-white rounded-full h-[40px] w-[40px] p-2'/>
                    <FaRegHeart onClick={eyeClick} className='hover:bg-red-400 hover:text-white bg-white rounded-full h-[40px] w-[40px] p-2'/>
                </div>
                <h5 className='px-4 py-2 bg-red-400 absolute top-0 left-0 text-white'>Off 30%</h5>
            </div>
    );
};

export default Product;