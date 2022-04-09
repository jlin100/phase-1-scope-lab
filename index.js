// Write your solution in this file!
var customerName = "bob";

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
    return customerName;
}

function setBestCustomer() {
    bestCustomer = "not bob";
    return bestCustomer;
}

function overwriteBestCustomer(b = "maybe bob") {
    bestCustomer = b;
    return bestCustomer
}

const leastFavoriteCustomer = "bob";
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = leastFavoriteCustomer;
}