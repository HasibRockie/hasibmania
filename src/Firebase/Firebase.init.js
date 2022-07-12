import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebaseConfig from "./Firebase.config";

const initializeAuth = () => {
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
};

export default initializeAuth;
