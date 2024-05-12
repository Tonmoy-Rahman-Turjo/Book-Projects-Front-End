
import './bookExtra.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { FaHandPointRight } from "react-icons/fa";
const BookExtra = () => {
    Aos.init({ duration: 1000 })
    return (
        <div className="my-10 bg-base-200">
            <div className='mb-16 md:m-0'>
                <div data-aos="fade-down"> <img className="w-28 pt-10 m-auto" src="https://i.ibb.co/Njmw8ng/faq.webp" alt="" /></div>

                <div data-aos="fade-up">
                <h2 className=" text-center poetsen  mb-2 text-2xl ">Books are important part of our life</h2>
                <p className='md:w-[500px] text-[#8b8787] mb-5 m-auto text-center'>
                    Books enrich our lives, offering portals to new worlds, knowledge, and perspectives, shaping our thoughts and fostering empathy</p>
                </div>
            </div>
            <div className="hero mergin-control min-h-screen ">

                <div className="hero-content justify-center border shadow-2xl rounded-md bg-[#fdfcfc] flex-col lg:flex-row">
                    <div className='lg:w-1/2 md:w-full md:relative'>

                        <img src="https://i.ibb.co/BTkHVcb/book-with-words-spring-top-1213494-620.jpg" className="md:w-3/4 rounded-lg shadow-2xl w-80  md:m-0 m-auto" />
                        <img src="https://i.ibb.co/C7j6v4C/syesta-khan-offer-gari.png" className="md:w-1/2 w-80 m-auto md:absolute md:right-7 md:top-1/2 md:border-[10px] border-white  rounded-lg shadow-2xl" />
                    </div>
                    <div className='lg:w-1/2'>
                        <h1 className="text-3xl my-3 text-red-500 font-extrabold">Why books are important in our life</h1>
                        <div className='flex items-center my-2 gap-3'>
                            <h2 className='text-green-800 text-2xl'> <FaHandPointRight /></h2>
                            <h2 className='roboto italic text-[#777272]'><span className='text-[#161af7d2] text-xl'>Knowledge and Education:</span> By reading books we acquire new knowledge and our thoughts and attitudes change as we improve various aspects of our life.</h2>
                        </div>
                        <div className='flex items-center my-2 gap-3'>
                            <h2 className='text-green-800 text-2xl'> <FaHandPointRight /></h2>
                            <h2 className='roboto italic text-[#777272]'><span className='text-[#161af7d2] text-xl'>Confidence and Personality Improvement:</span>While reading books we get to know more about ourselves, which increases our confidence and improves our personality.</h2>
                        </div>
                        <div className='flex items-center my-2 gap-3'>
                            <h2 className='text-green-800 text-2xl'> <FaHandPointRight /></h2>
                            <h2 className='roboto italic text-[#777272]'><span className='text-[#161af7d2] text-xl'>Literary pleasure and pleasure:</span>Reading books gives us mental peace and literary pleasure. It enriches our life and helps us to increase our acquaintance with literary medium.</h2>
                        </div>
                        <div className='flex items-center my-2 gap-3'>
                            <h2 className='text-green-800 text-2xl'> <FaHandPointRight /></h2>
                            <h2 className='roboto italic text-[#777272]'><span className='text-[#161af7d2] text-xl'>World Living and Judgment Preparation:</span>Reading books changes the flow of our thoughts and helps us reason in our minds. It prepares us for salvation and judgment.</h2>
                        </div>
                        <button className="btn bg-[#FF3811] text-white font-bold">Get More Info</button>
                    </div>
                </div>
            </div>






        </div>
    );
};

export default BookExtra;