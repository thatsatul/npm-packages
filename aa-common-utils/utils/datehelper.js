// dt passed in DD/MM/YYYY format
exports.getJSDateObj = function(dt) {
    if (!dt) {
        return null;
    }
    const dtArr = dt.split('/');
    const newDt = `${dtArr[1]}/${dtArr[0]}/${dtArr[2]}`;
    return new Date(newDt);
}

// dt passed as JS date object
exports.isFuture = function(dt) {
    const now = Date.now();
    if ( now >= dt.getTime()) {
        return false;
    } else {
        return true;
    }
}

// dt passed as JS date object
exports.isPast = function(dt) {
    const now = Date.now();
    if ( now > dt.getTime()) {
        return true;
    } else {
        return false;
    }
}
