const TemplateURL = (state = "", action) => {
    switch (action.type) {
      case "CREATETEMPLATE_URL":
        return (state = action.payload);
      case "CREATETEMPLATE_BGCOLOR":
        return (state = action.payload);
      default:
        return state;
    }
  };

  export default TemplateURL