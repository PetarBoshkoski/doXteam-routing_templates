import React from "react";
import StaticData from '../utils/StaticData'
import '../styles/style.css'
import { Link,useHistory, useParams} from "react-router-dom";

const Template = () => {

  const { name } = useParams();
  const {url} = useParams();
  console.log(name,url);
  
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