import logo from './../../assets/png-clipart-logo-book-cartoon-books-cartoon-character-supplies.png'
import './Footer.css'
// import footer from '../../assets/footer-wave-blue-page-divider-11562998929llabhpuc5d.png';

import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";
const Footer = () => {
    return (
        
        <div className=" font-bold relative text-center pb-2  bg-gradient-to-r from-[#5aee73b0] to-[#6ff7f0a4]  ">
            <div  className='absolute flex justify-center w-full top-[-30px] m-auto'>
            
                {/* <h2 className='text-center bg-green-800 desing  p-4 w-96 m-auto'>TonmoY AHosan</h2> */}
                <div className='flex bg-green-800 px-16 py-2 shadow-2xl shadow-purple-700  bg-gradient-to-r from-[#a3e069] to-[#f09833]  desing items-center justify-center gap-5'>
            <img className='h12 w-12  rounded-full' src={logo} alt="" />
               <h2 className="lg:text-3xl text-base font-extrabold italic bg-gradient-to-r from-[#0c1bf0] to-[#5bdb42] bg-clip-text text-transparent briemhand ">Read in the name of your Lord</h2>
            </div>
          
        
            </div>
            <div className="flex md:flex-row flex-col justify-around pt-24">
           <div>
           <div className='flex items-center justify-center gap-5'>
            <img className='h12 w-12  rounded-full' src={logo} alt="" />
               <h2 className="lg:text-3xl text-base font-extrabold italic bg-gradient-to-r from-[#0c1bf0] to-[#5bdb42] bg-clip-text text-transparent briemhand "> Book World</h2>
            </div>
              <div className='md:bg-white rounded-lg my-2 shadow-2xl shadow-blue-400'>
                <input type="email" name="email" className='p-2 rounded-l-md outline-0' placeholder='Type your email' id="" />
                <button className='bg-[#b33232] text-white rounded-r-md p-2'>Subscribe</button>
              </div>
           </div>
            <div className=''>
                
                <h2 className="border-b-4 text-2xl  text-bold italic poetsen">Contrat</h2>
                <div className=" flex flex-col justify-center items-center pb-4 text-center">
               <div className="flex gap-3   text-center items-center py-2">
                    <h2 className=" text-red-600 text-2xl"><FaPhoneAlt /></h2>
                    <h2 className="text-white "> 01787079828 </h2>
                </div>
                <div className="flex gap-3 items-center  text-centerpb-5">
                    <h2 className=" text-red-600 text-center text-2xl"><MdMarkEmailUnread /></h2>
                    <h2 className="text-white  text-center"> tonmoy9828@gmail.com</h2>
                </div>
               </div>
            
            </div>
            <div>
                <h2 className="border-b-4 text-2xl  text-bold italic poetsen">Location</h2>
                <div className='mt-3'>
                    <h2 className='text-white italic'>DHaka-1205,Mirpur</h2>
                    <h2 className='text-white italic'>Dhaka bangladesh</h2>
                </div>
            </div>
            <div>
                <h2 className='border-b-4 text-2xl  text-bold italic poetsen'>Socail Media</h2>
                <div className=" flex gap-3 py-3 justify-center">
               <span className=" bg- bg-white cursor-pointer rounded-full text-blue-600 text-4xl">  < FaFacebook /></span>
                 <span className=" text-white cursor-pointer text-4xl"> <FaGithub /></span>
               <span className="text-4xl cursor-pointer bg-white rounded-md text-blue-600"> <FaLinkedin /></span>
                </div>
            </div>
        </div>
       <div className='border-t-4 w-11/12 m-auto mt-7'>
           <h2 className='flex justify-center my-4 mt-5 gap-2 text-[#949090]'> All copyright reserved &#169; <span className='flex gap-2 text-base font-extrabold italic bg-gradient-to-r from-[#0c1bf0] to-[#5bdb42] bg-clip-text text-transparent briemhand '>  <img className='h-7 w-7 rounded-full ' src={logo} alt="" /> Book World</span></h2>
       </div>
        </div>
    );
};

export default Footer;