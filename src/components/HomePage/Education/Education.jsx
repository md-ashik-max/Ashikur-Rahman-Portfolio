"use client";

import Image from "next/image";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";


const Education = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <div id="education" className="bg-gray-900 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <p className="font-bold text-center">WHAT I HAVE DONE SO FAR</p>
                <h1 className="text-5xl mt-4 font-bold text-white text-center mb-24">Education</h1>
                <div className="relative flex flex-col items-center">
                    <div className="absolute border-l-8 border-white h-full left-1/2 transform -translate-x-1/2"></div>


                    <div className="flex justify-between items-center w-full mb-8">
                        <div data-aos="fade-right" className="flex justify-start w-1/2 pr-16">
                            <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full border-b-4 border-white">
                                <h3 className="text-2xl font-bold text-white">Web Development Course</h3>
                                <p className="text-gray-400">Programming Hero</p>
                                <ul className="list-disc list-inside text-gray-300 mt-4">
                                    <li>Gained proficiency in HTML, CSS, JavaScript, and React.</li>
                                    <li>Developed dynamic and responsive web applications.</li>
                                    <li>Worked on multiple projects, enhancing practical skills.</li>
                                    <li>Focused on creating user-friendly and efficient web solutions.</li>
                                    <li>Learned version control using Git and GitHub for collaborative development.</li>

                                </ul>
                                <p className="text-gray-500 mt-4">December 30, 2023 - June 21, 2024</p>
                            </div>
                        </div>

                        <div className="absolute left-1/2 top-4 -ml-10">
                            <div className="bg-white w-20 h-20 p-1 rounded-full border-4 border-gray-700">
                                <Image
                                    className="rounded-full w-16 h-16 "
                                    src="https://i.ibb.co/6B3tp34/profile.png"
                                    alt="Icon"
                                    width={48}
                                    height={48}
                                />
                            </div>
                        </div>
                    </div>


                    <div className="flex justify-end items-center w-full mb-8">
                        <div className="absolute left-1/2 top-1/4 -ml-10">
                            <div className="bg-white w-20 h-20 p-1 rounded-full border-4 border-gray-700">
                                <Image
                                    className="rounded-full w-16 h-16 "
                                    src="https://i.ibb.co/6B3tp34/profile.png"
                                    alt="Icon"
                                    width={48}
                                    height={48}
                                />
                            </div>
                        </div>
                        <div className="flex justify-start w-1/2 pl-16">
                            <div data-aos="fade-left" className="bg-gray-800 p-6 rounded-lg shadow-lg w-full border-b-4 border-white">
                                <h3 className="text-2xl font-bold text-white">React Developer</h3>
                                <p className="text-gray-400">Self Learning</p>
                                <ul className="list-disc list-inside text-gray-300 mt-4">
                                    <li>Building robust and scalable web applications using React.js.</li>
                                    <li>Collaborating with UI/UX designers and backend developers.</li>
                                    <li>Translating design mockups and wireframes into high-quality code.</li>
                                    <li>Implementing seamless user interfaces and front-end components.</li>
                                </ul>
                                <p className="text-gray-500 mt-4">September 2023 - October 2023</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center w-full mb-8">
                        <div data-aos="fade-right" className="flex justify-end w-1/2 pr-16">
                            <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full border-b-4 border-white">
                                <h3 className="text-2xl font-bold text-white">MERN Stack Developer</h3>
                                <p className="text-gray-400">Self Employed</p>
                                <ul className="list-disc list-inside text-gray-300 mt-4">
                                    <li>Creating full-stack web applications using the MERN technology stack.</li>
                                    <li>Developing RESTful APIs and implementing data management solutions.</li>
                                    <li>Collaborating with cross-functional teams to design and develop user-centric interfaces.</li>
                                    <li>Deploying and maintaining applications on cloud platforms.</li>
                                </ul>
                                <p className="text-gray-500 mt-4">November 2023 - December 2023</p>
                            </div>
                        </div>
                        <div className="absolute left-1/2 top-1/2 -ml-10">
                            <div className="bg-white w-20 h-20 p-1 rounded-full border-4 border-gray-700">
                                <Image
                                    className="rounded-full w-16 h-16 "
                                    src="https://i.ibb.co/6B3tp34/profile.png"
                                    alt="Icon"
                                    width={48}
                                    height={48}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end items-center w-full mb-8">
                        <div className="flex justify-end w-1/2 pl-16">
                            <div data-aos="fade-left" className="bg-gray-800 p-6 rounded-lg shadow-lg w-full border-b-4 border-white">
                                <h3 className="text-2xl font-bold text-white">Diploma in Engineering in Electronics Technology</h3>
                                <p className="text-gray-400">Sylhet Polytechnic Institute</p>
                                <ul className="list-disc list-inside text-gray-300 mt-4">
                                    <li>CGPA: 3.83</li>
                                    <li>Comprehensive study in electronics and engineering principles.</li>
                                    <li>Hands-on experience with electronic systems and technology.</li>
                                    <li>Collaborated with peers on various technical projects.</li>
                                </ul>
                                <p className="text-gray-500 mt-4">2018 - 2022</p>
                            </div>
                        </div>
                        <div className="absolute left-1/2 top-3/4 -ml-10">
                            <div className="bg-white w-20 h-20 p-1 rounded-full border-4 border-gray-700">
                                <Image
                                    className="rounded-full w-16 h-16 "
                                    src="https://i.ibb.co/6B3tp34/profile.png"
                                    alt="Icon"
                                    width={48}
                                    height={48}
                                />
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Education;