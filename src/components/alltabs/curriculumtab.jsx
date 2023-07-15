
import courseData from '../../coursedata';
import {useParams} from 'react-router-dom';

const CurriculumTab = () => {

  const {courseId} = useParams();
  const thisCourse = courseData.find(cour => cour.id === courseId);

  return (
    <div className="course-curriculam-tab">

      <p>{thisCourse.curiculam}</p>
      
    </div>
  );
};
export default CurriculumTab;