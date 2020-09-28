import React from "react";
import StaticData from '../utils/StaticData'
import '../styles/style.css'
const Template = (props) => {
  const templates = StaticData.map((item) => <div key={item.id}>{item.templateBody}</div>)
  return (
    <div>
      <div className="templates-container">
      {templates}
    </div>
    </div>
  );
};

export default Template;
