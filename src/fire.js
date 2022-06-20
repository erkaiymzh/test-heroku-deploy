import fire from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCvun_JNDhMsm1TWNzpC49CuRj3qEFsyPQ",
  authDomain: "react-fire-auth-91967.firebaseapp.com",
  projectId: "react-fire-auth-91967",
  storageBucket: "react-fire-auth-91967.appspot.com",
  messagingSenderId: "1004284197904",
  appId: "1:1004284197904:web:a286af285a4ded1e259e95",
};

export default fire.initializeApp(firebaseConfig);
