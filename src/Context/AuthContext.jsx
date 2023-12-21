import { createContext, useEffect, useState } from "react";
  import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "../config/Firebase.config";

export const FirebaseContext = createContext(null);

const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false)

  //sign up
  const signUp = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  };

  //update user
  const updateUser = (name,photo) => {
  return  updateProfile(auth.currentUser, {
  displayName: name, photoURL: photo
})
  }

  //sign in
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
  }

  //manage user
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
  if (user) {
    setLoading(false)
  } else {
   setLoading(false)
      }
      
    });
    return () => {
      return unSubscribe();
    }
  },[])
  
  //google login
  const provider = new GoogleAuthProvider();
  const googleLogin = () => {
    setLoading(true)
    return signInWithPopup(auth, provider)
  };

  //log out
  const logOut = () => {
    setLoading(true)
 return   signOut(auth)
  }


  const values = {
    user,
    loading,
    googleLogin,
    signUp,
    signIn,
    updateUser,
    logOut

  }
  return (
    <FirebaseContext.Provider value={values}>
      {children}
    </FirebaseContext.Provider>
  );
};

export default AuthContext;