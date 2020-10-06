import React from "react";
import { useSelector } from "react-redux";
import { FlexContainer, Menus } from "../styles/templates_styling";

const ImportRender = (props) => {
  const templateRender = useSelector((state) => state.templateRender);
  console.log(templateRender);

  return (
    <FlexContainer bgColor={'#fff'}>
      <Menus top="5%" left="10%" right="10%" width="80%">
        <h1>{props.name}</h1>
      </Menus>
      <Menus top="40%" left="10%" right="10%" width="80%">
        <div>{props.qrcode}</div>
      </Menus>
      </FlexContainer>
  );
};

export default ImportRender;
