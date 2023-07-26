
import { Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import PlacementImage from '../img/tr1.jpg';

const PlacementMain = styled('div')({
  background: '#f8f8f8',
  padding: '40px',
  textAlign: 'center',
});

const PlacementTitle = styled('h3')({
  marginBottom: '20px',
});

const PlacementCol1 = styled('div')({
  marginBottom: '20px',
});

const PlacementContent1 = styled('div')({
  marginBottom: '20px',
});

const PlacementCol2 = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '20px',
});

const PlacementContent = styled('div')({
  marginBottom: '20px',
});

const PlacementIcon = styled('i')({
  marginRight: '5px',
});

const PlacementImageWrapper = styled('img')({
  height: '300px',
  width: '400px',

  /* Styles for mobile */
  '@media (max-width: 767px)': {
    height: '250px',
    width: '100%',
    objectFit: 'cover',
  },
});

const ItPlacement = () => {
  return (
    <PlacementMain>
      <Container maxWidth="sm">
       
        <PlacementCol1 className="placement-col1">
          <PlacementContent1 className="placement-content1">
            <h1>IT PLACEMENT</h1>
          </PlacementContent1>
        </PlacementCol1>
        <PlacementImageWrapper src={PlacementImage} alt="consulting-img" />
        <div className="placement-courses-main3">
          <PlacementCol2 className="placement-col2">
            <PlacementContent className="placement-content2">
              <PlacementIcon className="fa fa-star"></PlacementIcon>
              <span><b>Learn</b></span>
              <br />
              <p>
                Choose from given free and paid Information Technology courses, learn and certify yourself with Specialization Certificate programs.
              </p>
            </PlacementContent>

            <PlacementContent className="placement-content3">
              <PlacementIcon className="fa fa-star"></PlacementIcon>
              <span><b>IT Placement</b></span>
              <br />
              <p>
                Our experienced staffing teams deliver dream-team outcomes, without the hassles of hiring.
              </p>
            </PlacementContent>

            <PlacementContent className="placement-content4">
              <PlacementIcon className="fa fa-star"></PlacementIcon>
              <span><b>Support</b></span>
              <br />
              <p>
                We will help you engage the next level of the tech industry you are looking for with the help of our talented engineering teams.
              </p>
            </PlacementContent>
          </PlacementCol2>
        </div>
      </Container>
    </PlacementMain>
  );
};

export default ItPlacement;
