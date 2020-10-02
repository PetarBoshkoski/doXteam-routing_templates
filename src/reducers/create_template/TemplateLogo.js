const TemplateLogo = (state = "", action) => {
    switch (action.type) {
      case "CREATETEMPLATE_LOGO":
        return (state = action.payload);
      default:
        return state;
    }
  };

  export default TemplateLogo