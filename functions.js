'use strict';

// 1. isHometown
// Define your function here
function is_hometown(town) {

    return town === 'San Francisco';
}

// 2. getFullName
// Define your function here
function get_full_name(first_name, last_name) {

    return `${first_name} ${last_name}`;
}

// 3. calculateTotal
// Define your function here
function calculate_total(base_price, state, tax=0.05) {
    let subtotal = base_price * (1 + tax);

    if (state === 'CA') {
        subtotal += subtotal * 0.03;
    } else if (state === 'PA') {
        subtotal += 2;
    } else if (state === 'PA') {
        subtotal += 1;
    } else {
        subtotal += 3;
    }

    return subtotal;
}