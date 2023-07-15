
import {useParams} from "react-router-dom";
import courseData from "../../coursedata";


const DescriptionTab = () => {

  const {courseId} = useParams();
   const thisCourse = courseData.find(cour => cour.id === courseId)

  return (
    <div className="course-desc-tab">

      <img src={thisCourse.discription.image_url} alt="MSPowerApp" />
      <p>{thisCourse.discription.para_1}</p>
      <p>{thisCourse.discription.para_2}</p>
      <h1>{thisCourse.discription.main_tit}</h1>
      <div className="course-main-features">
        <div className="course-features">
          <ul>
            <li>{thisCourse.discription.cours_list.li_1}</li>
            <li>{thisCourse.discription.cours_list.li_2}</li>
            <li>{thisCourse.discription.cours_list.li_3}</li>
            <li>{thisCourse.discription.cours_list.li_4}</li>
          </ul>
        </div>
        <div className="course-features">
          <ul>
            <li>{thisCourse.discription.cours_list.li_5}</li>
            <li>{thisCourse.discription.cours_list.li_6}</li>
            <li>{thisCourse.discription.cours_list.li_7}</li>
          </ul>
        </div>
      </div>
      <h1>{thisCourse.target_audiance_heading}</h1>
      <p>{thisCourse.target_audiance_para}</p>
    </div>
  );
};
export default DescriptionTab;