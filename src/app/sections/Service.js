import Image from "next/image";
import cloud from "../public/cloudsecurity.png";
import vapt from "../public/vapt.png";
import traning from "../public/traning.png";
import content from "../public/content.png";

const Service = () => {
    return (
        <div id="service-tab" className="px-[7rem]">
            <div id="service-heading" className="w-96">
                <h1 className="text-white font-bold text-4xl">Our services for your <span className="text-green-600">cyber security</span></h1>
            </div>
            <div id="service-img" className="flex flex-wrap flex-row gap-5 items-center justify-center mt-20">
                <Image className="service-img h-96 w-auto" src={cloud} alt="img"/>
                <Image className="service-img h-96 w-auto" src={vapt} alt="img"/>
                <Image className="service-img h-96 w-auto" src={traning} alt="img"/>
                <Image className="service-img h-96 w-auto" src={content} alt="img"/>
            </div>
        </div>
    )
}

export default Service
