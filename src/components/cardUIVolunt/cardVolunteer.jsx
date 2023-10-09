import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import univ from "../../assets/images/volunteer.jpg";
import { useNavigate } from "react-router-dom";

export default function ActionAreaCard() {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate("/volunteer")}>
      <Card sx={{ width: "345px", height: "15rem" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={univ}
            alt="UniversityIcon"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Volunteer
            </Typography>
            <Typography variant="body2" color="text.secondary">
              I was volunteer at ...
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
