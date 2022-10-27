// default currentDate format is DD/MM/YYYY
exports.getJSDateObj = function(dt, currentFormat = "DD/MM/YYYY") {
    if (!dt) {
        return null;
    }
    if (currentFormat === "MM/DD/YYYY") {
        return new Date(dt);
    }
    if (currentFormat === "DD/MM/YYYY") {
        const dtArr = dt.split('/');
        const newDt = `${dtArr[1]}/${dtArr[0]}/${dtArr[2]}`;
        return new Date(newDt);
    }
}

// dt passed as JS date object
exports.isFutureDate = function(dt) {
    const now = Date.now();
    if ( now > dt.getTime()) {
        return false;
    } else {
        return true;
    }
}

// dt passed as JS date object
exports.isPastDate = function(dt) {
    const now = Date.now();
    if ( now > dt.getTime()) {
        return true;
    } else {
        return false;
    }
}

// dt passed as JS date object
// Returns date as 'Oct 27, 2022' format
exports.getMonDDYYYY = function(dt) {
    if (!dt) {
        return null;
    }
    return new Date(dt).toLocaleDateString('en-us', { month:"short", year:"numeric", day:"numeric"});
}
