import React, { useEffect, useState } from "react";
import fetchData from "../../services/api";
import face from "../../assets/images/face.png";
import { useNavigate } from "react-router-dom";
import "./aboutUniv.scss";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import JavascriptIcon from "@mui/icons-material/Javascript";
import CssIcon from "@mui/icons-material/Css";
import HtmlIcon from "@mui/icons-material/Html";
import CodeIcon from "@mui/icons-material/Code";
import Icon1 from "../../assets/images/icons8-javascript-48.png";
import Icon2 from "../../assets/images/icons8-css-logo-100.png";
import Icon3 from "../../assets/images/icons8-html-5-100.png";
import Icon4 from "../../assets/images/icons8-react-100.png";

const AboutSkill = () => {
  const navigate = useNavigate();

  const [firstObject, setFirstObject] = useState(null);

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const data = await fetchData(); // Call the fetchData function from the Axios service
        const firstSectionKey = Object.keys(data)[1];
        const firstObjectInFirstSection = data[firstSectionKey][0];
        setFirstObject(firstObjectInFirstSection);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataAsync();
  }, []);
  return (
    <>
      <div className="back--arrow">
        <ArrowBackIosIcon
          color="primary"
          sx={{ fontSize: 40 }}
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/about")}
        />
      </div>
      <div className="img--container" style={{ cursor: "pointer" }}>
        <img
          alt="face canvas"
          className="image--face"
          src={face}
          onClick={() => navigate("/about")}
        />
      </div>
      <div className="all--icons--skill">
        <img
          src={Icon1}
          style={{ height: "50px", width: "50px" }}
          alt="canvas"
        />
        <img
          src={Icon2}
          style={{ height: "50px", width: "50px" }}
          alt="canvas"
        />
        <img
          src={Icon3}
          style={{ height: "50px", width: "50px" }}
          alt="canvas"
        />
        <img
          src={Icon4}
          style={{ height: "50px", width: "50px" }}
          alt="canvas"
        />
      </div>
      <div className="university--style">
        {firstObject ? (
          <div style={{ marginTop: "10rem" }}>
            <p>
              {firstObject.value1}&nbsp;{""} {firstObject.value2}&nbsp;{" "}
              {firstObject.value3} &nbsp;{""}
              {firstObject.value4}
            </p>

            <p>
              {firstObject.value5}&nbsp;{""} {firstObject.value6}&nbsp;{" "}
              {firstObject.value7}
            </p>
            <p>
              {firstObject.value8}&nbsp;{""} {firstObject.value9}&nbsp;{" "}
              {firstObject.value10}
            </p>
            <p>
              {firstObject.value11}&nbsp;{""} {firstObject.value12}&nbsp;{" "}
              {firstObject.value13}
            </p>
            <p>
              {firstObject.value14}&nbsp;{""} {firstObject.value15}
            </p>
          </div>
        ) : (
          <p>Loading data...</p>
        )}
      </div>
      <div className="icons--cont">
        <JavascriptIcon color="primary" sx={{ fontSize: 60 }} />
        <CssIcon color="primary" sx={{ fontSize: 60 }} />
        <HtmlIcon color="primary" sx={{ fontSize: 60 }} />
        <CodeIcon color="primary" sx={{ fontSize: 60 }} />
      </div>
    </>
  );
};

export default AboutSkill;
