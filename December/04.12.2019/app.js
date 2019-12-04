// 1. Write a JavaScript program to test the first character of a string is
// uppercase or not

const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
const regex = /^[A-Z]/gm;

console.log(text.match(regex));


// 2. Write a JavaScript program to check a credit card number.
const dataToCheck = '5580431384693176';

const regex2 = /^\d{16}$/;

console.log(regex2.test(dataToCheck));

// 3. Write a pattern that matches e-mail addresses.
// The personal information part contains the following ASCII characters.
// Uppercase (A-Z) and lowercase (a-z) English letters.
// Digits (0-9).
//   Characters ! # $ % & ' * + - / = ? ^ _ ` { | } ~
// Character . ( period, dot or fullstop) provided that it is not the first
// or last character and it will not come one after the other.
const adressToCheck = [
  'email@expample.com', 'email@expamle.com.uk',
  'email@example.com.uk.', '.email@example.com.uk.'];
const regex3 =  /^[\w]{1,}[\d]?([\.\_-]?[\w\d]+)*@\w+([\.]?\w+)*(\.\w{2,3})+$/gi;


console.log(adressToCheck.filter((item) => item.match(regex3)));

// 4. Write a JavaScript program to search a date within a string
const todayDate = "04/12/2019";

const regExpCheckDate = /^(0?[0-9]|[1-3]?[\d])\/(1[0-2]|0[\d])\/(?:[0-9]{2})?[\d]{2}$/;

console.log(regExpCheckDate.test(todayDate));