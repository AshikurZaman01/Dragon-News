import React from 'react';
import Marquee from 'react-fast-marquee';

const BreakingNews = () => {
    return (
        <div className='flex justify-center items-center my-4'>
            <div className='w-[180px] bg-pink-400 text-center p-3 rounded text-white font-poppins'>
                Breaking News
            </div>
            <Marquee pauseOnHover={true} className='text-xl mx-4' gradient={false}>
                <p className="mr-4">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...
                </p>
            </Marquee>
        </div>
    );
};

export default BreakingNews;
