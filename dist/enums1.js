"use strict";
const express = require("express");
const app = express();
var ResponseStatus;
(function (ResponseStatus) {
    ResponseStatus[ResponseStatus["Success"] = 200] = "Success";
    ResponseStatus[ResponseStatus["Error"] = 500] = "Error";
    ResponseStatus[ResponseStatus["NotFound"] = 411] = "NotFound";
})(ResponseStatus || (ResponseStatus = {}));
app.get("/", function (req, res) {
    if (!req.query.userId) {
        res.status(ResponseStatus.NotFound).json({});
    }
    res.status(ResponseStatus.Error).json({});
});
app.listen(3000);
