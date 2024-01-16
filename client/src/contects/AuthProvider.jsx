import  { createContext, useState } from 'react'
import app from '../dashboard/firebase/firebase.config'
import {createUserWithEmailAndPassword} from "firebase/auth"
import { getAuth} from "firebase/auth";




export const AuthContext =createContext()
const auth = getAuth(app)

const AuthProvider = ({Children}) => {

    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);


    const createUser = (email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }
    // const signUpWithGmail = () =>{
      //  return signInWithGmail
    // }
    const authInfo = {
      user,
        createUser
    }
    
  return (
    <AuthContext.Provider value={authInfo}>
      {Children}
    </AuthContext.Provider>
  )
}




export default AuthProvider