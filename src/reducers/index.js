import WebsiteName from "./WebsiteName";
import WebsiteUrl from "./WebsiteUrl";
import WebsiteQrCode from "./WebsiteQrCode";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  websiteName: WebsiteName,
  websiteUrl: WebsiteUrl,
  websiteQrCode: WebsiteQrCode,
});

export default allReducers;
