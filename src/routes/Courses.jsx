import { Link} from 'react-router-dom';

import courseData from '../coursedata';


const courses = () => {

 const isLoggedIn = window.localStorage.getItem("isSignup");
  return (
    <>
      <div className="courseMain">
        <div className="courseHeader">
          <h1>Courses</h1>
        </div>
        <div className="courseContent">
          {
          courseData.map(course =>{
            return(
              <div className="courseList" key={course.id}>
             <div className="courseThumbnail" key={course.id}>
             <img height="auto" width="auto" src={course.thumbnail} alt="Error" />
             
             { isLoggedIn ?  
             <Link to={`/CourseDetails/${course.id}`} className="coursePreviewButton">
                PREVIEW THIS COURSE
              </Link> 
              : 
              <Link to='/login' className="coursePreviewButton">
                Login
              </Link>
              }
             
             
              </div>
              <div className="courseDescription">
              <p>{course.brand}</p>
              <h3>{course.title}</h3>
              <p>{course.short_dec}</p>
              <h3>{course.subscription_type}</h3>
              </div>
              </div>
              
          
            )
          })}
          </div>
          </div>
 </>
       )
  
    };


export default courses;