const WebsiteUrl = (state = "", action) => {
    switch (action.type) {
      case "UPDATE_URL":
        return (state = action.payload);
      default:
        return state;
    }
  };

  export default WebsiteUrl