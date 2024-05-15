
import { FaStarOfLife } from "react-icons/fa";
import background from './../assets/360_F_688663136_CYDZXf10utvUG7QScsByISc5AaEDf68F.jpg'
import { useTypewriter } from 'react-simple-typewriter'
import logo from './../assets/png-clipart-logo-book-cartoon-books-cartoon-character-supplies.png'
import UseAuth from "../Reuse/UseAuth/UseAuth";
import Swal from "sweetalert2";
import { useEffect } from "react";
// import logos from './../../assets/png-clipart-logo-book-cartoon-books-cartoon-character-supplies.png'
const AddBook = () => {
    const {user} = UseAuth()
    const [text] = useTypewriter({
        words: ['dd Your Book'],
        loop: 200
      })
      const handelbookAdd = event =>{
         event.preventDefault()
         const form = event.target;
         const photourl = form.photourl.value;
         const name = form.name.value;
         const quntity = parseInt(form.quantity.value);
         const author = form.author.value;
         const category = form.category.value;
         const rating = form.rating.value;
         const description = form.description.value;
         const email = user.email;
         const contents = form.contents.value;
         const addBook ={ email,photourl, name, quntity, author, category, rating, description ,contents}
        //  console.log(addBook)
        //  fetch('http://localhost:5000/addbook',{
          
                // credentials: 'include',
            fetch('https://assingemt-elevent-server-site.vercel.app/addbook',{
                credentials: 'include',
                method: 'POST',
                headers:{
                  'content-type' : 'application/json'
                },
                body: JSON.stringify(addBook)
             } )
             .then(res => res.json())
             .then( data => {
                if(data.insertedId){
                    Swal.fire({
                      position: "center",
                      icon: "success",
                      title: "Add successfully",
                      showConfirmButton: false,
                      timer: 1500
                    });
                  }
                // console.log(data)
             })

      }
     
    return (
     <div className="py-10  " style={{ 
        backgroundImage: `url(${background})`,  backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover'}}  >
           <div className="Lg:w-8/12 w-10/12 m-auto rounded-md   bg-[#f7f8f8fb]">

               <div className="bg-red-700 py-4 flex justify-center items-center gap-2 bg-gradient-to-r from-[#89f35f] to-[#F3429C] rounded-t-lg ">
               <img className="w-12 rounded-lg h-12 m-auto" src={logo} alt="" />
                <h2 className="text-center text-white text-3xl font-bold">A{text}</h2>
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

                    <div className="form-control lg:w-1/2">
                        <label className="label">
                            <div className="flex">
                                <span className="label-text font-bold">Quantity</span>
                                <span className="text-red-800 text-[8px]"><FaStarOfLife /></span>
                            </div>
                        </label>
                        <input type="number" placeholder="Quantity" name="quantity" className="input input-bordered bg-[#48eefa44]" required />
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-10 ">
                    <div className="form-control w-full lg:w-1/2">
                        <label className="label">
                            <div className="flex">
                                <span className="label-text font-bold">Author Name</span>
                                <span className="text-red-800 text-[8px]"><FaStarOfLife /></span>
                            </div>
                        </label>
                        <input type="text" placeholder=" Type a Book Name" name="author" className="input input-bordered text-white font-bold bg-[#48eefa44]" required />
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
                <option value="sci-Fi" selected> Sci-Fi</option>
                
               
              </select>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-10 ">

<div className="form-control lg:w-1/2">
    <label className="label">
        <div className="flex">
            <span className="label-text font-bold">Rating</span>
            <span className="text-red-800 text-[8px]"><FaStarOfLife /></span>
        </div>
    </label>
    
    <input type="number" placeholder=" Rating" step="0.1" min="1" max="5" name="rating" className="input input-bordered text-white font-bold bg-[#48eefa44]" required />
</div>

<div className="form-control lg:w-1/2">
    <label className="label">
        <div className="flex">
            <span className="label-text font-bold">Short description</span>
            <span className="text-red-800 text-[8px]"><FaStarOfLife /></span>
        </div>
    </label>
    <input type="text" placeholder="type a Short description" name="description" className="input input-bordered bg-[#48eefa44]" required />
</div>


</div>
<div className="form-control lg:w-1/2">
    <label className="label">
        <div className="flex">
            <span className="label-text font-bold">Texts about the book </span>
            <span className="text-red-800 text-[8px]"><FaStarOfLife /></span>
        </div>
    </label>
    
        <textarea id="contents" name="contents" rows="4" cols="50" required></textarea>
   
</div>

       <button className="btn bg-gradient-to-r from-[#f35f84] to-[#F3429C] rounded-t-lg my-3 font-bold italic text-white text-2xl lg:w-[300px] m-auto">Add Now</button>

            </form>
        </div>
     </div>
    );
};

export default AddBook;







