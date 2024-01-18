import Link from 'next/link';
import { FaSearch } from "react-icons/fa";
import Image from 'next/image';
const Header = () => {
    return (
        <section className='pt-[40px] pb-16px'>
           <navbar className="flex items-center justify-between">
                {/* logo */}
                <Link href='/' className='text-2xl font-bold leading-5 font-sans'>Exclusive</Link>
                {/* mid nav items */}
                <ul className='flex gap-[48px] text-base font-medium leading-6'>
                    <li>
                        <Link className='hover:underline transition duration-500' href='/'>Home</Link>
                    </li>
                    <li>
                        <Link className='hover:underline transition duration-500' href='/'>Contact</Link>
                    </li>
                    <li>
                        <Link className='hover:underline transition duration-500' href='/'>About</Link>
                    </li>
                    <li>
                        <Link className='hover:underline transition duration-500' href='/'>Sign Up</Link>
                    </li>
                </ul>
                {/* shop and accounts */}
                <div className='flex items-center gap-4'>
                   <div className=' flex items-center gap-2 bg-[#f9f9f9] rounded-lg text-slate-800 py-2 px-5'>
                   <input type="search" className='bg-transparent py-2 px-5' placeholder='What are you looking for?'/>
                    <button> <FaSearch className='!text-black'/></button>
                   </div>
                    <Link href='/'>
                        <Image src='/header/Wishlist.svg' width={32} height={32} alt='cart'/>
                    </Link>
                    <Link href='/'>
                        <Image src='/header/Cart1.svg' width={32} height={32} alt='cart'/>
                    </Link>
                </div>
           </navbar>
        </section>
    );
};

export default Header;