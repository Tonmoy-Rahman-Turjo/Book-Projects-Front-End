import {  useLoaderData } from "react-router-dom";
import UseAuth from "../../Reuse/UseAuth/UseAuth";
import Swal from 'sweetalert2'


const ViewDetels = () => {
    const { user } = UseAuth()
    
    const viewdetelse = useLoaderData()
    const handelborrow = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photourl = form.photourl.value;
        const category = form.category.value;
        const borrowedDate = form.borrowedDate.value;
        const returnDate = form.returnDate.value;
        const borrow ={name, photourl, category, returnDate, borrowedDate}
        console.log(borrow)
        fetch('http://localhost:5000/borrow',{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(borrow)
        })
        .then(res => res.json())
        .then( data =>{
            if(data.insertedId){
              Swal.fire({
                position: "center",
                icon: "success",
                title: " add Borrowed Books ",
                showConfirmButton: false,
                timer: 1500
              });
            }
            console.log(data)
          })
        console.log(user)
    }
    return (
        <div className=" m-auto w-10/12 my-28">

            <div className="flex justify-center flex-col md:flex-row items-center gap-10 py-10  border-4 lg:w-[700px] m-auto">
                <div>
                    <img className="w-96 h-60 m-auto " src={viewdetelse.photourl} alt="" />
                    <h2 className="text-center font-2xl font-bold uppercase">{viewdetelse.category}</h2>
                </div>
                {/* tow */}
                <div>
                    <div className="">
                        <h2 className="text-black font-bold text-base">Author :-<span className="ml-2 text-green-700 font-bold italic">{viewdetelse.author}</span></h2>
                        <h2 className="text-black font-bold text-base">Category p-<span className="ml-2 text-green-700 font-bold">{viewdetelse.category}</span></h2>
                    </div>
                    <h2 className="flex gap-2  text-black font-bold">Rating:-<span>{viewdetelse.rating}</span></h2>
                    <h2 className="flex gap-2  text-black font-bold">Quantity:-<span>{viewdetelse.quntity}</span></h2>
                    <h2 className="fl ex gap-2 text-black font-bold">Quantity:-<span>{viewdetelse.description}</span></h2>

                    <div className=" flex justify-center">
                    
                        <label htmlFor="my_modal_6" className="btn bg-black text-white">Borrow</label>

                        {/* Put this part before </body> tag */}
                        <input type="checkbox" id="my_modal_6" className="modal-toggle" />
                        <div className="modal" role="dialog">
                            <div className="modal-box">

                                <form onSubmit={handelborrow} className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Img</span>
                                        </label>
                                        <input type="text" placeholder="photoUrl" name="photourl" defaultValue={viewdetelse.photourl} className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="tex" placeholder="name" name="name" defaultValue={viewdetelse.name} className="input input-bordered" required />

                                    </div>
                                    <select
                                        // defaultValue={viewdetelse.category}
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
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text"> Borrowed Date</span>
                                        </label>
                                        <input type="date" placeholder="name" name="borrowedDate" defaultValue={viewdetelse.name} className="input input-bordered" required />

                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text"> Return Date
                                            </span>
                                        </label>
                                        <input type="date" placeholder="name" name="returnDate" defaultValue={viewdetelse.name} className="input input-bordered" required />

                                    </div>
                                    <div className="form-control mt-6">
                                        {/* <button type="submit" className="btn  btn-primary">Return</button> */}
                                        <input className="bg-red-600 text-white text-2xl rounded hover:bg-green-800 " type="submit" value="Submit" />
                                    </div>
                                </form>




                                {/* <h3 className="font-bold text-lg">Hello!</h3>
                                <p className="py-4">This modal works with a hidden checkbox!</p> */}
                                <div className="modal-action">
                                    <label htmlFor="my_modal_6" className="btn">Close!</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetels;