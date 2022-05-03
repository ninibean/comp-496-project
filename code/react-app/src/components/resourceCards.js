import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import image1 from './aggiesDo.png';
import image2 from './babyAggie.png';
import './resourceCards.css'

export default function ImgMediaCard() {
  return (
    <Grid
        container
        spacing={3}
        justify="center"
        className='Cards'
    >
        {/* Center for Academic Excellence Card */}
        <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt="resource 1"
                    height="300"
                    src={image1}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Center For Academic Excellence
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        North Carolina A&T State University
                    </Typography>
                    <Typography variant="body2" color="text.primary">
                        Looking for all things academic at North Carolina A&T? Check out the Center for Academic Excellence!
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" target="_blank" href="https://www.ncat.edu/provost/academic-affairs/center-for-academic-excellence/index.php"> Go </Button>
                </CardActions>
            </Card>
        </Grid>

       {/* CS Department Card */}
       <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt="resource 2"
                    height="300"
                    src={image2}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Computer Science Department Directory
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        North Carolina A&T State University - College of Engineering
                    </Typography>
                    <Typography variant="body2" color="text.primary">
                        Looking for your advisor? Search for them here!
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" target="_blank" href="https://www.ncat.edu/coe/departments/cs/people/faculty-and-staff.php"> Go </Button>
                </CardActions>
            </Card>
        </Grid>

        {/* CS Curriculum Card */}
       <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt="resource 3"
                    height="300"
                    src={image1}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Computer Science Curriculum Guide
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        North Carolina A&T State University - College of Engineering
                    </Typography>
                    <Typography variant="body2" color="text.primary">
                        Need more information about what classes you need to take in order to stay on track for graduation?
                        Check out the computer science department's most recent curriculum guide!
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" target="_blank" href="https://www.ncat.edu/provost/academic-affairs/curriculum-guides/2020-2021/coe/cs-bs-curriculum-guide-2020-211.pdf"> Go </Button>
                </CardActions>
            </Card>
        </Grid>

        {/* CS Curriculum Card */}
       <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt="resource 4"
                    height="300"
                    src={image2}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Academic Expectations
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        North Carolina A&T State University
                    </Typography>
                    <Typography variant="body2" color="text.primary">
                        Want to learn more about what is expected of you as a North Carolina A&T student?
                        Check out the university's Academic Expectations!
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" target="_blank" href="https://www.ncat.edu/provost/academic-affairs/center-for-academic-excellence/academic-expectations.php"> Go </Button>
                </CardActions>
            </Card>
        </Grid>

        {/* Tutorials Card */}
       <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt="resource 5"
                    height="300"
                    src={image1}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Student Success Services
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        North Carolina A&T State University
                    </Typography>
                    <Typography variant="body2" color="text.primary">
                        Need extra support for challenging coursework?
                        Check out some of the student success services the university has available!
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" target="_blank" href="https://www.ncat.edu/provost/academic-affairs/center-for-academic-excellence/student-support-resources/index.php"> Go </Button>
                </CardActions>
            </Card>
        </Grid>

        {/* Upswing Card */}
       <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt="resource 6"
                    height="300"
                    src={image2}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Upswing Online Tutoring
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        North Carolina A&T State University
                    </Typography>
                    <Typography variant="body2" color="text.primary">
                        Check out the university's free online tutoring service!
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" target="_blank" href="https://ncat.upswing.io/"> Go </Button>
                </CardActions>
            </Card>
        </Grid>

    </Grid>
    
  );
}