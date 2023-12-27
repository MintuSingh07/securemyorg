const HeroSection = () => {
    return (
        <div id="hero-section" className='flex px-[7rem] flex-col text-center items-center justify-center'>
            <h1 className='hero-text text-white text-[3.9rem] py-14 font-bold'>Enterprise Security in 3 Simple Steps</h1>
            <p className='text-white'>We are your cybersecurity partner, to help you scale securely</p>
            <div id="btn" className='w-[15rem] h-[4rem] bg-white rounded-[1.2rem] font-bold text-2xl flex items-center justify-center mt-16'>
               <button>Book Now</button>
            </div>
        </div>
    )
}

export default HeroSection
