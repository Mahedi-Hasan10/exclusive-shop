import ServiceCard from "./serviceCard";

const ServiceSection = () => {
    return (
        <div className="flex gap-[40px] mb-[140px]">
            <ServiceCard/>
            <ServiceCard/>
            <ServiceCard/>
            <ServiceCard/>
        </div>
    );
};

export default ServiceSection;