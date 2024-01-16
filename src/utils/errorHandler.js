/*
    Example of the kind of function we find in utils 
    An erro handler
*/

const consoleLogAndSendStatus = (res, _status, err) => {
    console.log(err);
    res.status(_status).json({message: err});
}


module.exports = {
    consoleLogAndSendStatus
}