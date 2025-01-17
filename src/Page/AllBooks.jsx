

import { useEffect, useState } from "react";
import Bookcard from "../Components/BookCard/Bookcard";
import { Link } from "react-router-dom";
import Rating from 'react-rating';
import { FaStar } from "react-icons/fa";
import { FaTableList } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";
import 'aos/dist/aos.css';

const AllBooks = () => {
  const [openView, setOpenView] = useState('card');
  const [allBooks, setAllBooks] = useState([]);
  const [SortRating, setSortRating] = useState(null); // 'highest' or 'lowest'

  useEffect(() => {
    fetch('https://assingemt-elevent-server-site.vercel.app/allbook', {
      credentials: 'include',
    })
      .then(res => res.json())
      .then(data => {
        setAllBooks(data);
      });
  }, []);

  const sortBooks = (order) => {
    const sortedBooks = [...allBooks];
    if (order === 'highest') {
      sortedBooks.sort((a, b) => b.rating - a.rating);
    } else if (order === 'lowest') {
      sortedBooks.sort((a, b) => a.rating - b.rating);
    }
    setAllBooks(sortedBooks);
  };

  useEffect(() => {
    if (SortRating) {
      sortBooks(SortRating);
    }
  }, [SortRating]);

  return (
    <div
      style={{
        backgroundImage: `url(https://i.ibb.co/L62zTmb/360-F-668519325-f5c-XQj-E3-PH1oah-B17x-Bmk6h1-CLNXPe-Lc.jpg)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className="w-10/12 m-auto py-10 pb-24">
        <h2 className="text-center text-white text-2xl font-bold mb-12">
          All Books: <span className="text-red-800">{allBooks.length}</span>
        </h2>
        <div className="flex gap-7 items-center justify-center mb-8">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn m-1 bg-red-700 text-white font-extrabold hover:bg-green-600">Sort Reting  <span className="text-5xl"><RiArrowDropDownLine /></span></div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <a onClick={() => setSortRating('highest')}>Highest Rating</a>
              </li>
              <li>
                <a onClick={() => setSortRating('lowest')}>Lowest Rating</a>
              </li>
            </ul>
          </div>
          <div className="dropdown dropdown-bottom dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn bg-black hover:bg-red-600 text-white font-bold flex gap-0 m-1"
            >
              View <span className="text-5xl"><RiArrowDropDownLine /></span>
            </div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <button
                  className="bg-blue-500 hover:bg-black font-bold my-2 italic text-white px-4 py-2 rounded"
                  onClick={() => setOpenView('card')}
                >
                  Card View
                </button>
              </li>
              <li>
                <button
                  className="bg-green-500 flex gap-2 items-center font-bold italic hover:bg-red-700 text-white px-4 py-2 rounded"
                  onClick={() => setOpenView('table')}
                >
                  <FaTableList />
                  Table View
                </button>
              </li>
            </ul>
          </div>
        </div>
        {openView === "card" ? (
          <div className="grid md:grid-cols-3 grid-col-1 gap-10">
            {allBooks.map(book => (
              <Bookcard key={book._id} bookCard={book} />
            ))}
          </div>
        ) : (
          <table className="w-10/12 m-auto overflow-x-scroll bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Title</th>
                <th className="py-2 px-4 border-b">Author</th>
                <th className="py-2 px-4 border-b">Category</th>
                <th className="py-2 px-4 border-b">Rating</th>
                <th className="py-2 px-4 border-b">Update</th>
              </tr>
            </thead>
            <tbody>
              {allBooks.map((book) => (
                <tr className="my-2 border-b-4 bg-[#8f8d8d]" key={book._id}>
                  <td className="py-2 px-4">{book.title}</td>
                  <td className="py-2 px-4">{book.author}</td>
                  <td className="py-2 px-4">{book.category}</td>
                  <td className="py-2 px-4">
                    <Rating
                      emptySymbol={<FaStar color="#ccc" />}
                      fullSymbol={<FaStar color="#ffc107" />}
                      initialRating={book.rating}
                      readonly
                    />
                  </td>
                  <td className="pr-3">
                    <Link to={`/update/${book._id}`}>
                      <button className="btn text-center bts text-white text-lg font-bold w-full bg-gradient-to-r from-[#518edf] to-[#f11fe7] my-3">
                        Update
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AllBooks;















