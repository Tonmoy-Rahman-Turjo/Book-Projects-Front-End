
import { Link } from 'react-router-dom';
import { useTypewriter } from 'react-simple-typewriter'
import UseAuth from '../../Reuse/UseAuth/UseAuth';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { IoEye } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
const Register = () => {
  const [showpassword, setShowpassword] = useState(false)
  const [success, setSuccess] = useState('')
  const [error, setError]= useState('')
  const {creatUser} = UseAuth()
  const [text] = useTypewriter({
    words: ['lease Register Now'],
    loop: 0
  })
  const handelregister = event =>{
    setError('')
    setSuccess('')
      event.preventDefault()
      const form = event.target;
       const name = form.name.value;
       const email = form.email.value;
       const password = form.password.value;
       const register={name, email, password}
       console.log(register)

       if(password.length <6 ){
        setError('please type 6 characters or long password')
        return
       }
            else if(/[A-Z]/.test(password)){
              setError('Password should not contain any capital letters.')
              return
            }

             else if(/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password)){
              setError('Password should not contain any special characters.')
              return
             }
       creatUser(email, password)
       
       .then(result =>{
             setSuccess(toast("Wow Complite your Registion Successfully!"))
        console.log('mama akta user paiya gase', result)
       })
       .catch(error =>{
        console.error(error.message)
        setError(error.message)
       })
  }
    return (
        <div>
        <div className="hero min-h-screen bg-[#F0F2F5]">
  <div className=" my-10 md:p-10 bg-[#7C2AE8] rounded">
     <h2 className=' text-center font-extrabold md:text-4xl pb-4 bg-gradient-to-r from-white to-reed-500  text-transparent bg-clip-text'>P{text}</h2>
  <div className="hero-content flex-col gap-10  lg:flex-row-reverse">
    
    <div className="card shadow-2xl lg:w-1/2 w-full  bg-base-100">
      <form onSubmit={handelregister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="name"  placeholder="Please Type Your Name" name="name" className="input input-bordered bg-[#FFA3BE]" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered bg-[#FFA3BE]" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <div className='relative cursor-pointer'> 
          <input type={showpassword? "text" : "password"} placeholder="password" name="password" className="input input-bordered bg-[#FFA3BE] w-full" required />
          <span className='absolute text-right top-3 right-7' onClick={() => setShowpassword(!showpassword)}>
            {
              showpassword?<IoEye />:<FaEyeSlash /> 
            }
          </span>
          </div>
          
        </div>
        <div>
          {
            success && <p className='text-green-800 hidden'>{success}</p>
          }
          {
            error && <p className='text-center font-bold  text-red-800'>{error}</p>
          }
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
          <h2 className='text-center text-green-900 text-3xl'>----------------------</h2>
          <span className='text-green-900 font-bold text-2xl text-center'>Please Login Now <Link className='text-red-800 text-2xl font-bold ml-2' to="/login">Login </Link></span>
        </div>
      </form>
    </div>
    <div className="">
      <img className=" rounded " src="https://i.ibb.co/943z4pJ/computer-people-design-24877-73559.jpg" alt="" />
      
      
    </div>
   
  </div>
  <ToastContainer />
  </div>
</div>
        </div>
    );
};

export default Register;