import React, {useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  updateTemplateName,
  updateTemplateLogo,
  updateTemplateURL,
  updateTemplateBgColor,
} from "../actions/index";
import QrCode from "qrcode.react";
import ImportRender from "./ImportRender";
import ReactHtmlParser from "react-html-parser";
import uuid from "react-uuid";

const CreateTemplate = () => {
  const name = useSelector((state) => state.createTemplateName);
  // const logo = useSelector((state) => state.createTemplateLogo);
  const [companyName, setCompanyName] = useState('')
  const url = useSelector((state) => state.createTemplateUrl);
  const bgColor = "#fff";
  const templateRender = useSelector((state) => state.templateRender);
  const importedTemplate = ReactHtmlParser(templateRender);

  const data = importedTemplate.map((item) => <div key={uuid()}>{item}</div>);

  useEffect(()=>{
    let companyName = document && document.getElementById('companyName') && document.getElementById('companyName').textContent
    setCompanyName(companyName ? companyName.concat(name) : companyName)
  })

  // console.log(importedTemplate.find(x => x.props.children.type == 'h1'))
  // useEffect(() => {
  //   iterateObject(importedTemplate)
  // }, [templateRender])

  // let companyWebsite = ReactHtmlParser(templateRender).map((item) => item.props.id === 'companyWebsite' ? JSON.stringify(item.props.children).concat(url) : '')
  const dispatch = useDispatch();
  return (
    <div>
      <div className="left-sidebar">
        <div className="chosen-template">
          <ImportRender
            data={data}
            name={companyName}
          />
        </div>
      </div>
      <div className="right-sidebar">
        <div className="chosen-template">
          <input
            type="text"
            placeholder="Your company name"
            onChange={(event) =>
              dispatch(updateTemplateName(event.target.value))
            }
            value={name}
          />
          <input
            type="text"
            placeholder="Your company logo URL"
            onChange={(event) =>
              dispatch(updateTemplateLogo(event.target.value))
            }
          />
          <input
            type="text"
            placeholder="Your company wesbite"
            onChange={(event) =>
              dispatch(updateTemplateURL(event.target.value))
            }
          />
          <input
            type="text"
            placeholder="Enter template background color"
            onChange={(event) =>
              dispatch(updateTemplateBgColor(event.target.value))
            }
            value={bgColor}
          />
        </div>
      </div>
    </div>
  );
};

export default CreateTemplate;
