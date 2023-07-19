
import Google from "../img/btn_google_img.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth ,provide,signInWithPopup,getAdditionalUserInfo  } from "../firebase";
// import {user_name, user_mail} from "../firebase.js"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();
  const SignInWithGoogle = () =>{

 
    signInWithPopup(auth, provide).then((result)=>{
     const Details = getAdditionalUserInfo(result);
     const user_name = Details.profile.name;
     const user_mail = Details.profile.email;
     const user_photo = Details.profile.picture;
     window.localStorage.setItem('isSignup',true);
     window.localStorage.setItem('username',user_name);
     window.localStorage.setItem('user',user_mail);
     navigate("/");
    
   
    }).catch((error)=>{
      console.log(error.stack);
    })
  }



  const [isSignup, setIsSignup] = useState(false)
  // const [items, setItems] = useState([])
 
  const logout = () => {
    setIsSignup(!isSignup)
    window.localStorage.setItem('isSignup',false);
    window.localStorage.removeItem('isSignup');
    window.localStorage.removeItem('user');
    window.localStorage.removeItem('username');

}
//Code 
// const navigate = useNavigate();
const [values, setValues] = useState({
  email: "",
  pass: "",
});
// const [errorMsg, setErrorMsg] = useState("");
const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
const isLoggedIn = window.localStorage.getItem("isSignup");
const user = window.localStorage.getItem("user");
const username = window.localStorage.getItem("username");

const handleSubmission = () => {
  if (!values.email || !values.pass) {
    toast.error('Enter email and password', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
    return;
  }

  
  setSubmitButtonDisabled(true);
  signInWithEmailAndPassword(auth, values.email, values.pass)
    .then(async (res) => {
      setIsSignup(!isSignup)
      window.localStorage.setItem('isSignup',true);
      if (values.email === "")
      {
        window.localStorage.setItem('username',user_name);
        window.localStorage.setItem('user',user_mail);
      }
      else{
        window.localStorage.setItem('username',"User");
        window.localStorage.setItem('user',values.email);
      }

      
      setSubmitButtonDisabled(false);
    //  localStorage.setItem('user', res.user.email)

      // const items = JSON.parse(localStorage.getItem('items'));
      // if (items) {
      //  setItems(items);
      // }

      // Stored in LocalStorage 
      localStorage.setItem('user', res.user.email)
      
      // navigate("/");
      // toast.success('Verified successfully', {
      //   position: "top-right",
      //   autoClose: 1000,
      //   hideProgressBar: true,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: "light",
      //   });
    })
    .catch(() => {
      setSubmitButtonDisabled(false);
      toast.error('Somthing went wrong', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    });
};

//code




  // const google = () => {
  //   window.open("http://localhost:5000/auth/google", "_self");
  // };

  // const github = () => {
  //   window.open("http://localhost:5000/auth/github", "_self");
  // };

  // const facebook = () => {
  //   window.open("http://localhost:5000/auth/facebook", "_self");
  // };

  return (
    <div className="login">
      { !isLoggedIn ? (<>

      <h1 className="loginTitle">Choose a Login Method</h1>
{/* 
      { isSignup && (<p>{values.email}</p>)} */}
      
      {/* <button onClick={handleSwitch()}>Toggle</button> */}
      <div className="login-wrapper">
        <div className="login-left">
          <div className="loginButton google-login-btn" onClick={SignInWithGoogle}>
            <img src={Google} alt="" className="icon" />
           
          </div>
          {/* <div className="loginButton facebook-login-btn" onClick={facebook}>
            <img src={Facebook} alt="" className="icon" />
            Facebook
          </div>
          <div className="loginButton github-login-btn" onClick={github}>
            <img src={Github} alt="" className="icon" />
            Github
          </div> */}
        </div>
        <div className="center">
          <div className="line" />
          <div className="or">OR</div>
        </div>
        <div className="login-right">
          
          <input type="text" placeholder="Username/Gmail" 
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }/>

          <input type="password" placeholder="Password" onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }/>
          
          <div className="rem-frgotpass">
             <label><input type="checkbox"/>Remember me</label>
             <Link to="/" ><h5>Forgot password</h5></Link>
          </div>
          <button className="login-submit" disabled={submitButtonDisabled} onClick={handleSubmission}>Login</button><br></br>
          {/* <button className="login-submit" disabled={submitButtonDisabled} onClick={handleSubmission}>Login</button><br></br> */}
          
        <p className="signup_link">{`Don't have an account?`}<Link to='/signup'>Signup</Link></p>
        </div>
        
        </div> 
        </>)
        : 
        (
        <>
        <div className="logout-panel">
        <h1>Welcome <br/>{username}</h1>
        <h2>{user}{}</h2>
        <button className="button-24" onClick={logout}> Logout</button>
        </div>
        </>) }
        
        <ToastContainer />
    </div>
  );
};

export default Login;
