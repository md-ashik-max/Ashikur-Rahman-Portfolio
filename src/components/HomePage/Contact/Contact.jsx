"use client";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { FaFacebook } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";
import { GrLinkedin } from "react-icons/gr";
import { FaGithub } from "react-icons/fa6";

const Contact = () => {
    useEffect(() => {
        Aos.init();
    }, []);
    return (
        <div id='contact' className="min-h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white">
            <div className='max-w-6xl mx-auto pt-24'>
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div data-aos="fade-right" data-aos-delay="100" className="bg-gray-900 p-10 rounded-lg shadow-lg max-w-lg">
                        <p className='font-bold'>WRITE ME FEEDBACK</p>
                        <h2 className="text-5xl font-bold my-4">Contact Me</h2>
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="mt-1 p-2 block w-full bg-gray-800 rounded-md border border-gray-700 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="What's your full name?"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium">Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="mt-1 p-2 block w-full bg-gray-800 rounded-md border border-gray-700 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="What's your email address?"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium">Your Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    className="mt-1 p-2 block w-full bg-gray-800 rounded-md border border-gray-700 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Write your message and feedback here..."
                                ></textarea>
                            </div>
                            <div className="text-center">
                                <button
                                    type="submit"
                                    className="btn btn-outline btn-info"
                                >
                                    Send
                                </button>
                            </div>
                        </form>
                        <div className="mt-6 flex justify-center space-x-4">
                            <a href="https://www.facebook.com/profile.php?id=100029061466456" className="text-4xl bg-white rounded-full text-blue-400 hover:text-blue-500"><FaFacebook /></a>
                            <a href="#" className="text-4xl bg-white rounded-full text-blue-400 hover:text-blue-500"><AiFillTwitterCircle /></a>
                            <a href="https://www.linkedin.com/in/ashikur-rahman369" className="text-4xl bg-white rounded-full text-blue-400 hover:text-blue-500"><GrLinkedin /></a>
                            <a href="https://github.com/md-ashik-max" className="text-4xl bg-white rounded-full text-blue-400 hover:text-blue-500"><FaGithub /></a>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;