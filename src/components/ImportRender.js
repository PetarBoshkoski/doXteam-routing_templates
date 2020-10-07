import React from "react";
import { useSelector } from "react-redux";
import { FlexContainer, Menus } from "../styles/templates_styling";

const ImportRender = (props) => {
  const templateRender = useSelector((state) => state.templateRender);
  return (
    <FlexContainer bgColor={"#fff"}>
      <Menus  top="5%" left="10%" right="10%" width="80%">
        {/* {props.name} */}
        {/* {ReactHtmlParser(templateRender).map((item) => JSON.stringify(item.props.children))} */}
      </Menus>
      <Menus bottom="5%" left="5%" right="5%" width="90%">
        {/* {props.website} */}
      </Menus>
    </FlexContainer>
  );
};

export default ImportRender;
