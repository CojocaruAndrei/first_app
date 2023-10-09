import React from "react";
import Header from "../../components/header/header";
import "../contact-page/contact.scss";
import { Link } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const Contact = () => {
  const handleRedirect = () => {
    const email = "cojocaruandrei99@gmail.com"; // Replace with your email

    const mailtoLink = `mailto:${email}`;

    window.location.href = mailtoLink;
  };
  return (
    <>
      <Header />
      <div className="">
        <h1 className="contact--title">
          Let's Get in Touch: Ways to Connect with Me
        </h1>
        <div className="flex justify-content-center">
          <div className="contact--text">
            <p className="text--data">
              Thank you for your interest in getting in touch with me. I welcome
              your feedback, questions, and suggestions. If you have a specific
              question or comment, please feel free to email me directly at
              &nbsp;{" "}
              <Link onClick={handleRedirect}>cojocaruandrei99@gmail.com</Link>{" "}
              &nbsp; I make an effort to respond to all messages within 24
              hours. . Finally, if you prefer to connect on social media, you
              can find me on &nbsp;
              <Link
                href="https://www.instagram.com/andrei.kojoo/"
                target="_blank"
              >
                instagram
              </Link>{" "}
              &nbsp; or{" "}
              <Link
                href="https://www.facebook.com/andrei.cojocaru.9678"
                target="_blank"
              >
                facebook
              </Link>{" "}
              &nbsp; . Thanks again for your interest, and I look forward to
              hearing from you!
            </p>
            <div className="icons--container--contact">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
