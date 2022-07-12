import React from "react";
import useAuth from "../../Context/useAuth";
import "./SignIn.css";
// import { useHistory, useLocation } from "react-router";

const SignIn = () => {
  const {
    setUser,
    user,
    setError,
    Logout,
    authorized,
    GoogleSignIn,
    setAuthorized,
    setIsLoading,
  } = useAuth();

  // const location = useLocation();
  // const redirect_uri = location?.state?.from || "/";

  const handleGoogleSignIn = () => {
    GoogleSignIn()
      .then((result) => {
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;

        setUser(result.user);
        setAuthorized(true);
        setError("");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        setError(error?.message);
      })
      .finally(setIsLoading(false));
  };

  const Signout = () => {
    Logout();
    setUser({});
  };


  if (authorized || user?.displayName) {
    return (
      <div className="signin">
        <h2>You've already logged in! </h2>
        <div className="user-info">
          <h4>{user?.displayName}</h4> <br />
          <h4>{user?.email}</h4> <br />
        </div>

        <button
          onClick={Signout}
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {" "}
          Logout{" "}
        </button>
      </div>
    );
  }

  if (!user?.displayName) {
    return (
      <div className="signin">
        <h4>Sign in With</h4> <br />
        <button
          onClick={handleGoogleSignIn}
          className="w-50 text-center py-2 rounded bg-red-600 text-white hover:bg-red-800 focus:outline-none my-1 mx-2"
        >
          Google
        </button>
      </div>
    );
  }
};

export default SignIn;
