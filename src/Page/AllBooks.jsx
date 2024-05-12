import { useEffect, useState } from "react";
import Bookcard from "../Components/BookCard/Bookcard";


const AllBooks = () => {
    const[allbook, setAllbook] =useState([])
    useEffect(()=>{
        // fetch('http://localhost:5000/addtouristspots')
        fetch('http://localhost:5000/allbook')
        .then(res => res.json())
        .then(data => {
           setAllbook(data)
            // console.log(touristSpots)
        })
    },[])
    return (
      <div style={{backgroundImage:`url(https://i.ibb.co/L62zTmb/360-F-668519325-f5c-XQj-E3-PH1oah-B17x-Bmk6h1-CLNXPe-Lc.jpg)`, backgroundRepeat: 'no-repeat', backgroundSize:'cover' }} >
 <div className="w-10/12 m-auto py-10 pb-24">
        
           <h2 className="text-center text-white text-2xl font-bold mb-12 ">All Book :- <span className="text-red-800"> {allbook.length}</span> </h2>
          <div className="grid md:grid-cols-3 grid-col-1 gap-10">
          {
            allbook.map(bookCard =><Bookcard key={bookCard._id} bookCard={bookCard}></Bookcard> )
           }
          </div>
        </div>
      </div>

       
    );
};

export default AllBooks;