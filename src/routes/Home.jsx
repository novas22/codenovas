
import Slideshow from '../components/homepageslider';
import Consulting from '../img/tr.jpg'
import training from '../img/tr2.jpg'
import Placement from '../img/tr1.jpg'
// import Footer from '../components/footer';

const Home = () => {
  return (
    <>
    <Slideshow />
    <div className="row_flex">

    <div className="col_2">
    <p>Learn and build your skills with IT Profession.Online IT programs.Our flexible, online programs fits with your need. Providing skills that are Essential to every IT professional.
          Free Courses .There are many variations of free online courses. Pre-Paid courses with projects
    
    </p>
    </div>
    <div className="col_2">
      {/* <img height="100%" width="100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHXgpymnv5oontyLUNQPvYAjt9wv1f1WrEQXe8FY4coMcH1Dt_xKnSinoJv22QvY6Asf0&usqp=CAU" alt="training img"/> */}
      <img height="100%" width="100%" src={training} alt="training img"/>
      
    </div>
    </div> 
    
    <div className="row_flex3">
    <div className="col_3">
    <img height="100%" width="100%" src={Consulting} alt="Consulting img"/>
      {/* <p>HaHu Inc. is a well experienced IT Consulting Company that will enable your business to increase efficiency. We understand your business needs can be unique. So we closely work with you to analyze your needs, and develop an affordable, custom solution that will be delivered on time. Our well experienced professionals will provide you with the right business solution you are looking for whenever you have a need to better solution to your existing system or upgrading to the latest technology in the market..
      </p> */}
    </div>
    <div className="col_3">
      {/* <img height="100%" width="100%" src="http://hahuinc.com/assets/img/new/consulting.jpg" alt="palcement img"/> */}
      <p>HaHu Inc. is a well experienced IT Consulting Company that will enable your business to increase efficiency. We understand your business needs can be unique. So we closely work with you to analyze your needs, and develop an affordable, custom solution that will be delivered on time. Our well experienced professionals will provide you with the right business solution you are looking for whenever you have a need to better solution to your existing system or upgrading to the latest technology in the market..
      </p>
    </div> 
    </div>

    <div className="row_flex4">
      <div className="col_4">
        <p>Expert choice IT Placement services in one place.Choose from given free and paid Information Technology courses, learn and certify yourself with Specialization Certificate programs.Our experienced staffing teams deliver dream-team outcomes, without the hassles of hiring.We will help you engage the next level of the tech industry looking for with the help of our talented engineering teams.</p>
      </div>
      <div  className="col_4">
           {/* <img height="100%" width="100%" src="https://vignan.ac.in/blog/images/march/placement1.png" alt="training img"/> */}
           <img height="100%" width="100%" src={Placement} alt="training img"/>
      </div>
    </div>
{/* <Footer /> */}
    </>
    
  );
};

export default Home;
