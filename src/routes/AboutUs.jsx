import React from 'react';
import { Grid, Typography, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import '../App.css';

const BenefitItem = styled(Paper)({
  padding: '20px',
  margin: '10px 0',
  backgroundColor: '#f5f5f5', // Adjust the background color as needed
});

const AboutUs = () => {
  return (
    <div style={{ padding: '50px' }}>
      <Grid container spacing={3} justifyContent="center">

        {/* Header Section */}
        <Grid item xs={12}>
          <Typography variant="h4" align="center" gutterBottom>
            About Code Nova
          </Typography>
          <Typography variant="h5" align="center" gutterBottom style={{ marginBottom: '30px' }}>
            Empowering Your Learning with Technology and Staffing
          </Typography>
        </Grid>

        {/* Purpose Section */}
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Purpose
          </Typography>
          <Typography variant="body1">
            At Code Nova, we are committed to revolutionizing the way you learn technology. As a premier online learning platform, we offer an extensive range of educational opportunities tailored to meet the diverse needs of our learners. Whether you're an aspiring programmer, a data science enthusiast, a professional seeking to master MuleSoft integration, or someone curious about SQL databases, Code Nova is your gateway to excellence in tech education.
          </Typography>
        </Grid>

        {/* Benefits Section */}
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Benefits
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <BenefitItem>
                <Typography variant="subtitle1"><strong>Extensive Course Catalog:</strong></Typography>
                <Typography variant="body2">Delve into a world of knowledge with our wide array of courses covering various tech subjects and tools.</Typography>
              </BenefitItem>
            </Grid>
            <Grid item xs={12} sm={6}>
              <BenefitItem>
                <Typography variant="subtitle1"><strong>High-Quality Content:</strong></Typography>
                <Typography variant="body2">Immerse yourself in learning through our engaging video tutorials and comprehensive written resources.</Typography>
              </BenefitItem>
            </Grid>
            <Grid item xs={12} sm={6}>
              <BenefitItem>
                <Typography variant="subtitle1"><strong>Flexibility and Convenience:</strong></Typography>
                <Typography variant="body2">Enjoy the liberty to study at your own pace, from any location, fitting your learning into your lifestyle.</Typography>
              </BenefitItem>
            </Grid>
            <Grid item xs={12} sm={6}>
              <BenefitItem>
                <Typography variant="subtitle1"><strong>Interactive Learning Community:</strong></Typography>
                <Typography variant="body2">Connect and engage with fellow learners from around the globe, exchanging ideas and gaining new insights.</Typography>
              </BenefitItem>
            </Grid>
            {/* Add more benefits here */}
          </Grid>
        </Grid>

        {/* Target Users Section */}
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Target Users
          </Typography>
          <Typography variant="body1">
            <strong>Guest:</strong> Enjoy partial access to view various pages but limited in creating, reading, updating, deleting, or commenting on collaborative content.<br />
            <strong>Subscriber:</strong> Engage more deeply with the ability to read and comment on collaboratives' pages.<br />
            <strong>Collaborator:</strong> Enjoy comprehensive interaction capabilities, including creating, reading, updating, and deleting your posts, as well as commenting on others'.<br />
            <strong>Student:</strong> Unlock full access to all course materials, resources, and community features specific to your enrolled courses.
          </Typography>
        </Grid>

        {/* Certifications Section */}
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Certifications
          </Typography>
          <div className="main-div23">
            <div className="column3">
              <img height="300" width="400" src="https://kolkatadigitalmarketinginstitute.com/wp-content/uploads/2019/11/Digital-Unlocked-Certification.jpg" alt="Google Certification" /><br />
              <Typography variant="h6">Google Certified</Typography>
            </div>
            <div className="column4">
              <img height="300" width="400" src="https://i1.rgstatic.net/publication/325513987_Certificate_of_Achievement_Microsoft_Excel_for_the_Data_Analyst_Microsoft_United_States/links/5b11989b0f7e9b498102d97a/largepreview.png" alt="Microsoft Certification" /><br />
              <Typography variant="h6">Microsoft Certified</Typography>
            </div>
            <div className="column5">
              <img height="300" width="400" src="https://discussions.apple.com/content/attachment/117412040" alt="Apple Certification" /><br />
              <Typography variant="h6">Apple Certified</Typography>
            </div>
          </div>
        </Grid>

      </Grid>
    </div>
  );
};

export default AboutUs;
