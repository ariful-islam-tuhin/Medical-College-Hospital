import {
  signOut,
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initialAuthentication from "../firebase/firebase.init";
import useServices from "./useServices";

initialAuthentication();

const useFirebase = () => {
  const [services] = useServices();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const [user, setUser] = useState({});
  const [regiError, setRegiError] = useState("");
  const [logError, setLogError] = useState("");

  const handleGoogleSignIn = () => {
    return signInWithPopup(auth, provider);
  };

  const processLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setLogError("");
      })
      .catch((error) => {
        setLogError(error.message);
      });
  };
  const registerNewUser = (email, password, name) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setRegiError("");

        setUserName(name);
      })
      .catch((error) => {
        setRegiError(error.message);
      });
  };

  const setUserName = (name) => {
    updateProfile(auth.currentUser, { displayName: name }).then((result) => {});
  };

  const logOut = () => {
    signOut(auth).then(() => {});
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, [auth]);
  return {
    user,
    logOut,
    logError,
    services,
    regiError,
    processLogin,
    registerNewUser,
    handleGoogleSignIn,
  };
};

export default useFirebase;
