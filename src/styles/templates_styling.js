import styled from "styled-components";

export const FlexContainer = styled.div`
  position: relative;
  background-image: ${(props) => `url(${props.background})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: ${(props) => props.bgColor};
  opacity: 0.7;
  font-size: 2.1vw;
  height: 500px;
  border: 1px solid black;
  display: ${(props) => props.display};
  flex-direction: ${(props) => props.flexDirection};
  border-radius: 10px;
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.2), 0 6px 0px 0 rgba(0, 0, 0, 0.19);
  -webkit-box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.2),
    0 6px 0px 0 rgba(0, 0, 0, 0.19);
  -moz-box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.2),
    0 6px 0px 0 rgba(0, 0, 0, 0.19);
`;

export const Menus = styled.div`
  position: absolute;
  text-align: center;
  width: ${(props) => props.width};
  top: ${(props) => props.top};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  word-wrap: break-word;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-weight: bold;
  background-color: ${(props) => props.h1style};
  background-image: ${(props) => `url(${props.backgroundimage})`};
`;

export const StyledImg = styled.div`
  background-image: ${(props) => `url(${props.src})`};
  height: 100px;
  max-width: 80%;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  margin: 0 auto;
  border-radius: 10px;
`;