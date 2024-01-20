import Image from 'next/image';
const CategoryThumbnail = () => {
    return (
        <div className="h-[500px] w-[1170px] flex bg-black px-[56px]">
            <div className='flex flex-col gap-8 justify-center w-[50%]'>
                <p className='text-[#0F6] text-base font-semibold leading-5'>Category</p>
                <h2 className='text-[48px] font-semibold leading-[60px] text-[#FAFAFA]'>Enhance Your Music Experience</h2>
                <div className='flex gap-6'>
                    <div className=' py-[14px] px-[15px] bg-white rounded-full flex flex-col items-center'>
                        <h4 className='font-semibold'>23</h4>
                        <p>Hours</p>
                    </div>
                    <div className=' py-[14px] px-[18px] bg-white rounded-full flex flex-col items-center'>
                        <h4 className='font-semibold'>23</h4>
                        <p>Hours</p>
                    </div>
                    <div className=' py-[14px] px-[18px] bg-white rounded-full flex flex-col items-center'>
                        <h4 className='font-semibold'>23</h4>
                        <p>Hours</p>
                    </div>
                    <div className=' py-[14px] px-[18px] bg-white rounded-full flex flex-col items-center'>
                        <h4 className='font-semibold'>23</h4>
                        <p>Hours</p>
                    </div>
                </div>
                <div>
                    <button className="px-[30px] py-3 bg-[#00ff66] text-white rounded-lg hover:bg-[rgba(0,255,102,0.70)]">Buy Now</button>
                </div>
            </div>
            <div className='flex items-center justify-center'>
                <Image src="/categoryJBL.png" height={330} width={568} alt="jbl banner" className=''/>
            </div>
        </div>
    );
};

export default CategoryThumbnail;