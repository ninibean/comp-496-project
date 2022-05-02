import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import image1 from './niara.png';
import image2 from './akin.png';
import image3 from './dimitri.png';
import './contactCards.css'

export default function ImgMediaCard() {
  return (
    <Grid
        container
        spacing={3}
        justify="center"
        className='Cards'
    >
        {/* Niara's Card */}
        <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt="niara memoji"
                    height="300"
                    src={image1}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Niara Patterson
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Project Lead and Frontend Developer
                    </Typography>
                    <Typography variant="body2" color="text.primary">
                    I am a graduating senior computer science student attending North Carolina A&T
                    State University! I love to draw! Connect with me on LinkedIn to learn more about me!
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" target="_blank" href="https://www.linkedin.com/in/niara-patterson-703657168/">LinkedIn</Button>
                </CardActions>
            </Card>
        </Grid>

        {/* Akin's Card */}
        <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt="akin memoji"
                    height="300"
                    src={image2}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Akinlabi Mason-Hogans
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Backend Developer
                    </Typography>
                    <Typography variant="body2" color="text.primary">
                    I am a graduating senior computer science student and I love anime. Connect with me on LinkedIn to learn more about me!
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" target="_blank" href="https://www.linkedin.com/in/akinlabi-mason-hogans/">LinkedIn</Button>
                </CardActions>
            </Card>
        </Grid>

        {/* Dimitri's Card */}
        <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt="dimitri memoji"
                    height="300"
                    src={image3}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Dimitri Law
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Backend and API Developer
                    </Typography>
                    <Typography variant="body2" color="text.primary">
                    I am a graduating senior computer science student and an entrepreneur. Connect with me on LinkedIn to learn more about me!
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" target="_blank" href="https://www.linkedin.com/in/dimitri-law-4534a555/">LinkedIn</Button>
                </CardActions>
            </Card>
        </Grid>

    </Grid>
    
  );
}