let birthMonth = prompt("Enter the number of your birth month: ");

birthMonth = Number(birthMonth);

let birthMonthName;

if (birthMonth >= 0 && birthMonth <= 12) {
    switch (birthMonth) {
        case 1:
            birthMonthName = "January";
            break;
        case 2:
            birthMonthName = "February";
            break;
        case 3:
            birthMonthName = "March";
            break;
        case 4:
            birthMonthName = "April";
            break;
        case 5:
            birthMonthName = "May";
            break;
        case 6:
            birthMonthName = "June";
            break;
        case 7:
            birthMonthName = "July";
            break;
        case 8:
            birthMonthName = "August";
            break;
        case 9:
            birthMonthName = "September";
            break;
        case 10:
            birthMonthName = "October";
            break;
        case 11:
            birthMonthName = "November";
            break;
        case 12:
            birthMonthName = "December";
            break;
    }
    console.log(`Your birth month is ${birthMonthName}`);
} else {
    console.log("Invalid Input");
}