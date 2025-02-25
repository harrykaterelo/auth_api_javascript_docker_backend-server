
exports.validationErrorData = function (res,err){

    return res.status(400).json(err);
}

exports.notFoundResponse = function(res,err){
    return res.status(404).json(err);
}
exports.errorResponse = function(res,err){
    return res.status(500).json(err);
}