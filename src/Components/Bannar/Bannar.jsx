import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination,  A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useTypewriter } from 'react-simple-typewriter'
import { Autoplay } from 'swiper/modules';

const Bannar = () => {
    const [text] = useTypewriter({
        words: [ 'ind Your Next Favorite Book Today'],
        loop: 120,
        typeSpeed:80,
        delaySpeed:50,
       
        // onLoopDone: () => console.log(`loop completed after 120 runs.`)
    })




    return (
        <div>
             <div  className='w-11/12 my-10 rounded m-auto'>
             <Swiper

       modules={[Navigation, Autoplay, Pagination,  A11y]}
      spaceBetween={0}
      slidesPerView={1}
      centeredSlides={true}
      navigation={true}
      pagination={{ clickable: true }}
      
    //   onSlideChange={() => console.log('slide change')}
    //   onSwiper={(swiper) => console.log(swiper)}
      autoplay={true}
      
    //   className="mySwiper"
        
    >
       
      <SwiperSlide >  
           <div className=' h-96 lg:h-[400px]  fit lg:height-[2200px] rounded-md items-center flex justify-center' style={{backgroundImage: `url(https://i.ibb.co/wRtrz3H/public-library-with-many-books-shelves-107791-26807.jpg)`, backgroundRepeat:'no-repeat',  backgroundSize:"cover", backgroundAttachment:'fixed',  backgroundPositionY:'', backgroundPosition:'center' , width:'full' } }>
           <div className=' py-20 items-center'>
            <h2 className='md:text-5xl text-lg  text-white font-extrabold'> Welcome our Book Web site</h2>
            <p className=' text-[#e6f17d8c] font-extrabold text-3xl w-52 sm:w-full  m-auto'>
               
                <span className='text-[#6ce724] font-bold md:text-2xl text-center'>
               F{text}
                </span>
            </p>
           </div>
           </div>
       </SwiperSlide>
       <SwiperSlide >  
           <div className='  h-96 lg:h-[400px] fit lg:height-[2200px] rounded-md items-center flex justify-center' style={{backgroundImage: `url(https://i.ibb.co/C5MDtvv/young-woman-home-library-writing-with-wine-107791-5840.jpg)`, backgroundRepeat:'no-repeat',  backgroundSize:"cover", backgroundAttachment:'fixed',  backgroundPositionY:'', backgroundPosition:'center' , width:'full' } }>
           <div className=' py-20 items-center'>
            <h2 className='md:text-5xl text-lg  text-white font-extrabold'>Find Your Story
                 </h2>
            <p className=' text-[#e6f17d8c] font-extrabold text-3xl w-52 sm:w-full  m-auto'>
               
                <span className='text-[#2cff1986] font-bold md:text-2xl text-center'>
                Explore New Releases and Bestselling Books
                </span>
            </p>
           </div>
           </div>
       </SwiperSlide>
       <SwiperSlide >  
           <div className='  h-96 lg:h-[400px] fit lg:height-[2200px] rounded-md items-center flex justify-center' style={{backgroundImage: `url(https://i.ibb.co/VpFP7S8/3d-rendering-classic-interior-23-2150943461.jpg)`, backgroundRepeat:'no-repeat',  backgroundSize:"cover", backgroundAttachment:'fixed',  backgroundPositionY:'', backgroundPosition:'center' , width:'full' } }>
           <div className=' py-20 items-center'>
            <h2 className='md:text-5xl text-lg  text-white font-extrabold'>Books for Everyone </h2>
            <p className=' text-[#e6f17d8c] font-extrabold text-3xl w-52 sm:w-full  m-auto'>
               
                <span className='text-[#6dce4f86] font-bold md:text-2xl text-center'>
                Discover Your Next Great Read Here
                </span>
            </p>
           </div>
           </div>
       </SwiperSlide>
      
     
    
   

    
         
    
    </Swiper>
        </div>
        </div>
    );
};

export default Bannar;