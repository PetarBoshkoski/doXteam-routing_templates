import React from "react";
import { FlexContainer, Menus } from "../styles/templates_styling";
import { useSelector } from "react-redux";
import QrCode from 'qrcode.react'

const SingleTemplate = () => {
  const name = useSelector((state) => state.websiteName);
  const url = useSelector((state) => state.websiteUrl);
  return (
    <FlexContainer>
      <Menus top="5%" left="10%" right="10%" width="80%">
        {name}
      </Menus>
      <Menus top="40%" left="10%" right="10%" width="80%">
       {url ? <QrCode value={url} /> : ''}
      </Menus>
      <Menus bottom="5%" left="5%" right="5%" width="90%">
        {url}
      </Menus>
    </FlexContainer>
  );
};

export default SingleTemplate;
