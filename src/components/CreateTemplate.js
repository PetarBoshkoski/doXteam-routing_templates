import React from "react";
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

const CreateTemplate = () => {
  const name = useSelector((state) => state.createTemplateName);
  // const logo = useSelector((state) => state.createTemplateLogo);
  const url = useSelector((state) => state.createTemplateUrl);
  const bgColor = "#fff";
  const templateRender = useSelector((state) => state.templateRender);
  const importedTemplate = ReactHtmlParser(templateRender);

  const iterateObject = (obj) => {
    for (let prop in obj) {
      if (typeof(obj[prop]) == "object") {
        console.log(obj.constructor)
      }
    }
  };
  importedTemplate.filter((item) => iterateObject(item));

  // useEffect(() => {
  //   iterateObject(importedTemplate)
  // }, [templateRender])
  // let companyName = ReactHtmlParser(templateRender).map((item) => item.type === 'body' && item.props.id === 'companyName' ? JSON.stringify(item.props.children).concat(name) : '')
  // let companyWebsite = ReactHtmlParser(templateRender).map((item) => item.props.id === 'companyWebsite' ? JSON.stringify(item.props.children).concat(url) : '')
  // let h1style = ReactHtmlParser(templateRender).map((item) => item.props.style)
  const dispatch = useDispatch();
  return (
    <div>
      <div className="left-sidebar">
        <div className="chosen-template">
          <ImportRender
          // name={companyName} website={companyWebsite} h1style={h1style}
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
