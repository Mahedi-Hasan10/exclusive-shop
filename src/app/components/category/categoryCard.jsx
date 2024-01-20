import { IoIosPhonePortrait } from "react-icons/io";
const CategoryCard = () => {
    return (
        <div className="w-[170px] h-[145] border-2 flex flex-col items-center justify-center px-10 py-6 gap-4 hover:bg-[#db4444] hover:text-white cursor-pointer rounded-md">
            <div className="text-[56px]"> 
            <IoIosPhonePortrait  />
            </div>

            <h3 className="text-base font-normal">Phone</h3>
        </div>
    );
};

export default CategoryCard;