import { Grid, Typography } from "@mui/material";
import "../App.css";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12}>
          <Typography variant="h4" align="center">
            Welcome to CodeNovas!
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="subtitle1">Purpose</Typography>
          <Typography variant="body1">
          Code Nova is your premier online learning platform, offering a wide range of educational opportunities. 
          Whether you're looking to enhance your programming skills, dive into data science, explore MuleSoft integration,
           or delve into SQL databases, we have the courses you need.
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="subtitle1">Benefits</Typography>
          <ul className="feature-list">
          <li>Extensive Course Catalog: Access a diverse range of courses covering various subjects and technologies.</li>
    <li>High-Quality Content: Learn from engaging video tutorials and comprehensive written resources.</li>
    <li>Flexibility and Convenience: Study at your own pace, anytime and anywhere.</li>
    <li>Interactive Learning Community: Engage with a vibrant community of learners, exchanging ideas and insights.</li>
    <li>Expert Instructors: Learn from industry professionals who are passionate about teaching.</li>
    <li>Personalized Learning Paths: Tailor your learning journey to your specific goals and interests.</li>
    <li>Recognition and Certificates: Earn certificates of completion to showcase your achievements.</li>
    <li>Affordable Membership Options: Access additional benefits with our membership plans.</li>
    <li>Continuous Updates and Support: Stay up to date with the latest content and receive ongoing support.</li>
          </ul>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="subtitle1">Target Users</Typography>
          <ul className="user-list">
            <li>{`Guest: Can view parts of the pages but cannot create, read, update, delete, or comment on a collaborative's page.`}</li>
            <li>{`Subscriber: Can read and comment on collaboratives' pages.`}</li>
            <li>{`Collaborator: Can create, read, update, and delete their own posts, and can also comment on others' posts.`}</li>
            <li>Student: Can access everything from a specific course.</li>
          </ul>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="subtitle1">Skill</Typography>
          {/* Add your skill section content here */}
        </Grid>

        <Grid item xs={12}>
          <Typography variant="subtitle1">Professional Certificate Courses (Online)</Typography>
          {/* Add your professional certificate courses section content here */}
        </Grid>

        <Grid item xs={12}>
          <Typography variant="subtitle1">Certifications</Typography>
          <div className="main-div23">
            <div className="column3">
              <img height="200" width="300" src="https://kolkatadigitalmarketinginstitute.com/wp-content/uploads/2019/11/Digital-Unlocked-Certification.jpg" alt="g-certificate" /><br />
              <Typography variant="h6">Google Certified</Typography>
            </div>
            <div className="column4">
              <img height="200" width="300" src="https://i1.rgstatic.net/publication/325513987_Certificate_of_Achievement_Microsoft_Excel_for_the_Data_Analyst_Microsoft_United_States/links/5b11989b0f7e9b498102d97a/largepreview.png" alt="m-certificate" /><br />
              <Typography variant="h6">PowerBI Certified</Typography>
            </div>
            <div className="column5">
              <img height="200" width="300" src="https://discussions.apple.com/content/attachment/117412040" alt="a-certificate" /><br />
              <Typography variant="h6">Oracle Certified</Typography>
            </div>
            <div className="column5">
              <img height="200" width="300" src="https://discussions.apple.com/content/attachment/117412040" alt="a-certificate" /><br />
              <Typography variant="h6">Mulesoft Certified</Typography>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default AboutUs;
