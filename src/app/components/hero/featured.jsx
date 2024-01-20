import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from 'next/image';
import Link from 'next/link';   
const Featured = () => {
    return (
        <div>
            <div className="flex gap-4 items-center">
                <Image
                src="/rectangle.svg"
                width={20}
                height={40}
                alt="Picture of the author"
                />
                <h5 className="text-base font-semibold text-[#DB4444]">Featured</h5>
            </div>

            <div className="flex items-center justify-between mt-6 mb-[60px]">
                <h5 className="text-4xl font-semibold leading-10">New Arrival</h5>
            </div>
            <div className="flex gap-7">
                <div className="relative w-[570px] h-[600px] bg-black text-white flex items-end justify-center rounded">
                    <Image src="/featured/ps5.png" height={511} width={511} alt="ps5"/>
                    <div className="absolute bottom-8 left-8 max-w-[242px] flex flex-col gap-4">
                        <h3 className="text-[24px] font-semibold leading-6">Play Station 5</h3>
                        <p className="leading-5">Black and White version of the PS5 coming out on sale.</p>
                        <Link className="text-base font-medium leading-6 undeline" href="/">Shop Now</Link>
                    </div>
                </div>
                <div className="flex flex-col gap-7">
                    <div className="w-[570px] h-[286px] bg-black flex rounded">
                        <div className="w-[50%] relative text-white">
                            <div className="absolute bottom-4 left-4 max-w-[255px] flex flex-col gap-4">
                                <h3 className="text-[24px] font-semibold leading-6">Women&apos;s Collections</h3>
                                <p className="leading-5">Featured woman collections that give you another vibe.</p>
                                <Link className="text-base font-medium leading-6 undeline" href="/">Shop Now</Link>
                            </div>
                        </div>
                        <div className="flex items-end justify-center ">
                            <Image src="/featured/girl.png" className="" width={432} height={286} alt="girl"/>
                        </div>
                    </div>
                    <div className="flex gap-7">
                        <div className="w-[270px] h-[286px] bg-black relative rounded">
                            <div className="absolute bottom-2 text-white left-8 max-w-[255px] flex flex-col gap-2">
                                <h3 className="text-[24px] font-semibold leading-6">Speakers</h3>
                                <p className="leading-5">Amazon wireless speakers.</p>
                                <Link className="text-base font-medium leading-6 undeline" href="/">Shop Now</Link>
                            </div>
                            <div className="flex items-center justify-center h-full">
                            <Image src="/featured/speaker.png" width={190} height={221} alt="speaker"/>
                            </div>
                        </div>
                        <div className="w-[270px] h-[286px] bg-black relative rounded">
                            <div className="absolute bottom-2 text-white left-8 max-w-[255px] flex flex-col gap-2">
                                <h3 className="text-[24px] font-semibold leading-6">Perfume</h3>
                                <p className="leading-5">GUCCI INTENSE OUD EDP</p>
                                <Link className="text-base font-medium leading-6 undeline" href="/">Shop Now</Link>
                            </div>
                            <div className="flex items-center justify-center h-full">
                            <Image src="/featured/perfume.png" width={190} height={221} alt="speaker"/>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;