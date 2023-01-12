import Wishlist from "./wishlist";

let form = document.querySelector('#submitForm');
let make = document.querySelector("#makeInput");
let model = document.querySelector("#modelInput");
let year = document.querySelector("#yearInput");

let makeP = document.querySelector("#car-make");
let modelP = document.querySelector("#car-model");
let yearP = document.querySelector("#car-year");

let removeBtn = document.querySelector("#removeBtn");

let wishlistUL = document.querySelector("#wishlistUL");

Wishlist(); //Exercise 5 #11