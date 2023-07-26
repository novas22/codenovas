import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import Consulting from '../img/tr.jpg'
import training from '../img/tr2.jpg'
import Placement from '../img/tr1.jpg'
import '../App.css'; // Create a Services.css file for additional styling

const Services = () => {
  const navigate = useNavigate();

  return (
    <div className="services-container">
      <h2 className="services-title">Services page</h2>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Card className="service-card" onClick={() => navigate("/IT-training")}>
            <CardMedia
              component="img"
              image={training}
              alt="IT-training"
              className="card-media"
            />
            <CardContent>
              <Typography variant="h5" component="div">
                IT-training
              </Typography>
              <Typography variant="body2" component="div">
                Description of IT-training service.
              </Typography>
              <h3 className="learn-more" onClick={() => navigate("/IT-training")}>Click to see more</h3>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className="service-card" onClick={() => navigate("/IT-Consulting")}>
            <CardMedia
              component="img"
              image={Consulting}
              alt="IT-Consulting"
              className="card-media"
            />
            <CardContent>
              <Typography variant="h5" component="div">
                IT-Consulting
              </Typography>
              <Typography variant="body2" component="div">
                Description of IT-Consulting service.
              </Typography>
              <h3 className="learn-more" onClick={() => navigate("/IT-Consulting")}>Click to see more</h3>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className="service-card" onClick={() => navigate("/IT-Placement")}>
            <CardMedia
              component="img"
              image={Placement}
              alt="IT-Placement"
              className="card-media"
            />
            <CardContent>
              <Typography variant="h5" component="div">
                IT-Placement
              </Typography>
              <Typography variant="body2" component="div">
                Description of IT-Placement service.
              </Typography>
              <h3 className="learn-more" onClick={() => navigate("/IT-Placement")}>Click to see more</h3>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Services;
