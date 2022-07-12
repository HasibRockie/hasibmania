import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuth from "./Firebase.init";

initializeAuth();
const FirebaseSettings = () => {
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [authorized, setAuthorized] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  //   on auth state change
  useEffect(() => {
    setIsLoading(true);

    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setAuthorized(true);
        setError("");
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
  }, []);

  //   google sign in
  const GoogleSignIn = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //   log out function
  const Logout = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
        setAuthorized(false);
      })
      .catch((error) => {
        setError(error?.errorMessage);
      })
      .finally(setIsLoading(false));
  };

  return {
    setAuthorized,
    setUser,
    setError,
    user,
    error,
    Logout,
    authorized,
    isLoading,
    GoogleSignIn,
    setIsLoading,
  };
};

export default FirebaseSettings;
