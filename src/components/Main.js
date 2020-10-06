import React, { useRef } from "react";
import QrCode from "qrcode.react";
import { useSelector, useDispatch } from "react-redux";
import { updateName } from "../actions";
import { updateUrl } from "../actions";
import { Link } from "react-router-dom";
import SingleTemplate from './SingleTemplate'

const Main = () => {
  const name = useSelector((state) => state.websiteName);
  const url = useSelector((state) => state.websiteUrl);
  const qrcode = useSelector((state) => state.websiteQrCode);
  const dispatch = useDispatch();
  return (
    <div className="inputs-container">
      <input
        type="text"
        placeholder="Please enter your restaurant name"
        value={name}
        onChange={(event) => dispatch(updateName(event.target.value))}
      />
      <br />
      <input
        type="text"
        placeholder="Please enter your restaurant website URL"
        value={url}
        onChange={(event) => dispatch(updateUrl(event.target.value))}
      />
      
      <div className="chosen-template" id="pdfTemplate">
      { name && url && qrcode ? <SingleTemplate /> : ''}
      
        {/* <FlexContainer>
          <Menus>{name}</Menus>
          <Menus>
            <div>{qrcode ? <QrCode value={qrcode} size={200} /> : ""}</div>
          </Menus>
          <Menus>{url}</Menus>
        </FlexContainer> */}
      </div>
      {/* <button>PRINT</button> */}
      
      {name && url ? (
        <Link to="templates" className="save-button">
          See your templates
        </Link>
      ) : (
        ""
      )}
    </div>
  );
};



export default Main;
