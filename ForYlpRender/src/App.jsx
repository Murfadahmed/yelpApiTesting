import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setDAta] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const option = {
          method: "GET",
          header: {
            accept: "application/json",
          },
        };
        let loca = "london";
        const response = await fetch(
          `http://localhost:3001/api/yelp?location=${loca}&sort_by=best_match&limit=10`,
          option
        );

        const json = await response.json();
        const { businesses } = json;
        setDAta(businesses);

        // console.log(data);
        // for (let i = 0; i < data.length; i++) {
        //   console.log(data[i].image_url);
        // }
      } catch (error) {
        console.error("Error fecthing data ", error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <div
        className="container"
        style={{
          width: "100%",
          minHeight: "100vh",
          backgroundColor: "lightcoral",
          display: "grid",
          placeItems: "center",
        }}
      >
        {/* may yahn ye galti kr raha tha k return ke leye round bracket nhi brkey same js ki tarah curly bracket laga raga tha */}
        <h1>there is the data wil be render</h1>
        {data.map((item, index) => (
          <div key={index}>
            <img
              style={{
                width: 500,
                height: 500,
                objectFit: "contain",
                borderRadius:'40px'
              }}
              className="imageBar"
              src={item.image_url}
              alt={`item#${index}`}
            />
            {/* // console.log(item.image_url); */}
            <h5>{item.alias}</h5>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
