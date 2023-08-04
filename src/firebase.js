import { initializeApp } from "firebase/app";
// import { Link, useNavigate } from "react-router-dom";
import { GoogleAuthProvider, getAuth, signInWithPopup,getAdditionalUserInfo,sendPasswordResetEmail } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import firebase from 'firebase/app';

const firebaseConfig = {
  
  // Gmail : surajranajitbhosale003@gmail.com
  // apiKey: "AIzaSyAQJsUjFnHB2yP7zN-OQ5SCIYzrdT8u4io",
  // authDomain: "react-client-2023.firebaseapp.com",
  // projectId: "react-client-2023",
  // storageBucket: "react-client-2023.appspot.com",
  // messagingSenderId: "677721699801",
  // appId: "1:677721699801:web:964ec18a76f3d3064055c8"

  // Gmail : badipankaj07@gmail.com
  // apiKey: "AIzaSyB_pl0iDitwZpFQN4FG8wLfwFDbzWwh8f8",
  // authDomain: "reactlogin-d3ee8.firebaseapp.com",
  // databaseURL: "https://reactlogin-d3ee8-default-rtdb.firebaseio.com",
  // projectId: "reactlogin-d3ee8",
  // storageBucket: "reactlogin-d3ee8.appspot.com",
  // messagingSenderId: "528849997096",
  // appId: "1:528849997096:web:ce110d372b89085c55541d"

  // Gmail : codenovas22@gmail.com
  apiKey: "AIzaSyDm4_adImOq_mUoeQZ6NZ2r8Tq_ViQiOQY",
  authDomain: "codenovas-react-2023.firebaseapp.com",
  projectId: "codenovas-react-2023",
  storageBucket: "codenovas-react-2023.appspot.com",
  messagingSenderId: "689156116198",
  appId: "1:689156116198:web:4e84612155dc8ae2363527"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();



var Details;
var user_name;
var user_mail;
var user_photo;

const provide = new GoogleAuthProvider();
// function Redirect(){};


<<<<<<< HEAD
 
  
  signInWithPopup(auth, provide).then((result)=>{
    Details = getAdditionalUserInfo(result);
   user_name = Details.profile.name;
   user_mail = Details.profile.email;
   user_photo = Details.profile.picture;
   window.localStorage.setItem('isSignup',true);
   window.localStorage.setItem('username',user_name);
   window.localStorage.setItem('user',user_mail);
  //  navigate("/");
    
    // console.log(user_name+"\n"+user_mail+"\n"+user_photo);
    window.location.reload(true);
    // Redirect = () => {
    //   const navigate = useNavigate();
    //   navigate("/");
    // }
  }).catch((error)=>{
    console.log(error.stack);
  })
}

const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};



export { app, auth, db , provide, user_name, user_mail, user_photo,sendPasswordReset };
=======
export { app, auth, db , provide,signInWithPopup,getAdditionalUserInfo  };
>>>>>>> 1df40b0977f645f3c2e37838f765641acbec999f
