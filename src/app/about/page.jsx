import Image from 'next/image';
import aboutImg from "../../../public/images/about.webp"
const About = () => {
    return (
        <div className="container mx-auto py-8 flex flex-col lg:flex-row items-center mt-8 md:mt-14 lg:mt-32">
            <div className="lg:w-1/2 lg:mr-8 mb-4 lg:mb-0">
                <h2 className="md:text-4xl font-semibold mb-4 text-white">About Us</h2>
                <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et sapien ut tortor vestibulum eleifend. Donec vel neque in nisi feugiat scelerisque.</p>
            </div>
            <div className="lg:w-1/2">
                <div className="h-64 lg:h-auto relative">
                    <Image
                        src={aboutImg}
                        alt="About Image"
                        width={450}
                        height={450}
        
                    />
                </div>
            </div>
        </div>
    );
};

export default About;
