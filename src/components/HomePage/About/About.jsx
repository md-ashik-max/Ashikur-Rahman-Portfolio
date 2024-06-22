"use client";

import Image from "next/image";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

const About = () => {
    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <div id="about" className="max-w-6xl mx-6 lg:mx-auto my-24">
            <div>
                <h3 className="text-xl">INTRODUCTION</h3>
                <h1 className="text-5xl font-bold my-4">Overview.</h1>
                <p className="md:w-1/2">I am a skilled software developer specializing in frontend development using the MERN stack. Proficient in HTML, CSS, Tailwind CSS, JavaScript, and React, I craft dynamic web applications with engaging and responsive interfaces. With a strong foundation in Node.js, Express.js, MongoDB, and Firebase, I ensure seamless integration with robust backend systems. My expertise lies in delivering innovative solutions that elevate user experiences and drive business growth. Lets work together to bring your ideas to life and create impactful web applications!</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 my-12">
                <div data-aos="fade-right" data-aos-delay="100" className="py-12 text-center border-2 rounded-3xl px-6 flex flex-col items-center bg-gray-900 transition-transform duration-300 transform hover:scale-110">
                    <Image
                        src="https://i.ibb.co/pX0kj6s/frontend-developer.png"
                        alt="Frontend developer"
                        width={120}
                        height={120}
                    />
                    <h3 className="text-2xl font-bold mt-6">Frontend <br /> Developer</h3>
                </div>
                <div data-aos="fade-right" data-aos-delay="200" className="py-12 text-center border-2 rounded-3xl px-6 flex flex-col items-center bg-gray-900 transition-transform duration-300 transform hover:scale-110">
                    <Image
                        src="https://i.ibb.co/k8tYp8T/react-developer.png"
                        alt="Frontend developer"
                        width={96}
                        height={96}
                    />
                    <h3 className="text-2xl font-bold mt-6">React <br /> Developer</h3>
                </div>
                <div data-aos="fade-right" data-aos-delay="300" className="py-12 text-center border-2 rounded-3xl px-6 flex flex-col items-center bg-gray-900 transition-transform duration-300 transform hover:scale-110">
                    <Image
                        src="https://i.ibb.co/pX0kj6s/frontend-developer.png"
                        alt="Frontend developer"
                        width={120}
                        height={120}
                    />
                    <h3 className="text-2xl font-bold mt-6">Mern Stack <br /> Developer</h3>
                </div>
                <div data-aos="fade-right" data-aos-delay="400" className="py-12 text-center border-2 rounded-3xl px-6 flex flex-col items-center bg-gray-900 transition-transform duration-300 transform hover:scale-110">
                    <Image
                        src="https://i.ibb.co/pX0kj6s/frontend-developer.png"
                        alt="Frontend developer"
                        width={120}
                        height={120}
                    />
                    <h3 className="text-2xl font-bold mt-6">Web <br /> Developer</h3>
                </div>
            </div>
        </div>
    );
};

export default About;
