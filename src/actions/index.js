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

export const updateTemplateName = (name) => {
    return {
        type: 'CREATETEMPLATE_NAME',
        payload: name
    }
}

export const updateTemplateLogo = (logo) => {
    return {
        type: 'CREATETEMPLATE_LOGO',
        payload: logo
    }
}

export const updateTemplateURL = (url) => {
    return {
        type: 'CREATETEMPLATE_URL',
        payload: url
    }
}

export const updateTemplateBgColor = (color) => {
    return {
        type: 'CREATETEMPLATE_BGCOLOR',
        payload: color
    }
}

export const updateTemplateRender = (template) => {
    return {
        type: 'TEMPLATE_RENDER',
        payload: template
    }
}