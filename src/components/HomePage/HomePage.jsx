
import About from "./About/About";
import Banner from "./Banner/Banner";
import Contact from "./Contact/Contact";
import Education from "./Education/Education";
import Project from "./Project/Project";
import Skills from "./Skills/Skills";


const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Education></Education>
            <Skills></Skills>
            <Project></Project>
            <Contact></Contact>
        </div>
    );
};

export default HomePage;