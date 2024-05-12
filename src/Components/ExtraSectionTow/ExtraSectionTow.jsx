
import './Extra.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
const ExtraSectionTow = () => {
    Aos.init({ duration: 2000 })
    return (
        <div className='bg-[#fdffff69]'>
           
            <div className=' w-10/12 pb-16 m-auto'>
                <div data-aos="fade-down"> <img className="w-28 m-auto" src="https://i.ibb.co/KsbgL4k/book-and-studen-logo-free-vector.jpg" alt="" /></div>

                <div data-aos="fade-up">
                <h2 className=" text-center poetsen  mb-2 text-2xl ">LATEST Book</h2>
                <p className='md:w-[500px] text-[#8b8787] m-auto pb-10 text-center'>
                    Books enrich our lives, offering portals to new worlds, knowledge, and perspectives, shaping our thoughts and fostering empathy</p>
                </div>
               <div data-aos="zoom-in" className="flex justify-around gap-5 md:flex-row flex-col">
              
               <div className=" text-center rounded border-[#61f0fa65] border-4">
                    <img className=" w-full md:w-80 h-60" src="https://i.ibb.co/kqPkxzW/book-mock-up-cover-design-template-a7f7ab57b631e4e77b743bf51f5b5d38-screen.jpg" alt="" />
                    <div className="bg-gradient-to-r from-[#AF44AE] to-[#F3429C] ">
                    <div className="text-center flex justify-center gap-2 py-2 rounded-b-lg">
                    <h2 className="flex items-center text-center text-[#a2f158] font-bold italic gap-2">Author Name :-</h2>
                    <span className="text-white text-lg font-semibold">Samantha Greenwood</span>
                    </div>
                             <button className="  my-2 bg-gradient-to-r hh btn from-[#58dbec] to-[#c8f132] font-bold  px-4 rounded ">View Detels</button>
                    </div>
                </div>
               <div className=" text-center rounded border-[#61f0fa65] border-4">
                    <img className="w-full md:w-80 h-60" src="https://i.ibb.co/frZXGzJ/the-new-book-jkr.jpg" alt="" />
                    <div className="bg-gradient-to-r from-[#AF44AE] to-[#F3429C] ">
                    <div className="text-center flex justify-center gap-2 py-2 rounded-b-lg">
                    <h2 className="flex items-center text-center text-[#a2f158] font-bold italic gap-2">Author Name :-</h2>
                    <span className="text-white text-lg font-semibold">Samantha Greenwood</span>
                    </div>
                             <button className="  my-2 bg-gradient-to-r hh btn from-[#58dbec] to-[#c8f132] font-bold  px-4 rounded ">View Detels</button>
                    </div>
                </div>
               <div className=" text-center rounded border-[#61f0fa65] border-4">
                    <img className="w-full md:w-80 h-60" src="https://i.ibb.co/bNgGYwh/geometric-single-color-winter-book-cover-template-23-2148806044.jpg" alt="" />
                    <div className="bg-gradient-to-r from-[#AF44AE] to-[#F3429C] ">
                    <div className="text-center flex justify-center gap-2 py-2 rounded-b-lg">
                    <h2 className="flex items-center text-center text-[#a2f158] font-bold italic gap-2">Author Name :-</h2>
                    <span className="text-white text-lg font-semibold">Samantha Greenwood</span>
                    </div>
                             <button className="  my-2 bg-gradient-to-r hh btn from-[#58dbec] to-[#c8f132] font-bold  px-4 rounded ">View Detels</button>
                    </div>
                </div>
               </div>
            </div>
        </div>
    );
};

export default ExtraSectionTow;