import React, { useEffect } from "react";
import ReactDOM from 'react-dom'
import { FlexContainer, Menus } from "../styles/templates_styling";
import { useSelector } from "react-redux";
import { renderToString, renderToStaticMarkup } from "react-dom/server";
import QrCode from "qrcode.react";
const ImportRender = (props) => {
  const name = useSelector((state) => state.createTemplateName);
  // const logo = useSelector((state) => state.createTemplateLogo);
  const url = useSelector((state) => state.createTemplateUrl);
  const templateRender = useSelector((state) => state.templateRender);
  console.log(url)
  const populateJournal = (obj) => {

    const j = Object.values(obj);
    var journalEntries = [];

      for (var i = 0; i < j.length; i++){
        journalEntries.push(
          <canvas>
          dasdas
          </canvas>);

      }
     return(<div>{journalEntries}</div>);

}
  
  let qrcode = <QrCode value={url} id={url} /> ;
  console.log(populateJournal(qrcode))
  let propertiesToReplace = {
    "{{companyName}}": name,
    "{{companyWebsite}}": url,
    "{{qrCode}}": qrcode,
  };
  
  useEffect(() => {
    generateTemplate();
  });
  const generateTemplate = () => {
    let ret = templateRender;
    for (let [key, value] of Object.entries(propertiesToReplace)) {
      ret = ret.replace(key, value);
    }
    return { __html: ret };
  };
  console.log(generateTemplate())
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
