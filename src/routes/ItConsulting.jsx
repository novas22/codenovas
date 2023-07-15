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
     });
     
     const ConsultingText = styled(Typography)({
       marginBottom: '20px',
     });
     
     const ChoresTitle = styled('h3')({
       marginBottom: '10px',
     });
     
     const TrainingCol2 = styled('div')({
       display: 'flex',
       justifyContent: 'center',
     });
     
     const TrainingImg = styled('img')({
       height: '500px',
       width: '680px',
     });
     
const ItConsulting = () => {
    return (
    <>
 <ConsultingMain className="consulting-main">
      <Container maxWidth="sm">
        <ConsultingTitle className="consulting-title">IT CONSULTANCY</ConsultingTitle>
        <ConsultingText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget nunc sed augue
          interdum sagittis. In ut luctus elit. Duis malesuada consectetur arcu, sit amet
          ullamcorper nunc euismod vitae.
        </ConsultingText>
        <ChoresTitle className="chores-title">Key Phases:</ChoresTitle>
        <ConsultingText>
          1. Planning and Analysis<br />
          2. Solution Design<br />
          3. Implementation and Integration<br />
          4. Testing and Quality Assurance<br />
          5. Deployment and Support
        </ConsultingText>
        <ConsultingText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget nunc sed augue
          interdum sagittis. In ut luctus elit. Duis malesuada consectetur arcu, sit amet
          ullamcorper nunc euismod vitae.
        </ConsultingText>
        <ConsultingTitle className="consulting-title">IT Consultancy: Turning techno-troubles into triumphs!</ConsultingTitle>
        <TrainingCol2>
          <TrainingImg src={ConsultingImage} alt="consulting-img" />
        </TrainingCol2>
      </Container>
    </ConsultingMain>    </>
    )
  };
  
  export default ItConsulting;