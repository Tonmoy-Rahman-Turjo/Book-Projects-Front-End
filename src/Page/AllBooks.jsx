import { useEffect, useState } from "react";
import Bookcard from "../Components/BookCard/Bookcard";
import { Link } from "react-router-dom";
import Rating from 'react-rating';
import { FaStar } from "react-icons/fa";

const AllBooks = () => {
  const [view, setView] = useState('card');
    const[allbook, setAllbook] =useState([])
    useEffect(()=>{
        
        // fetch('http://localhost:5000/allbook',{
        //   credentials: 'include'
        // })

        
        // fetch('https://assingemt-elevent-server-site.vercel.app/allbook',{
        //   credentials: 'include',
        // })
        fetch('https://assingemt-elevent-server-site.vercel.app/allbook')
        .then(res => res.json())
        .then(data => {
           setAllbook(data)
       
        })
    },[])
    return (
      <div style={{backgroundImage:`url(https://i.ibb.co/L62zTmb/360-F-668519325-f5c-XQj-E3-PH1oah-B17x-Bmk6h1-CLNXPe-Lc.jpg)`, backgroundRepeat: 'no-repeat', backgroundSize:'cover' }} >
 <div className="w-10/12 m-auto py-10 pb-24">
        
           <h2 className="text-center text-white text-2xl font-bold mb-12 ">All Book :- <span className="text-red-800"> {allbook.length}</span> </h2>
                 <div className="flex justify-center mb-8">
                 <button 
                        className="bg-blue-500 text-white px-4 py-2 mr-2 rounded" 
                        onClick={() => setView('card')}
                    >
                        Card View
                    </button>
                    <button 
                        className="bg-green-500 text-white px-4 py-2 rounded" 
                        onClick={() => setView('table')}
                    >
                        Table View
                    </button>
                 </div>
               { view ==="card" ?(
                  <div className="grid md:grid-cols-3 grid-col-1 gap-10">
                  {
                    allbook.map(bookCard =><Bookcard key={bookCard._id} bookCard={bookCard}></Bookcard> )
                   }
                  </div>
               ):(
            
                <table className="w-full overflow-x-scroll bg-white">
                <thead>
                    <tr>
                        
                        <th className="py-2 px-4 border-b">Author</th>
                        <th className="py-2 px-4 border-b">Category</th>
                        <th className="py-2 px-4 border-b">Rating</th>
                        <th className="py-2 px-4 border-b">Update</th>
                      
                    </tr>
              </thead>
              <tbody>
                  {allbook.map((book, index) => (
                      <tr className="my-2 border-b-4 bg-[#8f8d8d]" key={index}>
                          <td defaultValue={book.author} className="">{book.title}</td>
                          <td className="">{book.author}</td>
                          <td className="">{book.category}</td>
                          <td><Rating
          emptySymbol={<FaStar color="#ccc" />} 
          fullSymbol={<FaStar color="#ffc107" />} 
          initialRating={book.rating}
          readonly
      /></td>
              
              <Link to={`/update/${index._id}`}> <button className="btn text-center bts text-white text-lg font-bold w-full bg-gradient-to-r from-[#518edf] to-[#f11fe7] mb-3 ">Update</button></Link>
          </tr>
      ))}
  </tbody>
</table>
  
    )

      }
        </div>
      </div>

       
    );
};

export default AllBooks;















// import React, { useEffect, useState } from "react";
// import Bookcard from "../Components/BookCard/Bookcard";

// const AllBooks = () => {
//     const [allbook, setAllbook] = useState([]);
//     const [view, setView] = useState('card'); // ভিউ পরিবর্তনের জন্য স্টেট

//     useEffect(() => {
//         fetch('https://assingemt-elevent-server-site.vercel.app/allbook')
//             .then(res => res.json())
//             .then(data => {
//                 setAllbook(data);
//             })
//     }, []);

//     return (
//         <div style={{ backgroundImage: `url(https://i.ibb.co/L62zTmb/360-F-668519325-f5c-XQj-E3-PH1oah-B17x-Bmk6h1-CLNXPe-Lc.jpg)`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
//             <div className="w-10/12 m-auto py-10 pb-24">
//                 <h2 className="text-center text-white text-2xl font-bold mb-12">
//                     All Book: <span className="text-red-800">{allbook.length}</span>
//                 </h2>
//                 <div className="flex justify-center mb-8">
//                     <button 
//                         className="bg-blue-500 text-white px-4 py-2 mr-2 rounded" 
//                         onClick={() => setView('card')}
//                     >
//                         Card View
//                     </button>
//                     <button 
//                         className="bg-green-500 text-white px-4 py-2 rounded" 
//                         onClick={() => setView('table')}
//                     >
//                         Table View
//                     </button>
//                 </div>
//                 {view === 'card' ? (
//                     <div className="grid md:grid-cols-3 grid-col-1 gap-10">
//                         {allbook.map(bookCard => (
//                             <Bookcard key={bookCard._id} bookCard={bookCard} />
//                         ))}
//                     </div>
//                 ) : (
//                     <table className="min-w-full bg-white">
//                         <thead>
//                             <tr>
                               
//                                 <th className="py-2 px-4 border-b">Author</th>
//                                 <th className="py-2 px-4 border-b">Category</th>
//                                 <th className="py-2 px-4 border-b">Rating</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {allbook.map((book, index) => (
//                                 <tr key={index}>
//                                     <td className="py-2 px-4 border-b">{book.title}</td>
//                                     <td className="py-2 px-4 border-b">{book.author}</td>
//                                     <td className="py-2 px-4 border-b">{book.category}</td>
//                                     <td className="py-2 px-4 border-b">{book.rating}</td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default AllBooks;