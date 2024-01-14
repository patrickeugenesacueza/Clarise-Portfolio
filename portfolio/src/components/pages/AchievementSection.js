import React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import cert1 from "../../image/cert1.png"
import cert2 from "../../image/cert2.jpg";
import cert3 from "../../image/cert3.jpg";

export default function AchievementSection() {
  return (
    <div className="bg-white h-[auto] md:h-[120vh] lg:h-[auto] py-[5rem] px-0 md:px-[10.5rem] lg:text-start w-full flex items-center justify-center ">
      <Grid container spacing={3} className="mb-4">
        {/* 1st certificate */}
        <Grid item xs={12} md={4} className="flex justify-center">
          <Card sx={{ maxWidth: 345 }} className="shadow-2xl">
            <CardMedia
              sx={{ height: 140 }}
              image={cert2}
              title="Gawad Karunungan"
            />
            <CardContent className="bg-[#b37eb5]">
              <Typography gutterBottom variant="h5" component="div">
                Semester award: Gawad Karunungan
              </Typography>
              <Typography variant="body2" color="text.secondary">
                The Gawad Karunungan Award is a prestigious recognition bestowed
                upon an outstanding student in the Bachelor of Science in
                Financial Management program.
              </Typography>
            </CardContent>
            <CardActions className="bg-[#b37eb5]">
              <a
                href="https://drive.google.com/file/d/122Wz4RRzYc6OQiOedPNwBpBTTYLhxOXv/view?usp=sharing"
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
              image={cert1}
              title="How-to-Series: Building a Path towards Financial Prowess"
            />
            <CardContent className="bg-[#b37eb5]">
              <Typography gutterBottom variant="h5" component="div">
                How-to-Series: Building a Path towards Financial Prowess
              </Typography>
              <Typography variant="body2" color="text.secondary">
                The "How-to-Series: Building a Path towards Financial Prowess"
                is a comprehensive guide designed to empower individuals on
                their journey to financial mastery.
              </Typography>
            </CardContent>
            <CardActions className="bg-[#b37eb5]">
              <a
                href="https://drive.google.com/file/d/12K1N2rutDGOTq6ML6brOGVmoGQysE6yw/view?usp=sharing"
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
              image={cert3}
              title="Overall Top 2"
            />
            <CardContent className="bg-[#b37eb5]">
              <Typography gutterBottom variant="h5" component="div">
                Phoenix Awards: Overall Top 2 (GWA 1.3125)
              </Typography>
              <Typography variant="body2" color="text.secondary">
                The Gawad Karunungan Award is a prestigious recognition bestowed
                upon an outstanding student in the Bachelor of Science in
                Financial Management program.
              </Typography>
            </CardContent>
            <CardActions className="bg-[#b37eb5]">
              <a
                href="https://drive.google.com/file/d/1240IuwpNxauhr3G-aCS4rY76-v2fS7Sc/view?usp=sharing"
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
              image="https://udemy-certificate.s3.amazonaws.com/image/UC-3521c70d-7f8c-4c4c-a5df-bc5bf0848414.jpg?v=1690617477000"
              title="green iguana"
              loading="lazy"
            />

            <CardContent className="bg-[#b37eb5]">
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className="font-bold"
              >
                Financial Analysis & Modeling | Automobile Section
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className="font-bold"
              >
                The "Financial Analysis & Modeling | Automobile Section" course
                delves into the intricacies of financial analysis and modeling
                within the context of the automotive industry.
              </Typography>
            </CardContent>
            <CardActions className="bg-[#b37eb5]">
              <a
                href="https://www.udemy.com/certificate/UC-3521c70d-7f8c-4c4c-a5df-bc5bf0848414/"
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
              image="https://udemy-certificate.s3.amazonaws.com/image/UC-977ceee6-810a-44e2-ba77-45335bfbb081.jpg?v=1689475213000"
              title="green iguana"
            />
            <CardContent className="bg-[#b37eb5]">
              <Typography gutterBottom variant="h5" component="div">
                Introduction to Forex-learn to trade forex
              </Typography>
              <Typography variant="body2" color="text.secondary">
                "Introduction to Forex - Learn to Trade Forex" is a
                comprehensive course designed to provide participants with
                foundational knowledge and practical skills.
              </Typography>
            </CardContent>
            <CardActions className="bg-[#b37eb5]">
              <a
                href="https://www.udemy.com/certificate/UC-977ceee6-810a-44e2-ba77-45335bfbb081/"
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
