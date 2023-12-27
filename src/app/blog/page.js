import Link from 'next/link';
import getPostMetadata from "../components/getPostMetadata"
import Image from 'next/image';
import demo from "../public/demo.png"
import NavBar from '@/app/components/NavBar';

const blog = () => {
    const postMetadata = getPostMetadata();
    const postPreviews = postMetadata.map((post, index) => (
        <div key={index}>
            <div id="blog-card" className='min-h-80 w-60 rounded-lg pb-4'>
                <Image src={demo} />
                <div className='flex flex-col pt-10 px-3'>
                    <h1 className='font-bold text-l'>{post.title}</h1>
                    <p className='font-normal mt-3 text-sm'>{post.subtitle}</p>
                    <div id="bottom" className='flex flex-row justify-between items-center '>
                        <p className='font-light mt-3 text-xs'>{post.date}</p>
                        <Link href={`blog/${post.slug}`}>
                            <p className='text-green-600  mt-3'>Read Me</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    ));

    return (
        <div>
            <NavBar />
            <div className='bg-gray-950 min-h-[100vh] text-white flex flex-wrap gap-8 justify-start p-20'>
                {postPreviews}
            </div>
        </div>
    );
};

export default blog;
