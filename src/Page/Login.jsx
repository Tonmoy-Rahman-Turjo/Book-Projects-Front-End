/* eslint-disable react/no-unescaped-entities */
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTypewriter } from 'react-simple-typewriter'
import { IoEye } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { SiGithub } from "react-icons/si";
import UseAuth from '../Reuse/UseAuth/UseAuth';
const Login = () => {
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')
  const { login } = UseAuth()
  const{googleLogin} = UseAuth()
  const location = useLocation()
  const navigat = useNavigate()
  const forms = location.state || '/'
  // const{githubLogin} =UseAuth()
  const{ githubLogin} =UseAuth()
  const [text] = useTypewriter({
    words: ['lease Login Now'],
    loop: 0
  })
  const googleGitHubLogin = event =>{
    event()
    // console.log(githubLogin)
    // setSuccess('')
    // setError('')
      //  console.log(googleLogin)
    .then(result =>{
       console.log(result)
       navigat(forms)
     })
     .catch(error =>
      // console.error(error)
      error(error.message)
  )
  }
  const handelLogin = event => {
    event.preventDefault()
    setError('')
    setSuccess('')
    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;
    const register = { email, password }
    console.log(register)
    // -----------login---------------
    login(email, password)
      .then(result => {
        setSuccess(toast("Login a user Successfully"))
        console.log('login a user',result)
        navigat(forms)
      })
      .catch(error=>{
        setError(error.message)
      })
    
  }
  const [showpassowrd, setpassword] = useState(false)
  return (
    <div>
      <div className="min-h-screen  bg-[#F0F2F5] ">
        <div className=" my-10 md:p-10  bg-[#7C2AE8] rounded">
          <h2 className=' text-center font-extrabold md:text-4xl pb-4 bg-gradient-to-r from-white to-reed-500  text-transparent bg-clip-text'>P{text}</h2>
          <div className="hero-content flex-col  gap-10  lg:flex-row-reverse">

            <div className="card shadow-2xl  lg:w-96 w-full  bg-base-100">
            {/* className="border-4 shadow-2xl shadow-emerald-950 rounded bg-gradient-to-r from-[#3cccc5] to-[#3ef575] bg-[#e95959] */}
              <div className='rounded-t-lg bg-gradient-to-r from-[#cc3c7f] to-[#f113d4] ' >
                <h2 className='text-2xl rounded-t-lg font-extrabold italic text-center py-5 text-white '>Login form</h2>
              </div>
              <form onSubmit={handelLogin} className="card-body pb-0">

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
                    <input type={showpassowrd ? "text" : "password"} placeholder="password" name="password" className="input input-bordered bg-[#FFA3BE] w-full " required />
                    <span onClick={() => setpassword(!showpassowrd)} className='absolute text-right top-3 right-7'>
                      {
                        showpassowrd ? <IoEye /> : <FaEyeSlash />
                      }
                    </span>
                  </div>

                </div>
                  <div>
                    {
                      error && <p className='text-red-900 text-center font-bold text-base'>{error}</p>
                    }
                    {
                      success && <p className='hidden'> {success}</p>
                    }
                  </div>
                <div className="form-control mt-6">
                  <button className="btn text-2xl  font-bold bg-gradient-to-r from-[#AF44AE] to-[#F3429C]">Login</button>

                </div>
              </form>
              <div>
                <h2 className=' text-2xl font-bold text-center bg-gradient-to-r from-[#af445b] to-[#e90d0d] text-transparent bg-clip-text '>----- or-----</h2>
                <div className='flex justify-center gap-5 items-center py-3 '>
                  <button onClick={()=> googleGitHubLogin(googleLogin)} className='text-5xl' ><FcGoogle /> </button>
                  <button onClick={() => googleGitHubLogin(githubLogin)} className='text-5xl' ><SiGithub /></button>
                </div>
                <div>
                  {
                    error && <p>{error}</p>
                  }
                </div>
              </div>

              <span className='font-bold text-base  rounded-b-lg italic text-center py-2 text-white bg-gradient-to-r from-[#AF44AE] to-[#F3429C]'>Don't have an account-? <Link className='text-[#8B99E2] text-lg font-bold ml-2' to="/login">Register </Link></span>
            </div>
            <div className="lg:w-[500px]">
              <img className="  rounded " src="https://i.ibb.co/QK3rzZx/Login-pana.png" alt="" />


            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;