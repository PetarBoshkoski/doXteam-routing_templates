const WebsiteQrCode = (state = "", action) => {
    switch (action.type) {
      case "UPDATE_QRCODE":
        return (state = action.payload);
      default:
        return state;
    }
  };

  export default WebsiteQrCode