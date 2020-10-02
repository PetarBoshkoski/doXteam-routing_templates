const TemplateName = (state = "", action) => {
    switch (action.type) {
      case "CREATETEMPLATE_NAME":
        return (state = action.payload);
      default:
        return state;
    }
  };

  export default TemplateName