class ErrorFormat {
    static format(code, text, hints) {
        return {
            code: code,
            text: text,
            hints: hints,
        };
    }
}

// Correctly export both `ErrorFormat` and `createRes`
module.exports = {
    ErrorFormat,
    createRes: function (message, httpMethod, endpointInformation, errorList,valuePassed) {
        return {
            text: message,
            timestamp: new Date(),
            valuePassed:valuePassed??'null',
            method: httpMethod,
            endpoint: endpointInformation,
            errors: errorList,
        };
    }
};
