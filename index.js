// Code your solution in this file!
function returnFirstTwoDrivers(arr) {
    return arr.slice(0, 2);
}

function returnLastTwoDrivers(arr) {
    return arr.slice(-2);
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
    return function (fare) {
        return fare * multiplier;
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(driverArray, driverSelector=returnFirstTwoDrivers) {
    return driverSelector(driverArray);
}