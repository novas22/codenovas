// import { Link } from 'react-router-dom';
import TabMenu from "../components/tabmenu";
import PopularCourses from '../components/PopularCourses';
import CourseProperties from '../components/CourseProperties';
import { db } from '../firebase';
import { collection, addDoc,  } from 'firebase/firestore';
// import { useState,useEffect } from 'react'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { query, where, getDocs } from "firebase/firestore";
import courseData from '../coursedata';
import { useParams }  from 'react-router-dom';


const CourseDetails = () => {

    const { courseId } = useParams();
    
    const thisCourse = courseData.find(cour => cour.id === courseId)
     

//     const refUserInformation = database.ref('UserInformation/')
// const currentUserQuery = refUserInformation.orderByChild('user_id').equalTo(user.uid);
// currentUserQuery.on('value', function(snapshot){
//   snapshot.forEach((data) => {
//     console.log(data.val())
//   });
// })

    // const [newUser, setUser] = useState("");
    // const [newGmail, setGmail] = useState("");
    // const [isReg, setIsReg] = useState(true);
   
const cource_name = thisCourse.title;

const username = window.localStorage.getItem("username");
const mail = window.localStorage.getItem("user");


const usersCollection = new collection(db,"course-enrol-user");
const q = query(
    usersCollection,
    where("course", "==", cource_name),
    where("Mail", "==", mail)
  );

// const searchQuery = { Mail: mail };
// const searchResults = usersCollection.find({ Mail: mail });


// const handleSwitch = () => {
//     setIsReg(false);
//     console.log("handleSwitch "+ isReg);
// }

const registerUser = async () => {
    
    if(!username && !mail){
        toast.error('Enter email and password', {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }
    else
    {
    //  await addDoc(usersCollection, {user_name:newUser, gmail:newGmail, course:cource_name });
    // setUser('');
    // setGmail('');
    getDocs(q)
  .then((querySnapshot) => {
    if (querySnapshot.size === 0) {
      // No document with the same username exists, proceed with adding new data
    //   usersCollection.add({
    //     user_name: username,
    //     mail: mail,
    //     course: cource_name
    //     // Other fields...
    //   })
    
    addDoc(usersCollection, { User : username, Mail: mail, course:cource_name })
      .then(() => {
        toast.success('Registered successfully', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
      })
      .catch(() => {
        toast.error('Something went Wrong', {
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
    } else {
      // A document with the same username already exists, handle the duplication
    //   console.log("Document with the same username already exists.");
      // Handle the duplication scenario as per your requirements
      toast.error('You have already Enrolled', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
  })
  .catch((error) => {
    console.error("Error querying documents: ", error);
    toast.error('Something went Wrong', {
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



    // await addDoc(usersCollection, { User : username, Mail: mail, course:cource_name });
    

    }
    
}

    

    return (
        <div className="course-deatails-container">
            <div className="course-deatails-col1">
                <h1>{thisCourse.title}</h1>
                <div className="course-tags">
                    <div className="course-tag-elements">
                        <p>Teacher</p>
                        <h4>CODENOVASADMIN</h4>
                    </div>
                    <div className="course-tag-elements">
                        <p>Category:</p>
                        <h4>MICROSOFT, SHAREPOINT</h4>
                    </div>
                </div>
                <TabMenu />
            </div>
            <div className="course-deatails-col2">
                
                {/* <input value={newGmail} className="course-user-register-input" placeholder="Enter your email address" onChange={(event)=>{setGmail(event.target.value)}} required/>

                <input value={newUser} className="course-user-register-input" placeholder="Enter your Full name" onChange={(event)=>{setUser(event.target.value)}} required /> */}
                
                < >
                    <button className="enroll-btn" onClick={registerUser}>ENROLL COURSE</button>
                </>

               <CourseProperties />

                <PopularCourses />

                <div className="working-day-hours">
                <h3>Working hours</h3>
                <div className="working-hours">
                    <p>Monday</p> <p>9:30 am - 6.00 pm</p>
                </div>
                <div className="working-hours">
                    <p>Tuesday</p> <p>9:30 am - 6.00 pm</p>
                </div>
                <div className="working-hours">
                    <p>Wednesday</p> <p>9:30 am - 6.00 pm</p>
                </div>
                <div className="working-hours">
                    <p>Thursday</p> <p>9:30 am - 6.00 pm</p>
                </div>
                <div className="working-hours">
                    <p>Friday</p> <p>9:30 am - 6.00 pm</p>
                </div>
                <div className="working-hours">
                    <p>Saturday</p> <p>Closed</p>
                </div>
                <div className="working-hours">
                    <p>Sunday</p> <p>Closed</p>
                </div>
            </div>
            <ToastContainer />
            </div>
        </div>
    );
};


export default CourseDetails;