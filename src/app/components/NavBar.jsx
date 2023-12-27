import Link from 'next/link';

const NavBar = () => {
    return (
        <nav className='flex justify-between bg-gray-950 h-[5rem] p-8 px-[10rem] items-center'>
            <h2 id='logo' className='text-white font-bold'>SecureMeOrg</h2>
            <div className="left flex justify-center items-center">
                <div id="links" className='flex'>
                    <ul className='px-5'>
                        <li className=''>
                            <Link href="/" className='text-white pr-7'>
                                Home
                            </Link>
                            <Link href="/price" className='text-white pr-7'>
                                Pricing
                            </Link>
                            <Link href="/blog" className='text-white'>
                                Blogs
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="box px-5 rounded-lg py-3 border-solid border-2 border-green-500">
                    <button className='text-white'>Talk to us</button>
                </div>
            </div>

        </nav>
    );
};

export default NavBar;
