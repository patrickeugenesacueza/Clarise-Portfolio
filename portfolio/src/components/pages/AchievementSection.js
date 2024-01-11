import React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

export default function AchievementSection() {
  return (
    <div className="bg-white h-[auto] md:h-[120vh] lg:h-[auto] py-[5rem] px-0 md:px-[10.5rem] lg:text-start w-full flex items-center justify-center ">
      <Grid container spacing={3} className="mb-4">
        {/* 1st certificate */}
        <Grid item xs={12} md={4} className="flex justify-center">
          <Card sx={{ maxWidth: 345 }} className="shadow-2xl">
            <CardMedia
              sx={{ height: 140 }}
              image="/static/images/cards/contemplative-reptile.jpg"
              title="green iguana"
            />
            <CardContent className="bg-[#b37eb5]">
              <Typography gutterBottom variant="h5" component="div">
                title
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions className="bg-[#b37eb5]">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="small">VIEW</Button>
              </a>
            </CardActions>
          </Card>
        </Grid>

        {/* 2nd certificate */}
        <Grid item xs={12} md={4} className="flex justify-center">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="/static/images/cards/contemplative-reptile.jpg"
              title="green iguana"
            />
            <CardContent className="bg-[#b37eb5]">
              <Typography gutterBottom variant="h5" component="div">
                title
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions className="bg-[#b37eb5]">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                
              >
                <Button size="small">VIEW</Button>
              </a>
            </CardActions>
          </Card>
        </Grid>

        {/* 3rd certificate */}
        <Grid item xs={12} md={4} className="flex justify-center">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="/static/images/cards/contemplative-reptile.jpg"
              title="green iguana"
            />
            <CardContent className="bg-[#b37eb5]">
              <Typography gutterBottom variant="h5" component="div">
                title
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions className="bg-[#b37eb5]">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="small">VIEW</Button>
              </a>
            </CardActions>
          </Card>
        </Grid>

        {/* 4th certificate */}
        <Grid item xs={12} md={4} className="flex justify-center">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="https://udemy-certificate.s3.amazonaws.com/image/UC-7b8dfb81-ab73-46e8-82e7-657eac82c8d6.jpg"
              title="green iguana"
              loading="lazy"
            />

            <CardContent className="bg-[#b37eb5]">
              <Typography gutterBottom variant="h5" component="div" className="font-bold">
                title
              </Typography>
              <Typography variant="body2" color="text.secondary" className="font-bold">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions className="bg-[#b37eb5]">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="small">VIEW</Button>
              </a>
            </CardActions>
          </Card>
        </Grid>

        {/* 4th certificate */}
        <Grid item xs={12} md={4} className="flex justify-center">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="/static/images/cards/contemplative-reptile.jpg"
              title="green iguana"
            />
            <CardContent className="bg-[#b37eb5]">
              <Typography gutterBottom variant="h5" component="div">
                title
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions className="bg-[#b37eb5]">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="small">VIEW</Button>
              </a>
            </CardActions>
          </Card>
        </Grid>

        {/* 4th certificate */}
        <Grid item xs={12} md={4} className="flex justify-center">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="/static/images/cards/contemplative-reptile.jpg"
              title="green iguana"
            />
            <CardContent className="bg-[#b37eb5]">
              <Typography gutterBottom variant="h5" component="div">
                title
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions className="bg-[#b37eb5]">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="small">VIEW</Button>
              </a>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
