import React, { useState, useEffect } from "react";
import fetchData from "../../services/api";
import Header from "../../components/header/header";
import Card from "../../components/cardUI/cardUI";
import CardVol from "../../components/cardUIVolunt/cardVolunteer";
import CardSkill from "../../components/cardUIskill/cardSkill";

import "./about.scss";
const MyComponent = () => {
  const [firstObject, setFirstObject] = useState(null);

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const data = await fetchData(); // Call the fetchData function from the Axios service
        const firstSectionKey = Object.keys(data)[0];
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
      <Header />
      <div className="about--container grid m-0 mt-4">
        <div className="col-12">
          <div
            className=" grid justify-content-around "
            style={{ fontSize: "25px" }}
          >
            {firstObject ? (
              <div className="about--content col-12 md:col-6 max-w-500 mb-8 justify-content-center flex align-items-center align-items-center ">
                <h3 className="text-center">{firstObject.value}</h3>
              </div>
            ) : (
              <p className="col-12 md:col-6 max-w-254">Loading data...</p>
            )}
          </div>
        </div>
        <div className="col-12">
          <div className="grid justify-content-around gap-3">
            <Card className="col-12 md:col-6 max-w-254" />
            <CardVol className="col-12 md:col-6 max-w-254" />
            <CardSkill className="col-12 md:col-6 max-w-254" />
          </div>
        </div>
      </div>
    </>
  );
};

export default MyComponent;
