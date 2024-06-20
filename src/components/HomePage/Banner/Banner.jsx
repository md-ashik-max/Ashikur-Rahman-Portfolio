import Image from 'next/image';
import '../../../app/globals.css';

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/f2rrMV0/portfolio-banner.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className='flex flex-col space-y-32'>
                    <div className="flex relative">
                        <div className="absolute flex flex-col items-center">
                            <div className="w-4 h-4 bg-[#0FA4AF] rounded-full"></div>
                            <div className="custom-line mt-2"></div>
                        </div>
                        <h1 className="text-[55px] font-bold text-white z-10 ml-6">
                            Hi, I am <span className="text-[#0FA4AF]">Ashikur Rahman</span>
                        </h1>
                    </div>
                    <Image
                        src="https://i.ibb.co/7rJrZGB/desktop.png"
                        alt="Programming Background"
                        width={800}
                        height={500}
                    />
                </div>
            </div>
        </div>
    );
};

export default Banner;
