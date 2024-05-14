import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="h-screen items-center my-32">
          <div className="border-4 w-96 m-auto bg-[#8b8888] shadow-2xl shadow-black ">
          <img  className="w-80 m-auto mt-4 rounded" src="https://i.ibb.co/K5XdqQp/images-1.jpg" alt="" />
        
          <div className="w-32 m-auto ">  <Link to="/">
             <button className="bg-[#ff4353] p-2 w-32 m-auto my-2 rounded hover:bg-black text-white font-bold italic">Go Back</button></Link>
             </div>
          </div>
        </div>
    );
};

export default ErrorPage;