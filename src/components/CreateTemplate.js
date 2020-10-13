import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  updateTemplateName,
  updateTemplateLogo,
  updateTemplateURL,
  updateTemplateBgColor,
} from "../actions/index";
import ImportRender from "./ImportRender";
import QrCode from "qrcode.react";

const CreateTemplate = () => {
  const name = useSelector((state) => state.createTemplateName);
  // const logo = useSelector((state) => state.createTemplateLogo);
  const url = useSelector((state) => state.createTemplateUrl);
  const bgColor = "#fff";
  const templateRender = useSelector((state) => state.templateRender);

  let qrcode = url ? <QrCode value={url} id="canvas" /> : "";

  let propertiesToReplace = {
    "{{companyName}}": name,
    "{{companyWebsite}}": url,
    // "{{qrCode}}": console.log(qrcode.url),
  };
  // useEffect(() => {
  //   generateTemplate();
  // });
  // const generateTemplate = () => {
  //   let ret = templateRender;
  //   for (let [key, value] of Object.entries(propertiesToReplace)) {
  //     ret = ret.replace(key, value);
  //   }
  //   return { __html: ret };
  // };

  // const data = <div dangerouslySetInnerHTML={generateTemplate()}></div>;
  const dispatch = useDispatch();
  return (
    <div>
      <div className="left-sidebar">
        <div className="chosen-template">
          <ImportRender />
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
