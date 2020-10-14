import React, { useEffect } from "react";
import { FlexContainer, Menus } from "../styles/templates_styling";
import { useSelector } from "react-redux";
import { renderToString, renderToStaticMarkup } from "react-dom/server";
import QrCode from "qrcode.react";

const ImportRender = () => {
  // const logo = useSelector((state) => state.createTemplateLogo);
  const name = useSelector((state) => state.createTemplateName);
  const url = useSelector((state) => state.createTemplateUrl);
  let qrcode = <QrCode renderAs="svg" value={url} id="myCanvas" />;

  console.log("log",renderToString(<div>{qrcode}</div>));
  
  const templateRender = useSelector((state) => state.templateRender);
  let propertiesToReplace = {
    "{{companyName}}": name,
    "{{companyWebsite}}": url,
    "{{qrCode}}": renderToString(<div>{qrcode}</div>),
  };
  useEffect(() => {
    generateTemplate();
  }, [url]);
  const generateTemplate = () => {
    let ret = templateRender;
    for (let [key, value] of Object.entries(propertiesToReplace)) {
      ret = ret.replace(key, value);
    }
    return { __html: ret };
  };
  const data = <div dangerouslySetInnerHTML={generateTemplate()}></div>;

  return (
    <FlexContainer bgColor={"#fff"}>
    
      {data}
      <Menus bottom="5%" left="5%" right="5%" width="90%">
        {/* {props.website} */}
      </Menus>
    </FlexContainer>
  );
};

export default ImportRender;
