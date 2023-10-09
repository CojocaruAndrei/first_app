import React from "react";
import "./home-page.scss";
import Header from "../../components/header/header";
// import Card from "../../components/card/card";
import { Typewriter } from "react-simple-typewriter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "@mui/material";
import face from "../../assets/images/face.png";

const HomePage = () => {
  return (
    <>
      <Header />
      <div className="Home--page--container" style={{ color: "white" }}>
        <div className="Typed--text">
          <div className="img--container">
            <img className="image--face" src={face} />
          </div>
          <h3 className="h3--home--container">
            Hi, I'm{" "}
            <span style={{ color: "#2C75D3" }}>
              <Typewriter
                words={["Andrei Cojocaru", "a Front-End Developer"]}
                loop={true}
                cursor
                cursorStyle="."
                typeSpeed={90}
                deleteSpeed={80}
                delaySpeed={2000}
              />
            </span>
            <div className="icons--container">
              <Link
                href="https://www.facebook.com/andrei.cojocaru.9678"
                target="_blank"
              >
                <FacebookIcon
                  color="primary"
                  sx={{ fontSize: 40 }}
                  style={{ cursor: "pointer" }}
                />
              </Link>

              <Link
                href="https://www.instagram.com/andrei.kojoo/"
                target="_blank"
              >
                <InstagramIcon
                  color="primary"
                  sx={{ fontSize: 40 }}
                  style={{ cursor: "pointer" }}
                />
              </Link>

              <Link href="https://github.com/CojocaruAndrei" target="_blank">
                <GitHubIcon
                  color="primary"
                  sx={{ fontSize: 40 }}
                  style={{ cursor: "pointer" }}
                />
              </Link>
              <Link
                href="https://www.linkedin.com/in/andrei-cojocaru-13bb93253"
                target="_blank"
              >
                <LinkedInIcon
                  color="primary"
                  sx={{ fontSize: 40 }}
                  style={{ cursor: "pointer" }}
                />
              </Link>
            </div>
          </h3>
        </div>
      </div>
    </>
  );
};

export default HomePage;
