import React, { useEffect, useState } from "react";
import "./degree.scss";
import fetchData from "../../services/api";
import Header from "../../components/header/header";
const Degree = () => {
  const [firstDegree, setFirstDegree] = useState(null);

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const data = await fetchData(); // Call the fetchData function from the Axios service
        const firstSectionKey = Object.keys(data)[4];
        const firstObjectInFirstSection = data[firstSectionKey][0];
        setFirstDegree(firstObjectInFirstSection);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataAsync();
  }, []);
  return (
    <>
      <Header />
      <h1 className="header--degree">Bachelor's degree</h1>

      <div className="degree--container">
        <p className="degree--paragraph">
          {firstDegree ? (
            <div className="degree--content">
              <p>{firstDegree.value}</p>
              <div>{firstDegree.value1}</div>
            </div>
          ) : (
            <p>Loading data...</p>
          )}
        </p>
      </div>
    </>
  );
};

export default Degree;
