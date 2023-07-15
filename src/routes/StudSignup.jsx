import Select from 'react-select';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { db } from '../firebase';
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';


function StudSignup() {

    const navigate = useNavigate();
    const [values, setValues] = useState({
      name: "",
      email: "",
      pass: "",
      pass2: "",
      first_name: "",
      last_name: "",
      academic: "",
      phone: "",
    });
   
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  
    const handleSubmission = () => {
      if (!values.name || !values.email || !values.pass) {
        toast.error('Fill all fields', {
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
      if (values.pass !== values.pass2) {
        toast.error('Passwords do not match', {
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
      const emailQuery = query(collection(db, "student-user"), where("email", "==", values.email));

  getDocs(emailQuery)
    .then((emailQuerySnapshot) => {
      if (!emailQuerySnapshot.empty) {
        // Email already exists
        toast.error("Email already exists", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setSubmitButtonDisabled(false);
        return;
      }

      addDoc(collection(db, "student-user"), values)
        .then((docRef) => {
          console.log("Document written with ID: ", docRef.id);

          createUserWithEmailAndPassword(auth, values.email, values.pass)
            .then((res) => {
              setSubmitButtonDisabled(false);
              const user = res.user;
              updateProfile(user, {
                displayName: values.name,
              })
                .then(() => {
                  navigate("/");
                })
                .catch(() => {
                  toast.error("Unexpected Error", {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                  });
                });
            })
            .catch(() => {
              setSubmitButtonDisabled(false);

              toast.error("Unexpected Error", {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
            });
        })
        .catch((error) => {
          console.error("Error adding document: ", error);

          setSubmitButtonDisabled(false);

          toast.error("Unexpected Error", {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        });
    })
    .catch((error) => {
      console.error("Error querying document: ", error);

      setSubmitButtonDisabled(false);

      toast.error("Unexpected Error", {
        position: "top-right",
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
    
      const options = [
       {value:"No high School" ,label: "No high School"},
       {value:"Highschool or equivalent" ,label: "Highschool or equivalent"},
       {value:"Technical or occupational certificate",label: "Technical or occupational certificate"},
       {value:"Associate degree",label: "Associate degree"},
       {value:"Some college coursework",label: "Some college coursework"},
       {value:"Bachelor's degree",label: "Bachelor's degree"},
       {value:"Master's degree",label: "Master's degree"},
       {value:"Doctorate",label: "Doctorate"},
       {value:"Professional",label: "Professional"},
  
      ]
  
      // const [show,setShow]=useState(false)?S
  
      return (
      <>
  <div className="container">
     <div className="form-box">
    <div className="title">Registration</div><br></br>
      <form action="#">
          <div className="user-details">
            <div className="input-box">
                <span className="details">Username</span>
                <input type="text" name="username" placeholder="Enter your username"  onChange={(event) =>
              setValues((prev) => ({ ...prev, name: event.target.value }))
            }/>
            </div> 
            <div className="input-box">     
                <span className="details">Email</span>
                <input type="text" name="Email" placeholder="Enter your Email"
                onChange={(event) =>
                  setValues((prev) => ({ ...prev, email: event.target.value }))
                }/>
            </div>
            
             
            <div className="input-box">   
                <span className="details">Password</span>
                <input type="password " name="Password" placeholder="Enter your Password"
                onChange={(event) =>
                  setValues((prev) => ({ ...prev, pass: event.target.value }))
                }/>
            </div> 
            <div className="input-box">   
                  <span className="details">Password Again</span>
                  <input type="text" name="Password Again" placeholder="Password Again"
                  onChange={(event) =>
                    setValues((prev) => ({ ...prev, pass2: event.target.value }))
                  }/>
            </div>
            <div className="input-box">      
                <span className="details">First name</span> 
                <input type="text" name="First Name" placeholder=" First name"
                onChange={(event) =>
                  setValues((prev) => ({ ...prev, first_name: event.target.value }))
                }/>
            </div>
            <div  className="input-box">   
                <span className="details">Last Name</span>
                <input type="text " name="Last Name" placeholder="Last Name"
                onChange={(event) =>
                  setValues((prev) => ({ ...prev, last_name: event.target.value }))
                }/>
           </div>
           </div>      
              <div className="input-box">
                  <span className="details">Mobile No</span>
                  <input type="text" name="Mobile No" placeholder="Mobile No"
                  onChange={(event) =>
                    setValues((prev) => ({ ...prev, phone: event.target.value }))
                  }/>
              </div> 
              <div className="input-box">
              
                  <span className="details">Highest Academic Level</span>
                  <div>
                    <Select options={options}  placeholder="select your choice"
                    onChange={(selectedOption) => {
                      setValues((prev) => ({ ...prev, academic: selectedOption.value }));
                    }}  />
                  </div>    
              </div>     
                
              <div className="chkbox">
                <lable>
                  <input type="checkbox"/>
                  I agree with storage and handling of my data by this website.
                </lable>
              </div> 
             
                <div>
                  <button className="btn" onClick={handleSubmission} disabled={submitButtonDisabled}>Registration</button>   
                </div>
              </form>
      </div>
      <ToastContainer />
      </div>      
         
  
      
      </>
      )
    }
    

export default StudSignup