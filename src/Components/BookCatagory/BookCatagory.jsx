import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const BookCatagory = () => {
    const [categorye, setCatagory] = useState([])
    useEffect(()=>{
        // fetch('http://localhost:5000/category')
        fetch('https://assingemt-elevent-server-site.vercel.app/category')
        // fetch('https://assingemt-elevent-server-site.vercel.app/category')
        .then(res => res.json())
        .then(data=>{
            console.log(data)
            setCatagory(data)
        })
    },[])

    return (
        <div>
            <h2 className="text-2xl font-bold text-center"> Book Category</h2>
            <h2 className="text-center  text-2xl my-3 text-[#a5a3a3]">Please Select your categosy</h2>
            <div className="flex gap-10 justify-center w-10/12 m-auto">
            {
                categorye && categorye.map(item => <Link to={`/category/${item.category}`}className="text-black  py-5 text-2xl" key={item._id}>
                    <div>
                  <h2 className="uppercase bg-[#948787] p-2 rounded font-bold italic">  {item.category}</h2>
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
