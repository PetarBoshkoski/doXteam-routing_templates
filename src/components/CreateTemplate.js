import React from "react";
import { FlexContainer } from "../styles/templates_styling";
import { useSelector, useDispatch } from "react-redux";
import {
  updateTemplateName,
  updateTemplateLogo,
  updateTemplateURL,
  updateTemplateBgColor,
} from "../actions/index";
import QrCode from 'qrcode.react'
import ImportRender from './ImportRender'

const CreateTemplate = () => {
  const name = useSelector((state) => state.createTemplateName);
  const logo = useSelector((state) => state.createTemplateLogo);
  const url = useSelector((state) => state.createTemplateUrl);
  const bgColor = '#fff';
  const templateRender = useSelector((state) => state.templateRender);  
  const dispatch = useDispatch();

  return (
    <div>
      <div className="left-sidebar">
        <div className="chosen-template">

            <ImportRender name={name} qrcode={url ? <QrCode value={url}/> : ''}/>

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
