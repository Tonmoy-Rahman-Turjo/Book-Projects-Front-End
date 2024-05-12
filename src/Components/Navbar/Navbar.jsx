import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import './Nav.css'
import { IoMdMenu } from "react-icons/io";
import { IoClose } from 'react-icons/io5';
import UseAuth from "../../Reuse/UseAuth/UseAuth";
import { IoIosUnlock } from "react-icons/io";
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
import logo from './../../assets/png-clipart-logo-book-cartoon-books-cartoon-character-supplies.png'
const Navbar = () => {
    const { user, logOut } = UseAuth()
    const [open, setOpen] = useState(false)
  
    const [theme, setTheme] = useState('light')
      useEffect(()=>{
        localStorage.setItem('theme', theme)
        const localtheme = localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-theme', localtheme)
      },[theme])
      
    const handeltogol = (e) =>{
    //   console.log(e.target.checked)
      if(e.target.checked){
        setTheme('retro')
      }
      else{
        setTheme('light')
      }
      
    }
    // console.log(theme)
    //  console.log(handeltogol)
    return (
        <div>
            <div className="flex   py-3 my5 bg-[#4fe7d36e] bg-gradient-to-r from-[#e05ea667] to-[#8abb3056] justify-around items-center">
                <div className="flex  items-center gap-2"> 
                    <img className="w-10 h-10 m-auto rounded-full" src={logo} alt="" />
                    <h2 className="lg:text-3xl text-base font-extrabold italic bg-gradient-to-r from-[#0c1bf0] to-[#42dbba] bg-clip-text text-transparent briemhand ">Book World</h2>
                </div>
                {/* scend */}
                <div className="item">

                    <ul className="flex gap-5">
                        <NavLink className={({ isActive }) => isActive ? 'border-b-4 border-red-500 text-green-500 itelic font-extrabold' : ' text-[#fff] poetsen text-lg '} to="/">Home</NavLink>


                        {
                            user && <ul className="flex gap-5 roboto italic font-bold">
                                <NavLink className={({ isActive }) => isActive ? 'border-b-4 border-red-500 text-green-500 itelic font-extrabold' : ' text-[#fff] text-lg' } to="/addbook">Add Book</NavLink>
                                <NavLink className={({ isActive }) => isActive ? 'border-b-4 border-red-500 text-green-500 itelic font-extrabold' : ' text-[#fff] text-lg' } to="/allbooks">All Books</NavLink>
                                <NavLink className={({ isActive }) => isActive ? 'border-b-4 border-red-500 text-green-500 itelic font-extrabold' : ' text-[#fff] text-lg' } to="/borrowedbooks">Borrowed Books</NavLink>

                            </ul>
                        }
                        <NavLink className={({ isActive }) => isActive ? 'border-b-4 border-red-500 text-green-500 itelic font-extrabold ' : ' text-[#fff] flex gap-5 roboto italic text-lg font-bold'} to="/register">Register</NavLink>
                    </ul>
                </div>

                {/* thard */}
                <div className="flex items-center gap-3" >
                    <div className="then">
                        <div className="" onClick={() => setOpen(!open)}>
                            {
                                open === true ? <IoMdMenu /> : <IoClose className=" md:hidden"></IoClose>
                            }

                        </div>
                        <ul className={` flex flex-col text-2xl mt-4 md:flex-row items-center z-50 md:bg-white bg-[#63b7e7c0] p-2 rounded 
                 text-[rgba(19, 19, 19, 0.80)] absolute     md:mt-0 text-center  md:justify-center md:static  gap-5 ${open ? '-top-96' : ''}`}>
                    <NavLink className={({ isActive }) => isActive ? 'border-b-4 border-red-500 text-green-500 itelic font-extrabold' : ' text-[#fff] text-lg' } to="/">Home</NavLink>
                         {
                            user &&  <div className="flex flex-col">
                            
                              <NavLink className={({ isActive }) => isActive ? 'border-b-4 border-red-500 text-green-500 itelic font-extrabold' : ' text-[#fff] text-lg' } to="/addbook">Add Book</NavLink>
                              <NavLink className={({ isActive }) => isActive ? 'border-b-4 border-red-500 text-green-500 itelic font-extrabold' : ' text-[#fff] text-lg' } to="/allbooks">All Books</NavLink>
                              <NavLink className={({ isActive }) => isActive ? 'border-b-4 border-red-500 text-green-500 itelic font-extrabold' : ' text-[#fff] text-lg' } to="/borrowedbooks">Borrowed Books</NavLink>
                            </div>
                         }
                         <NavLink className={({ isActive }) => isActive ? 'border-b-4 border-red-500 text-green-500 itelic font-extrabold ' : ' text-[#fff] flex gap-5 roboto italic font-bold'} to="/register">Register</NavLink>
                        </ul>
                    </div>
                    <div className="flex gap-4 items-center">
                    <label className="cursor-pointer grid place-items-center">
  <input type="checkbox" onChange={handeltogol} value="synthwave" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"/>
  <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
  <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
</label>


                        {

                            user ? <div   className="dropdown   bg-gradient-to-r shadow-xl from-[#01ABA2] to-[#18f0d3]  w-12 h-12 m-auto items-center  z-50 rounded-full dropdown-end">
                                <label tabIndex={0} className="btn btn-circle btn-ghost avater" >
                                    <div className=" flex justify-center relative rounded-full"  >
                                             
                                           
                                        <div className=" w-10 hover:{user.displyName}">


                                            <a
                                                data-tooltip-id="my-tooltip"
                                                data-tooltip-content={user.displayName}
                                                data-tooltip-place="left"
                                            >
                                        

                                                {
                                                    user ? <img className="w-10 rounded-full" src={user.photoURL} alt="" />
                                                        : 
                                                        <p className="bg-red-700 w-24 h-24 rounded-full"></p>
                                                }
                                            </a>
                                            <Tooltip id="my-tooltip" />

                                        </div>

                                    </div>
                                </label>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li><button>{user.email}</button></li>
                                    <li><button className="text-center font-bold" onClick={logOut}>logOut</button></li>
                                </ul>

                            </div>



                                : <Link to="/login"><button className="btn shadow-md shadow-[#686565] bg-gradient-to-r from-[#01ABA2] to-reed-500  hover:bg-green-700 bg-[]  text-white  font-extrabold italick rounded-full border-4 border-white "><span className=" btns text-[#db4242] lg:bg-white p-2 rounded-full bg-gradient-to-r from-[#01ABA2] to-reed-500  "><IoIosUnlock /> </span>Login Now </button></Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;