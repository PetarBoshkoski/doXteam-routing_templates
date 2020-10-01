import React from "react";
import QrCode from "qrcode.react";
import { useSelector, useDispatch } from "react-redux";
import { updateName } from "../actions";
import { updateUrl } from "../actions";
const Main = () => {
  const name = useSelector((state) => state.websiteName);
  const url = useSelector((state) => state.websiteUrl);
  const qrcode = useSelector((state) => state.websiteQrCode);
  const dispatch = useDispatch();
  return (
    <div className='inputs-container'>
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
      <div>{qrcode ? <QrCode value={qrcode} /> : ""}</div>
      {/* <button>PRINT</button> */}
    </div>
  );
};

export default Main;
