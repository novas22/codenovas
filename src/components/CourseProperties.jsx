
import { useState,useEffect } from 'react'; 
import { db } from '../firebase';
import { collection, query, where, onSnapshot } from "firebase/firestore";
import courseData from '../coursedata';
import { useParams }  from 'react-router-dom';
const CourseProperties = () => {

    const [count, setCount] = useState(0);
  // const courseName = 'SharePoint';
  const usersCollection = collection(db, "course-enrol-user");
  const { courseId } = useParams();
    
  const thisCourse = courseData.find(cour => cour.id === courseId)
   
  useEffect(() => {
    const q = query(usersCollection, where("course", "==", thisCourse.title));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setCount(snapshot.size);
    });

    return () => unsubscribe(); // Cleanup the listener when component unmounts
  }, [usersCollection, thisCourse]);

    return (
        <div>
            <div className='course-info'>
                <p>Enrolled: {count} Student</p>
            </div>
            <div className='course-info'>
                <p>Lectures: 0</p>
            </div>
        </div>
    );
}
export default CourseProperties;