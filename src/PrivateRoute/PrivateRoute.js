import { Spinner } from "react-bootstrap";
import { Navigate } from "react-router";
import useAuth from "./../Context/useAuth";

function PrivateRoute({ children }) {
  const { user, isLoading } = useAuth();


  if(isLoading){
      return(<Spinner animation="grow" />)
  }
  return (user?.email== `${process.env.REACT_APP_EMAIL1}` || user?.email == `${process.env.REACT_APP_EMAIL2}`) ? children : <Navigate to="/signin"  />;
}

export default PrivateRoute;
