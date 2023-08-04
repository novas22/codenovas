
import Slideshow from '../components/homepageslider';
import Consulting from '../img/tr.jpg'
import training from '../img/tr2.jpg'
import Placement from '../img/tr1.jpg'
// import Footer from '../components/footer';

const Home = () => {
  return (
    <>
    <Slideshow />
    <div className='row_flex-container'>
    <div className="row_flex">

    <div className="col_2">
    <p>Upgrade Your IT Skills with Flexible Online Programs
       Learn, grow, and succeed in the IT field with our comprehensive online programs. Choose from free courses to explore essential skills or dive deep into specialized areas with our pre-paid courses. Join a trusted institution
      for quality education and stay ahead in the ever-evolving IT industry. Enroll today and unlock your potential!
    
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
      <p>Unlock the full potential of your business with Code Novas Inc., a trusted IT consulting company. 
        Our skilled professionals understand that your business needs are unique, and we work closely with you to analyze 
        and tailor solutions to meet those needs. Whether you want to optimize your current system or incorporate the latest
         market technologies, our expertise allows us to deliver affordable and customized solutions within your timelines. 
         With a proven track record of success, Code Novas Inc. is the partner you can rely on for efficient and effective IT solutions.
         Contact us today to experience enhanced efficiency and tailored solutions for your business.</p>
    </div> 
    </div>

    <div className="row_flex4">
      <div className="col_4">
        <p>Elevate your tech career with our comprehensive IT placement services. We offer a wide selection of free and paid 
          Information Technology courses, allowing you to choose the ones that suit your needs.
           Learn and gain valuable certifications through our Specialization Certificate programs.
            Our experienced staffing teams take care of the hiring process, ensuring dream-team outcomes without any hassles. 
            With the assistance of our talented engineering teams, we will help you reach the next level in the tech industry. 
          Don't miss out on the opportunity to advance your career - explore our IT placement services today.</p> </div>
      <div  className="col_4">
           {/* <img height="100%" width="100%" src="https://vignan.ac.in/blog/images/march/placement1.png" alt="training img"/> */}
           <img height="100%" width="100%" src={Placement} alt="training img"/>
      </div>
    </div>
    </div>
{/* <Footer /> */}
    </>
    
  );
};

export default Home;
