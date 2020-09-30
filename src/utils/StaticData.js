import React from "react";
import { FlexContainer, Menus } from "../styles/templates_styling";
import QrCode from 'qrcode.react'

export default [
  {
    id: "1",
    templateBody: (
      <FlexContainer>
        <Menus top="5%" left="10%" right="10%" width="80%">
          {localStorage.getItem("restaurantName")}
        </Menus>

        <Menus top="40%" left="10%" right="10%" width="80%">
        {localStorage.getItem("restaurantWebsite") ? <QrCode value={localStorage.getItem("restaurantWebsite")}/> : ""}
        </Menus>
        <Menus bottom="5%" left="5%" right="5%" width="90%">
          {localStorage.getItem("restaurantWebsite")}
        </Menus>
      </FlexContainer>
    ),
  },
  {
    id: "2",
    templateBody: (
      <FlexContainer>
        <Menus top="5%" left="10%" right="10%" width="80%">
          {localStorage.getItem("restaurantName")}
        </Menus>

        <Menus top="40%" left="10%" right="10%" width="80%">
          
        </Menus>
        <Menus bottom="5%" left="5%" right="5%" width="90%">
          {localStorage.getItem("restaurantWebsite")}
        </Menus>
      </FlexContainer>
    ),
  },
  {
    id: "3",
    templateBody: (
      <FlexContainer>
      <Menus top="5%" left="10%" right="10%" width="80%">
        {localStorage.getItem("restaurantName")}
      </Menus>

      <Menus top="40%" left="10%" right="10%" width="80%">
        
      </Menus>
      <Menus bottom="5%" left="5%" right="5%" width="90%">
        {localStorage.getItem("restaurantWebsite")}
      </Menus>
    </FlexContainer>
    ),
  },
  {
    id: "4",
    templateBody: (
      <FlexContainer>
      <Menus top="5%" left="10%" right="10%" width="80%">
        {localStorage.getItem("restaurantName")}
      </Menus>

      <Menus top="40%" left="10%" right="10%" width="80%">
        
      </Menus>
      <Menus bottom="5%" left="5%" right="5%" width="90%">
        {localStorage.getItem("restaurantWebsite")}
      </Menus>
    </FlexContainer>
    ),
  },
  {
    id: "5",
    templateBody: (
      <FlexContainer>
      <Menus top="5%" left="10%" right="10%" width="80%">
        {localStorage.getItem("restaurantName")}
      </Menus>

      <Menus top="40%" left="10%" right="10%" width="80%">
        
      </Menus>
      <Menus bottom="5%" left="5%" right="5%" width="90%">
        {localStorage.getItem("restaurantWebsite")}
      </Menus>
    </FlexContainer>
    ),
  },
  {
    id: "6",
    templateBody: (
      <FlexContainer>
      <Menus top="5%" left="10%" right="10%" width="80%">
        {localStorage.getItem("restaurantName")}
      </Menus>

      <Menus top="40%" left="10%" right="10%" width="80%">
        
      </Menus>
      <Menus bottom="5%" left="5%" right="5%" width="90%">
        {localStorage.getItem("restaurantWebsite")}
      </Menus>
    </FlexContainer>
    ),
  },
];
