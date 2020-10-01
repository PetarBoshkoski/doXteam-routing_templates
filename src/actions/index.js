export const updateName = (name) => {
    return {
        type: 'UPDATE_NAME',
        payload: name
    }
}

export const updateUrl = (url) => {
    return {
        type: 'UPDATE_URL',
        payload: url
    }
}

export const updateQrCode = (url) => {
    return {
        type: 'UPDATE_QRCODE',
        payload: url
    }
}