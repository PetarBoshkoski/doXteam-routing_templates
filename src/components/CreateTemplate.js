import React from "react";
import { FlexContainer, Menus, StyledImg } from "../styles/templates_styling";
import { useSelector, useDispatch } from "react-redux";
import { updateTemplateName, updateTemplateLogo, updateTemplateURL, updateTemplateBgColor } from "../actions/index";

const CreateTemplate = () => {
  const name = useSelector((state) => state.createTemplateName);
  const logo = useSelector((state) => state.createTemplateLogo);
  const url = useSelector((state) => state.createTemplateUrl);
  const bgColor = useSelector((state) => state.createTemplateBgColor)
  const dispatch = useDispatch();
  return (
    <div>
      <div className="left-sidebar">
        <div className="chosen-template">
          <FlexContainer bgColor={bgColor}>
            <Menus top="5%" left="10%" right="10%" width="80%">
              <div className="create-template-name">{name}</div>
            </Menus>
            <Menus top="40%" left="10%" right="10%" width="80%">
              {logo ? <StyledImg src={logo} alt="Company logo template"/> : ''}
            </Menus>
            <Menus bottom="5%" left="5%" right="5%" width="90%">
                {url}
            </Menus>
          </FlexContainer>
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
            onChange={(event) => dispatch(updateTemplateLogo(event.target.value))}
          />
          <input type="text" placeholder="Your company wesbite" onChange={(event) => dispatch(updateTemplateURL(event.target.value))}/>
          <input type="text" placeholder="Enter template background color" onChange={(event) => console.log(dispatch(updateTemplateBgColor(event.target.value)))}/>
        </div>
      </div>
    </div>
  );
};

export default CreateTemplate;
