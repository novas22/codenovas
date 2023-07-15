  
import { Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import TrainingImage from '../img/tr2.jpg';

const TrainingMain = styled('div')({
  background: '#f8f8f8',
  padding: '40px',
  textAlign: 'center',
});

const TrainingTitle = styled('h3')({
  marginBottom: '20px',
});

const TrainingCol1 = styled('div')({
  marginBottom: '20px',
});

const TrainingContent1 = styled('div')({
  marginBottom: '20px',
});

const TrainingCol2 = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '20px',
});

const TrainingContent = styled('div')({
  marginBottom: '20px',
});

const TrainingIcon = styled('i')({
  marginRight: '5px',
});

const TrainingImageWrapper = styled('img')({
  height: '300px',
  width: '400px',
  marginBottom: '20px',
});

const Ittraning = () => {
  return (
    <TrainingMain>
      <Container maxWidth="sm">
        <TrainingTitle className="it-title">IT Training</TrainingTitle>
        <TrainingCol1 className="Training-col1">
          <TrainingContent1 className="Training-content1">
            <h1>Learn and build your skills with IT Profession</h1>
          </TrainingContent1>
        </TrainingCol1>
        <TrainingImageWrapper src={TrainingImage} alt="consulting-img" />
        <div className="Training-courses-main3">
          <TrainingCol2 className="Training-col2">
            <TrainingContent className="Training-content2">
              <TrainingIcon className="fa fa-star"></TrainingIcon>
              <span><b>Free Courses </b></span>
              <br />
              <p>
              Our flexible, online programs fits with your need. Providing skills that are Essential to every IT professional.
              </p>
            </TrainingContent>

            <TrainingContent className="Training-content3">
              <TrainingIcon className="fa fa-star"></TrainingIcon>
              <span><b>IT Training</b></span>
              <br />
              <p>
              There are many variations of free online courses. Pre-Paid courses with projects
              </p>
            </TrainingContent>

            {/* <TrainingContent className="Training-content4">
              <TrainingIcon className="fa fa-star"></TrainingIcon>
              <span><b>Support</b></span>
              <br />
              <p>
                We will help you engage the next level of the tech industry you are looking for with the help of our talented engineering teams.
              </p>
            </TrainingContent> */}
          </TrainingCol2>
        </div>
      </Container>
    </TrainingMain>
  );
};

export default Ittraning;
