import React from "react";
import { useState, useEffect } from "react";

const Main = () => {
  const [name, setName] = useState(() => {
    const localData = localStorage.getItem('restaurantName')
    return localData ? localData : ''
  })
  const [website, setWebsite] = useState(() => {
    const localData = localStorage.getItem('restaurantWebsite')
    return localData ? localData : ''
  })
  useEffect(() => {
    localStorage.setItem('restaurantName', name)
    localStorage.setItem('restaurantWebsite', website)
  }, [name, website])
  
  return (
    <div>
      <input
        type="text"
        placeholder="Please enter your restaurant name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Please enter your restaurant website URL"
        value={website}
        onChange={(event) => setWebsite(event.target.value)}
      />
      <div>QR Code</div>
      <button>PRINT</button>
    </div>
  );
};

export default Main;
