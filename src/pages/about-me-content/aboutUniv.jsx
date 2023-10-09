import React, { useEffect, useState } from "react";
import fetchData from "../../services/api";
import face from "../../assets/images/face.png";
import { useNavigate } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import "./aboutUniv.scss";
const AboutUniv = () => {
  const navigate = useNavigate();

  const [firstObject, setFirstObject] = useState(null);

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const data = await fetchData(); // Call the fetchData function from the Axios service
        const firstSectionKey = Object.keys(data)[3];
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
          className="image--face"
          src={face}
          onClick={() => navigate("/about")}
        />
      </div>
      <div className="university--style">
        {firstObject ? (
          <div>
            <p>{firstObject.value}</p>
            <p>{firstObject.value1}</p>
          </div>
        ) : (
          <p>Loading data...</p>
        )}
      </div>
    </>
  );
};

export default AboutUniv;
