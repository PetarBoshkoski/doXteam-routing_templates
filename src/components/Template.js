import React, { useState, useEffect } from "react";
import StaticData from '../utils/StaticData'
import '../styles/style.css'
import { Link,useHistory, useParams} from "react-router-dom";

const Template = () => {
  
  const [templates, setTemplates] = useState(null)
  
  useEffect(() => {
    setTemplates(StaticData.map((item) => <div key={item.id}><Link to={`/templates/${item.id}`}>{item.templateBody}</Link></div>))
  },[localStorage.getItem("restaurantName")])
  
  return (
    <div>
      <div className="templates-container">
      {templates}
    </div>
    </div>
  );
};

export default Template;