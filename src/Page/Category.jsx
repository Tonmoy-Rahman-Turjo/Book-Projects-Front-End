import { Link, useLoaderData } from "react-router-dom";
import Rating from 'react-rating';
import { FaStar } from "react-icons/fa";
const Category = () => {
    const category = useLoaderData()
    //   console.log(category)

    return (
        <div className="w-9/12  mb-20 mt-10 m-auto">
       
           <div className="grid grid-cols-3 gap-5">
           {
                category&&category.map( item => <div className=" border" key={item._id}> 
                    
                        <img className="w-96 h-60 m-auto " src={item.photourl} alt="" />
                    <h2 className="text-center font-2xl font-bold uppercase">{item.category}</h2>
                     <div className="flex justify-around gap-2 border-b-4 pb-2">
                        <h2 className="text-black font-bold text-base">Author :-<span className="ml-2 text-green-700 font-bold italic">{item.author}</span></h2>
                        <h2  className="text-black font-bold text-base">Category p-<span className="ml-2 text-green-700 font-bold">{item.category}</span></h2>
                     </div>
                     <h2 className="flex gap-2 mx-2 text-black font-bold">Rating:-<span>{item.rating}
                     <Rating
                                    emptySymbol={<FaStar color="#ccc" />} 
                                    fullSymbol={<FaStar color="#ffc107" />} 
                                    initialRating={item.rating}
                                    readonly
                                />
                     
                     
                     
                     </span></h2>
                     
                     <div className=" flex justify-center">
                     <Link to={`/allbook/${item._id}`}> <button className="bg-black text-white font-bold italic p-2 my-2 px-6 rounded  hover:bg-green-800">Detels</button></Link>
                     </div>
                </div>)
            }
           </div>
        </div>
    );
};

export default Category;




