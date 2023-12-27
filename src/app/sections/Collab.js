import Image from "next/image";
import Brands from '../public/brands.png'

const Collab = () => {
    return (
        <div>
            <h1 id="brand-header" className='text-4xl px-[7rem] font-bold text-white pt-16'>You’re  in safe hands, some of the companies we have worked with.</h1>
            <div className="brand">
                <Image className=" mt-16 ml-[7rem] w-[70rem]" src={Brands} alt="img"/>
            </div>
            <div id="details" className="flex justify-around mt-16 px-[7rem] flex-wrap">
                <div className="card-1">
                    <h3 className="text-violet-700 font-bold text-5xl ">120+</h3>
                    <p className="text-white">Vulnerabilities Found</p>
                </div>
                <div className="card-2">
                    <h3 className="text-violet-700 font-bold text-5xl ">1M +</h3>
                    <p className="text-white">Private Data Saved</p>
                </div>
                <div className="card-3">
                    <h3 className="text-violet-700 font-bold text-5xl ">~ 20h</h3>
                    <p className="text-white">For First Critical Bug</p>
                </div>
                <div className="card-4">
                    <h3 className="text-violet-700 font-bold text-5xl ">100%</h3>
                    <p className="text-white">Recurring Client</p>
                </div>
            </div>
        </div>
    )
}

export default Collab
