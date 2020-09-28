import React from "react";
import { useState } from "react"

const Main = (props) => {
    const [name, setName] = useState(null)
    const [url, setURL] = useState(null)
  return (
    <div>
      <input type="text" placeholder="Please enter your restaurant name" onChange={(event) => setName(event.target.value)}/>
      <br />
      <input type="text" placeholder="Please enter your restaurant website URL" onChange={(event) => setURL(event.target.value)} />
      <div>QR Code</div>
      <button>PRINT</button>
    </div>
  );
};

export default Main;
