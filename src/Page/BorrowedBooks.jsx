import { useEffect, useState } from "react";



const BorrowedBooks = () => {
const [datas, setData] = useState()
  useEffect(()=>{
    fetch('http://localhost:5000/borrows')
    .then(res =>res.json())
    .then(data =>{
      console.log(data)
      setData(data)
    })
  },[])
    return (
        <div className="w-10/12 my-24 m-auto">
          <div className="grid  gap-5 justify-center grid-rows-1 md:grid-cols-3">
            {
              datas && datas.map(card => <div className="border-4 bg-[#a5a2a2] shadow-2xl" key={card._id}>
                  <img className="w-96 h-60 m-auto" src={card.photourl} alt="" />
                  <h2 className="text-green-900 text-center">  {card.name}</h2>
                  <h2 className=" text-red-900 text-center">Category :- {card.category}</h2>
             
                  <h2 className="text-yellow-600 font-bold italic text-center">Borrowed Date :- {card.borrowedDate}</h2>
                  <h2 className="text-red-800 italic font-bold text-center">Retun:- {card.returnDate}</h2>
                  <div className="w-32 m-auto ">
                    <button className="btn bg-black w-32 my-3 hover:bg-red-800 m-auto text-white font-bold font-2xl">Remove</button>
                  </div>
                 </div>)
            }
          </div>
        </div>
    );
};

export default BorrowedBooks;