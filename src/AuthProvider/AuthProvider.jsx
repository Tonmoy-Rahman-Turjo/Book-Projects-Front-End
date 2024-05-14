/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../public/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

import { GithubAuthProvider } from "firebase/auth";
import axios, { Axios } from "axios";
export const AuthContxt = createContext(null)
const providers = new GoogleAuthProvider()

const provider = new GithubAuthProvider();
const AuthProvider = ({children}) => {
      const [user, setUser] = useState(null)
      const [loding, setLoding] = useState(true)
      const creatUser = (email, password) =>{
          return createUserWithEmailAndPassword(auth, email, password)
      }
    //   gitHub Authonicationa
    const githubLogin = () =>{
        setLoding(true)
        return signInWithPopup(auth, provider)
       }
    //   google-Authonication
      const googleLogin =()=>{
        setLoding(true)
        return signInWithPopup(auth, providers)
      }
      const login = (email, password)=>{
        // lodding(true)
        return signInWithEmailAndPassword(auth, email, password)
      }
      const logOut= () =>{
        setUser(null)
        setLoding(true)
        return signOut(auth)
        
      }
    const authUserInfo ={user, creatUser, login, logOut, googleLogin, githubLogin, loding}
    useEffect(()=>{
     const unsubcribe  = onAuthStateChanged(auth, creatUser=>{
      setUser(creatUser)
      console.log(user)
      console.log('creatuser', creatUser)
      // const userEmail = creatUser?.email || user?.email
      // const logUser ={email:userEmail}
      // if(creatUser){
      //       axios.post('http://localhost:5000/jwt', logUser, {withCredentials: true})
      //       .then(res => {
      //         console.log('token response',res.data)
      //       })
      // }
      // else{
      //   axios.post('http://localhost:5000/logout', logUser,{
      //     withCredentials: true,
      //   })
      //   .then(res=>{
      //     console.log(res.data)
      //   })
      // }
        setLoding(false)
        })
        return () =>{
          return unsubcribe
        }
       
    },[])
    return (
        <AuthContxt.Provider value={authUserInfo}>
            {children}
        </AuthContxt.Provider>
    );
};

export default AuthProvider;