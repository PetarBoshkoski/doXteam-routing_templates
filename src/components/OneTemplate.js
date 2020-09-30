import React from "react";
import StaticData from "../utils/StaticData";
import { Link } from "react-router-dom";


const OneTemplate = ({ match }) => {
  const template = StaticData.filter(
    (item) => item.id === match.params.id
  ).map((item) => <div key={item.id}>{item.templateBody}</div>);
  return (
    <div>
      {template}
      <Link to="/">Save</Link>
    </div>
  );
};

export default OneTemplate;
