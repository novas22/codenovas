
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material'; 
import { useNavigate } from "react-router-dom";
import Instructor from '../img/signup/Instructor.jpg'
import Student from '../img/signup/student.jpg'


function Signup() {

  const navigate = useNavigate();
  return (
    <div className="SignupPage">
      <div className="StudentSection">
      <Card sx={{ maxWidth: 345 }} onClick={()=>{navigate("/student_signup");}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image={Student}
          alt="Student"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Student Login
          </Typography>
          <Typography variant="body2" color="text.secondary">
            if your are a student and want to learn new technologies and want a good guidence Sign-Up here,
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Sign-Up As Student
        </Button>
      </CardActions>
    </Card>
    </div>

    <div className="TeacherSection">

      <Card sx={{ maxWidth: 345 }} onClick={()=>{navigate("/teacher_signup");}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image={Instructor}
          alt="Instructor"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Instructor Login
          </Typography>
          <Typography variant="body2" color="text.secondary">
            If you are an Instructor who wants a platform to connect with students and shear your knowledge Sign-Up here,
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
        Sign-Up As Instructor
        </Button>
      </CardActions>
    </Card>
    </div>
    </div>
  )
}

export default Signup