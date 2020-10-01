import React from "react";
import StaticData from "../utils/StaticData";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateQrCode } from "../actions";
const OneTemplate = ({ match }) => {
  const dispatch = useDispatch();
  const url = useSelector((state) => state.websiteUrl);

  const template = StaticData.filter(
    (item) => item.id === match.params.id
  ).map((item) => <div key={item.id}>{item.templateBody}</div>);
  return (
    <div className='chosen-template'>
      {template}
      <Link className='save-button' to="/" onClick={() => dispatch(updateQrCode(url))}>
        Save
      </Link>
    </div>
  );
};

export default OneTemplate;
