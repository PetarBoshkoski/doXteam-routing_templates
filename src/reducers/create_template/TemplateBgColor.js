const TemplateBgColor = (state = "", action) => {
    switch (action.type) {
      case "CREATETEMPLATE_BGCOLOR":
        return (state = action.payload);
      default:
        return state;
    }
  };

  export default TemplateBgColor