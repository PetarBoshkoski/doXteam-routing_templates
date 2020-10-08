import React from "react";
import { useSelector } from "react-redux";
import { FlexContainer, Menus } from "../styles/templates_styling";

const ImportRender = (props) => {

  const name = useSelector((state) => state.createTemplateName);

  return (
    <FlexContainer bgColor={"#fff"}>
        {props.name}
        {props.data}
        {/* {ReactHtmlParser(templateRender).map((item) => JSON.stringify(item.props.children))} */}

      <Menus bottom="5%" left="5%" right="5%" width="90%">
        {/* {props.website} */}
      </Menus>
    </FlexContainer>
  );
};

export default ImportRender;
