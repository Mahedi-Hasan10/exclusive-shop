import Link from 'next/link';
const TopHeader = () => {
    return (
        <section className='bg-black text-white py-3'>
            <div className='flex justify-around flex-wrap'>
                <div className='flex gap-2 flex-wrap'>
                    <p className='text-sm font-normal leading-5'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
                    <Link className='text-sm font-semibold leading-6 underline' href="/">ShopNow</Link>
                </div>
                <select name="language" id="" className='text-sm font-normal leading-5 bg-opacity-0 bg-transparent '>
                    <option value="english" className='text-black'>English</option>
                    <option value="english" className='text-black'>Bangla</option>
                    <option value="english" className='text-black'>Chinese</option>
                    <option value="english" className='text-black'>Arabic</option>
                </select>
            </div>
        </section>
    );
};

export default TopHeader;