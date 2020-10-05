import WebsiteName from "./WebsiteName";
import WebsiteUrl from "./WebsiteUrl";
import WebsiteQrCode from "./WebsiteQrCode";
import TemplateName from './create_template/TemplateName'
import TemplateLogo from './create_template/TemplateLogo'
import TemplateURL from './create_template/TemplateURL'
import TemplateBgColor from './create_template/TemplateBgColor'
import TemplateRender from './create_template/TemplateRender'
import { combineReducers } from "redux";

const allReducers = combineReducers({
  websiteName: WebsiteName,
  websiteUrl: WebsiteUrl,
  websiteQrCode: WebsiteQrCode,
  createTemplateName: TemplateName,
  createTemplateLogo: TemplateLogo,
  createTemplateUrl: TemplateURL,
  createTemplateBgColor: TemplateBgColor,
  templateRender: TemplateRender
});

export default allReducers;
