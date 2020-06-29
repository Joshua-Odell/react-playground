import React from 'react';

function leapYear(year){
    if (year >= 1582 && year % 4 === 0){
        if (year % 100 !== 0 || year %400 === 0){
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
}

export default leapYear;