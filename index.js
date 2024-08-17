// 1. تعريف المتغير customerName في النطاق العام
var customerName = 'bob';

// 2. دالة upperCaseCustomerName
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

// 3. دالة setBestCustomer
function setBestCustomer() {
    bestCustomer = 'not bob'; // تعريف المتغير في النطاق العام بدون var
}

// 4. دالة overwriteBestCustomer
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

// 5. تعريف الثابت leastFavoriteCustomer ودالة changeLeastFavoriteCustomer
const leastFavoriteCustomer = 'some initial value';

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'new value'; // سيؤدي إلى خطأ
}
