import React from 'react';

const HeroAside = () => {
    return (
        <div>
            <ul className='flex flex-col gap-4 pt-[40px] border-r pr-5'>
                <li className='cursor-pointer hover:text-slate-500'>Womens&apos;s Fashion</li>
                <li className='cursor-pointer hover:text-slate-500'>Men&apos;s Fashion</li>
                <li className='cursor-pointer hover:text-slate-500'>Electronics</li>
                <li className='cursor-pointer hover:text-slate-500'>Home and Lifestyles</li>
                <li className='cursor-pointer hover:text-slate-500'>Medicine</li>
                <li className='cursor-pointer hover:text-slate-500'>Sports And Outdoors</li>
                <li className='cursor-pointer hover:text-slate-500'>Baby&apos;s And Toys</li>
                <li className='cursor-pointer hover:text-slate-500'>Gloceries And Pets</li>
                <li className='cursor-pointer hover:text-slate-500'>Health And Beauty</li>
            </ul>
        </div>
    );
};

export default HeroAside;