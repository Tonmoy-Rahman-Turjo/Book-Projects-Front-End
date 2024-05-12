/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../public/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

import { GithubAuthProvider } from "firebase/auth";
export const AuthContxt = createContext(null)
const google = new GoogleAuthProvider()

const provider = new GithubAuthProvider();
const AuthProvider = ({children}) => {
      const [user, setUser] = useState(null)
      const [lodding, setLoding] = useState(true)
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
        return signInWithPopup(auth, google)
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
    const authUserInfo ={user, creatUser, login, logOut, googleLogin, githubLogin, lodding}
    useEffect(()=>{
     const unsubcribe  = onAuthStateChanged(auth, creatUser=>{
      setUser(creatUser)
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