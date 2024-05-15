/* eslint-disable react/prop-types */
import { useTypewriter } from 'react-simple-typewriter'
import logo from '../../assets/png-clipart-logo-book-cartoon-books-cartoon-character-supplies.png'
import './bookcard.css'
import { Link } from 'react-router-dom';
import Rating from 'react-rating';
import { FaStar } from "react-icons/fa";
const Bookcard = ({ bookCard }) => {
    const { photourl, name, author, category, rating, _id, contents } = bookCard
    const [text] = useTypewriter({
        words: ['ook Point'],
        loop: 0,
        onDelay: 100,
    })
    return (
        <div>
            <div className='hero '>
                <div className="border-4 shadow-2xl shadow-emerald-950 rounded bg-gradient-to-r from-[#3cccc5] to-[#3ef575] bg-[#e95959] ">

                    <div className='flex gap-3 items-center justify-center'>
                        <h2 className="text-center py-2 italic text-white font-bold">B{text}</h2>
                        <img className='h-8 w-8 rounded-full ' src={logo} alt="" />
                    </div>
                    <div className="pt-5 rounded-t-3xl test bg-white">
                        <div>
                            <img className="md:w-80 rounded w-full m-auto h-60" src={photourl} alt="" />
                        </div>
                        <div>
                            <h2 className="mr-2 text-center font-bese text-[#838080]">Name:- <span className=' font-bold text-[#f16363]'>{name}</span></h2>
                            <h2 className="mr-2 text-center border-b-4 m-2 font-bese pb-2 text-[#838080]">Name Author:-<span className="ml-3  font-bold text-[#f16363]">{author}</span></h2>
                        </div>

                        <div className="flex justify-around">

                            <h2 className="mr-2   font-bese pb-2 font-bold text-[#724dfa] ">Category:-<span className="ml-3 text-green-800 font-bold">{category}</span></h2>
                           <h2 className="mr-2 font-bese pb-2 font-bold text-[#724dfa] ">Rating:-<span className="ml-3 text-green-800"><Rating
                                    emptySymbol={<FaStar color="#ccc" />} 
                                    fullSymbol={<FaStar color="#ffc107" />} 
                                    initialRating={rating}
                                    readonly
                                /></span></h2>
                           
                        </div>
                       
                        <div className="flex justify-center px-3 w-full " >
                            <Link to={`/update/${_id}`}> <button className="btn text-center bts text-white text-lg font-bold w-full bg-gradient-to-r from-[#518edf] to-[#f11fe7] mb-3 ">Update</button></Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Bookcard;