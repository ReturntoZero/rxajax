
function AjaxActionWithData(url, data, successcallback, errorcallback, config) {
    if (typeof url === "undefined" || url === null) { return function () { console.log("url is undefined ") }; }
    if (typeof successcallback === "undefined") { successcallback = function () { return; } }
	if (typeof errorcallback === "undefined") { errorcallback = function () { return; } }
    if (!config) { config = { type: "POST", dataType: "json" }; }
    if (!config.type) { config.type = "POST" }
    if (!config.dataType) { config.dataType = "json" }
    if (!config.contentType) { config.contentType = "application/json; charset=utf-8" }

    $.ajax({
        url: url,
        type: config.type,
        contentType: config.contentType,
        dataType: config.dataType,
        data: data,
        success: successcallback,
        error: errorcallback
    });
};


function AjaxAction(url, successcallback, errorcallback, config) {
    if (typeof url === "undefined" || url === null) { return function () { console.log("url is undefined ") }; }
    if (typeof successcallback === "undefined") { successcallback = function () { return; } }
	if (typeof errorcallback === "undefined") { errorcallback = function () { return; } }
    if (!config) { config = { type: "POST", dataType: "json" }; }
    if (!config.type) { config.type = "POST" }
    if (!config.dataType) { config.dataType = "json" }

    $.ajax({
        url: url,
        type: config.type, 
        contentType: config.contentType,
        dataType: config.dataType,
        success: successcallback,
        error: errorcallback
    });
};