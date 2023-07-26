import { Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import ConsultingImage from '../img/tr.jpg';


const ConsultingMain = styled('div')({
       background: '#f8f8f8',
       padding: '40px',
       textAlign: 'center',
     });
     
     const ConsultingTitle = styled('h2')({
       marginBottom: '20px',
       justifyContent: 'left',
     });
     
     const ConsultingText = styled(Typography)({
       marginBottom: '20px',
       textAlign: 'justify',
     });
     
     const ChoresTitle = styled('h3')({
       marginBottom: '10px',
     });
     
     const TrainingCol2 = styled('div')({
       display: 'flex',
       justifyContent: 'center',
     });
     
     const TrainingImg = styled('img')({
      /* Styles for desktop */
      height: '300px',
  width: '400px',

  /* Styles for mobile */
  '@media (max-width: 767px)': {
    height: '250px',
    width: '100%',
    objectFit: 'cover',
  },
    });
     
const ItConsulting = () => {
    return (
    <>
 <ConsultingMain className="consulting-main">
      <Container maxWidth="sm">
        <ConsultingTitle className="consulting-title">IT CONSULTANCY</ConsultingTitle>
        <TrainingCol2>
          <TrainingImg src={ConsultingImage} alt="consulting-img" />
        </TrainingCol2>
       
        <ChoresTitle className="chores-title">Key Phases:</ChoresTitle>
        <ConsultingText>
          1. Planning and Analysis<br />
          2. Solution Design<br />
          3. Implementation and Integration<br />
          4. Testing and Quality Assurance<br />
          5. Deployment and Support
        </ConsultingText>
        <ConsultingText>
        "Expert IT Consulting for Seamless Solutions. Empowering Your Business with Innovative Technology Strategies. Trusted Advice and Customized Solutions for Success."
        </ConsultingText>
      
       
      </Container>
    </ConsultingMain>    </>
    )
  };
  
  export default ItConsulting;