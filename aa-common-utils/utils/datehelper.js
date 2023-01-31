// default currentDate format is DD/MM/YYYY
exports.getJSDateObj = function (dt, currentFormat = "DD/MM/YYYY") {
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
    if (currentFormat === "YYYY-MM-DD") {
        return new Date(dt);
    }
}

// dt passed as JS date object
exports.isFutureDate = function (dt) {
    const now = Date.now();
    if ( now > dt.getTime()) {
        return false;
    } else {
        return true;
    }
}

// dt passed as JS date object
exports.isPastDate = function (dt) {
    const now = Date.now();
    if ( now > dt.getTime()) {
        return true;
    } else {
        return false;
    }
}

// dt passed as JS date object
// Returns date as 'Oct 27, 2022' format
exports.getMonDDYYYY = function (dt) {
    if (!dt) {
        return null;
    }
    return new Date(dt).toLocaleDateString('en-us', { month:"short", year:"numeric", day:"numeric"});
}

// dt passed as YYYY-MM-DD format
// Returns date as 'Oct 27, 2022' format sample
exports.addDays = function (passedDt, noOfDays) {
    if (!passedDt) {
        return '';
    }
    const dt = new Date(passedDt);
    dt.setDate(dt.getDate() + noOfDays);
    return dt;
}
