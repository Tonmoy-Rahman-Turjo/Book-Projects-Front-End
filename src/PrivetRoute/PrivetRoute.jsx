/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../Reuse/UseAuth/UseAuth";


const PrivetRoute = ({children}) => {
    const location = useLocation()
  const {loding, user} =UseAuth()
    if(loding){
        return <span className="loading  text-center  m-auto loading-spinner loading-lg"></span>
    }

    if(!user){
      
       <Navigate to="/login" state={location ?.pathname || "/"}></Navigate>
     }
    
    if(user){
      return  children;
    }
    return <Navigate to="/login"> </Navigate>
};

export default PrivetRoute;