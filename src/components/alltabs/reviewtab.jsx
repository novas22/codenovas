
import {useParams} from "react-router-dom";
import courseData from '../../coursedata';

const ReviewTab = () => {

  const {courseId} = useParams();

  const thisCourse = courseData.find(cour => cour.id === courseId)

  return (
    <div className="course-review-tab">
      <p>{thisCourse.review}</p>
      
    </div>
  );
};
export default ReviewTab;