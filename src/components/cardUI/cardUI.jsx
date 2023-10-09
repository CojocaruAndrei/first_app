import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import univ from "../../assets/images/university.jpg";
import { useNavigate } from "react-router-dom";

export default function ActionAreaCard() {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate("/university")}>
      <Card sx={{ maxWidth: 345, height: "15rem" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={univ}
            alt="UniversityIcon"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              University
            </Typography>
            <Typography variant="body2" color="text.secondary">
              I graduated from Stefan cel Mare University with...
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
