import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateTemplateRender } from '../actions/index'
const ImportTemplate = () => {
  const dispatch = useDispatch();
  return (
    <div className="import-template">
      <div>
        <h1 style={{ color: "#fff", opacity: 0.7 }}>
          Import your custom HTML template
        </h1>
        <textarea
          onChange={(event) => dispatch(updateTemplateRender(event.target.value))}
        ></textarea>
      </div>
      <Link to="create-template" className="save-button">
        Submit
      </Link>
    </div>
  );
};

export default ImportTemplate;
