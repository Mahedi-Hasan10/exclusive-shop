import { FaTruckFast } from "react-icons/fa6";

const ServiceCard = () => {
    return (
        <div className="">
            <div className="mx-auto h-[80px] w-[80px] bg-[#c1c0c1] rounded-full flex items-center justify-center">
                <div className="text-white text-[40px] h-[60px] w-[60px] bg-black rounded-full flex items-center justify-center">
                    <FaTruckFast/>
                </div>
            </div>
            <h2 className="text-[20px] font-semibold leading-7 mt-6 mb-2">FREE AND FAST DELIVERY</h2>
            <p className="leading-5">Free delivery for all orders over $140</p>
        </div>
    );
};

export default ServiceCard;