import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const BookCatagory = () => {
    const [category, setCatagory] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/category')
        .then(res => res.json())
        .then(data=>{
            console.log(data)
            setCatagory(data)
        })
    },[])

    return (
        <div>
            <h2 className="text-2xl font-bold text-center"> Book Category</h2>
            <div className="flex gap-10 justify-center w-10/12 m-auto">
            {
                category&& category.map(item => <Link to={`/category/${item.category}`}className="text-black py-5 text-2xl" key={item._id}>
                    <div>
                  <h2>  {item.category}</h2>
                  <h2 className="p-2 text-red-700">{item.rating}</h2>
                    </div>
                </Link>
               )
            
              }
            </div>
        </div>
    );
};

export default BookCatagory;
