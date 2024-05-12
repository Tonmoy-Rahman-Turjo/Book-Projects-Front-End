

import { FaStarOfLife } from "react-icons/fa";
import background from './../assets/360_F_688663136_CYDZXf10utvUG7QScsByISc5AaEDf68F.jpg'
import { useTypewriter } from 'react-simple-typewriter'
import logo from './../assets/png-clipart-logo-book-cartoon-books-cartoon-character-supplies.png'
import UseAuth from "../Reuse/UseAuth/UseAuth";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const Update = () => {
    const [book, setBooks] = useState()
    const{id} = useParams()
    // console.log(id)
    const [text] = useTypewriter({
        words: ['pdate your book'],
        loop: 200
    })
    const handelbookAdd = event => {
        event.preventDefault()
        const form = event.target;
        const photourl = form.photourl.value;
        const name = form.name.value;
       
        const author = form.author.value;
        const category = form.category.value;
        const rating = parseInt(form.rating.value);
       
        const updateBook = { photourl, name, author, category, rating}
      
        fetch(`http://localhost:5000/updates/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateBook)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
           
           
    }
    useEffect(()=>{
        fetch(`http://localhost:5000/update/${id}`) 
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            setBooks(data)
        })       
    },[id])
    
    return (
        <div className="py-20 pb-28   " style={{
            backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover'
        }}  >
            <div className="Lg:w-8/12 w-10/12 m-auto rounded-md   bg-[#f7f8f8fb]">

                <div className="bg-red-700 py-4 flex justify-center items-center gap-2 bg-gradient-to-r from-[#86ccec] to-[#fd1e43] rounded-t-lg ">
                    <img className="w-12 rounded-lg h-12 m-auto" src={logo} alt="" />
                    <h2 className="text-center text-white text-3xl font-bold">U{text}</h2>
                    <img className="w-12 h-12 rounded-lg m-auto" src={logo} alt="" />
                </div>
                <form onSubmit={handelbookAdd} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <div className="flex">
                                <span className="label-text font-bold">Img</span>
                                <span className="text-red-800 text-[8px]"><FaStarOfLife /></span>
                            </div>
                        </label>
                        <input type="text" placeholder="Img-URL" name="photourl" className="input input-bordered bg-[#8987ff3d]" required />
                    </div>
                    <div className="flex flex-col lg:flex-row gap-10 ">

                        <div className="form-control lg:w-1/2">
                            <label className="label">
                                <div className="flex">
                                    <span className="label-text font-bold">Name</span>
                                    <span className="text-red-800 text-[8px]"><FaStarOfLife /></span>
                                </div>
                            </label>
                            <input type="text" placeholder=" Type a Book Name" name="name" className="input input-bordered text-white bg-[#48eefa44]" required />
                        </div>
                        <div className="form-control w-full lg:w-1/2">
                            <label className="label">
                                <div className="flex">
                                    <span className="label-text font-bold">Author Name</span>
                                    <span className="text-red-800 text-[8px]"><FaStarOfLife /></span>
                                </div>
                            </label>
                            <input type="text" placeholder=" Type a Book Name" name="author" className="input input-bordered text-white font-bold bg-[#48eefa44]" required />
                        </div>

                    </div>
                    <div className="flex flex-col lg:flex-row items-center gap-10 ">
                        <div className="form-control lg:w-1/2">
                            <label className="label">
                                <div className="flex">
                                    <span className="label-text font-bold">Rating</span>
                                    <span className="text-red-800 text-[8px]"><FaStarOfLife /></span>
                                </div>
                            </label>
                            <input type="text" placeholder=" Rating" name="rating" className="input input-bordered text-white font-bold bg-[#48eefa44]" required />
                        </div>

                        <div className="form-control w-full lg:w-1/2">
                            <label className="label">
                                <div className="flex">
                                    <span className="label-text font-bold">Category Select</span>
                                    <span className="text-red-800 text-[8px]"><FaStarOfLife /></span>
                                </div>
                            </label>
                            <select

                                name="category"

                                className=" p-3 bg-[#48eefa44]  border-2  rounded-md "
                                required
                                type="text"
                                placeholder="category">
                                <option value="nove" selected>Nove</option>
                                <option value="thriller" selected>Thriller</option>
                                <option value="history" selected> History </option>
                                <option value="drama" selected> Drama</option>
                                <option value="sci-Fi," selected> Sci-Fi</option>


                            </select>
                        </div>
                    </div>
                  

                    <button className="btn bg-gradient-to-r from-[#5ff35f] to-[#F3429C] rounded-t-lg my-3 font-bold italic text-white text-2xl lg:w-[300px] m-auto">Update</button>

                </form>
            </div>
        </div>
    );
};

export default Update;