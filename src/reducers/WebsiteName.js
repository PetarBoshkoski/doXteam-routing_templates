const WebsiteName = (state = "", action) => {
    switch (action.type) {
      case "UPDATE_NAME":
        return (state = action.payload);
      default:
        return state;
    }
  };

  export default WebsiteName