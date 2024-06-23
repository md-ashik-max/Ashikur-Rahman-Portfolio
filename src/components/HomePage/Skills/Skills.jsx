"use client";
import Image from "next/image";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";


const Skills = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <div id="skills" className="my-24 max-w-6xl mx-auto">
            <div className="grid grid-cols-3 md:grid-cols-6 gap-12">
                <div data-aos="fade-up">
                    <Image
                        src="https://i.ibb.co/KxTZ07w/js.png"
                        alt="Frontend developer"
                        width={120}
                        height={120}
                    />
                </div>
                <div data-aos="fade-up">
                    <Image
                        src="https://i.ibb.co/QvhsqsF/html-5.png"
                        alt="Frontend developer"
                        width={120}
                        height={120}
                    />
                </div>
                <div data-aos="fade-up">
                    <Image
                        src="https://i.ibb.co/Hq3S2h6/css-3.png"
                        alt="Frontend developer"
                        width={120}
                        height={120}
                    />
                </div>
                <div data-aos="fade-up">
                    <Image
                        src="https://i.ibb.co/dJjv6f9/tailwind-css.png"
                        alt="Frontend developer"
                        width={120}
                        height={120}
                    />
                </div>
                <div data-aos="fade-up">
                    <Image
                        src="https://i.ibb.co/WBLHmdn/react-js-removebg-preview-1.png"
                        alt="Frontend developer"
                        width={120}
                        height={120}
                    />
                </div>
                <div data-aos="fade-up">
                    <Image
                        src="https://i.ibb.co/Qnrx4Vj/Screenshot-56-removebg-preview.png"
                        alt="Frontend developer"
                        width={120}
                        height={120}
                    />
                </div>
            </div>
            <div className="flex justify-center items-center my-12 gap-6 lg:gap-20">

                <div data-aos="fade-up">
                    <Image
                        src="https://i.ibb.co/MMKCYv7/png-transparent-mmongodb-removebg-preview.png"
                        alt="Frontend developer"
                        width={120}
                        height={120}
                    />
                </div>
                <div data-aos="fade-up">
                    <Image
                        src="https://i.ibb.co/ZN24dP1/firebase-removebg-preview.png"
                        alt="Frontend developer"
                        width={240}
                        height={240}
                    />
                </div>
                <div data-aos="fade-up">
                    <Image
                        src="https://i.ibb.co/tx3LD9m/next-removebg-preview.png"
                        alt="Frontend developer"
                        width={120}
                        height={120}
                    />
                </div>
            </div>

        </div>
    );
};

export default Skills;