const TemplateRender = (state = "", action) => {
    switch (action.type) {
      case "TEMPLATE_RENDER":
        return (state = action.payload);
      default:
        return state;
    }
  };

  export default TemplateRender