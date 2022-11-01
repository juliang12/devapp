import { auth } from '@/services/firebase/firebaseConfig';
import React, { useEffect, useState } from 'react'

const useAuth = () => {
  const [userLogin, setUserLogin] = useState<any>(null);

  useEffect(() => {
   const unsuscribe = auth.onAuthStateChanged(user =>{
    if(user){
      console.log(user)
        setUserLogin(user)
    }else{
        setUserLogin(null)
    }
   })
  
    return () => unsuscribe()
  
  }, [])
  

    return userLogin
}

export default useAuth