"use client";

import Image from "next/image";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";


const Project = () => {
    useEffect(() => {
        Aos.init();
    }, []);
    return (
        <div id="projects" className="max-w-6xl mx-auto pb-24">
            <p className="font-bold">MY WORK</p>
            <h1 className="font-bold text-5xl my-4">Projects.</h1>
            <p className=" md:w-1/2">Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 my-12">
                <a href="https://contest-craze.web.app">
                    <div href="https://github.com/md-ashik-max" data-aos="fade-right" data-aos-delay="100" className="card bg-gray-900 shadow-xl">
                        <figure className="pt-6 px-6">
                            <Image
                                className="w-full h-52 rounded-xl transition-transform duration-300 transform hover:scale-110"
                                src="https://i.ibb.co/yYzKGNW/contest-craze-ss.png"
                                alt="Contest Craze"
                                width={400}
                                height={400}
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="text-2xl font-bold">Contest Craze</h2>
                            <p className="text-sm">Manage contests effortlessly with Contest Craze, crafted with React.js, Tailwind CSS, and DaisyUI for an intuitive experience. Powered by Firebase authentication for security, and a robust backend with Node.js, Express.js, and MongoDB.</p>
                            <p><span className="text-blue-600">#react</span><span className="text-green-600"> #tailwind</span><span className="text-red-600"> #firebase</span><span className="text-yellow-600"> #stripe</span><span className="text-green-600"> #nodejs</span><span className="text-red-600"> #express</span><span className="text-green-600"> #mongodb</span></p>
                        </div>
                    </div>
                </a>
                <a href="https://study-mate-2766f.web.app">
                    <div className="card bg-gray-900 shadow-xl " data-aos="fade-right" data-aos-delay="500">
                        <figure className="pt-6 px-6">
                            <Image
                                className="w-full h-52 rounded-xl transition-transform duration-300 transform hover:scale-110"
                                src="https://i.ibb.co/cTLM2Y4/study-mate-ss.png"
                                alt="Contest Craze"
                                width={400}
                                height={400}
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="text-2xl font-bold">Study Mate</h2>
                            <p className="text-sm">Say goodbye to assignment chaos! Manage tasks effortlessly with Study Mate, crafted with JavaScript, React.js, and Tailwind CSS for an intuitive experience. Powered by Firebase authentication for security, and a robust backend. </p>
                            <p><span className="text-blue-600">#react</span><span className="text-green-600"> #tailwind</span><span className="text-red-600"> #firebase</span><span className="text-green-600"> #nodejs</span><span className="text-red-600"> #express</span><span className="text-green-600"> #mongodb</span></p>
                        </div>
                    </div>
                </a>

                <a href="https://tour-mentor-442d5.web.app">
                    <div className="card bg-gray-900 shadow-xl" data-aos="fade-right" data-aos-delay="900">
                        <figure className="pt-6 px-6">
                            <Image
                                className="w-full h-52 rounded-xl transition-transform duration-300 transform hover:scale-110"
                                src="https://i.ibb.co/Px1J8yD/Screenshot-59.png"
                                alt="Contest Craze"
                                width={400}
                                height={400}
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="text-2xl font-bold">Tour Mentor</h2>
                            <p className="text-sm">Your gateway to immersive journeys! Tour Mentor, built with JavaScript, React.js, HTML, and CSS, offers personalized travel experiences with tailor-made itineraries and real-time updates. Explore your next adventure seamlessly.</p>
                            <p><span className="text-blue-600">#react</span><span className="text-green-600"> #tailwind</span><span className="text-red-600"> #firebase</span><span className="text-green-600"> #nodejs</span><span className="text-red-600"> #express</span><span className="text-green-600"> #mongodb</span></p>
                        </div>
                    </div>
                </a>


            </div>
        </div>
    );
};

export default Project;