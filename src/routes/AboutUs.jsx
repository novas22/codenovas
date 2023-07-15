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
            Code nova is an educational and sports website for guests, subscribers, collaborators, and students. It provides comprehensive courses in various domains, allowing users to learn or teach the entire course or use specific sections as a reference through videos or text. Additionally, it caters to sports fans by offering live or highlight coverage of NFL and Premier League games.
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="subtitle1">Features</Typography>
          <ul className="feature-list">
            <li>Online Courses with full discount systems</li>
            <li>Online Certificates which can be used worldwide</li>
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
              <img height="300" width="400" src="https://kolkatadigitalmarketinginstitute.com/wp-content/uploads/2019/11/Digital-Unlocked-Certification.jpg" alt="g-certificate" /><br />
              <Typography variant="h6">Google Certified</Typography>
            </div>
            <div className="column4">
              <img height="300" width="400" src="https://i1.rgstatic.net/publication/325513987_Certificate_of_Achievement_Microsoft_Excel_for_the_Data_Analyst_Microsoft_United_States/links/5b11989b0f7e9b498102d97a/largepreview.png" alt="m-certificate" /><br />
              <Typography variant="h6">Microsoft Certified</Typography>
            </div>
            <div className="column5">
              <img height="300" width="400" src="https://discussions.apple.com/content/attachment/117412040" alt="a-certificate" /><br />
              <Typography variant="h6">Apple Certified</Typography>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default AboutUs;
