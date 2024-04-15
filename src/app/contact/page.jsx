import Image from "next/image"
import contactImg from "../../../public/images/contact.webp"

const Contact = () => {
  return (
    <div className="bg-black text-white mt-8 md:mt-14 lg:mt-32">
    <div className="container md:flex md:flex-col md:gap-52 lg:flex-row lg:gap-8 lg:mt-20">
        <div className="lg:w-1/2 lg:pr-8 mb-4 lg:mb-0">
            <div className="h-64 lg:h-auto relative">
                <Image
                    src={contactImg}
                    alt="Contact Image"
                    width={675}
                    height={450}
                />
            </div>
        </div>
        <div className="lg:w-1/2 lg:pl-8">
            <form>
                <div className="mb-4">
                    
                    <input type="text" id="name" name="name" placeholder="Enter your name" className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:border-white" />
                </div>
                <div className="mb-4">
                    
                    <input type="email" id="email" name="email" placeholder="Enter your email" className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:border-white" />
                </div>
                <div className="mb-4">
                    
                    <textarea id="message" name="message" rows="4" placeholder="Enter your message" className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:border-white"></textarea>
                </div>
                <button type="submit" className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-800 hover:text-white transition duration-300">Send Message</button>
            </form>
        </div>
    </div>
</div>
  )
}

export default Contact
