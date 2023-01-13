import WishList from "./classes/wishlist";

let form = document.querySelector("#submitForm");
let make = document.querySelector("#makeInput");
let model = document.querySelector("#modelInput");
let year = document.querySelector("#yearInput");
let makeP = document.querySelector("#car-make");
let modelP = document.querySelector("#car-model");
let yearP = document.querySelector("#car-year");
let removeBtn = document.querySelector("#removeBtn");
let wishlistUL = document.querySelector("#wishlistUL > ul");

let wishlist = new WishList();

form.addEventListener("submit", addCar);
removeBtn.addEventListener("click", removeCar);

function updateDOMList(make, model, year) {
  console.log("Inside the updateDOMList function:" + make, model, year); //does this work?

  wishlistUL.innerHTML = (make, model, year);
  wishlist.list.forEach((car) => {
    const li = document.createElement("li");
    li.textContent = `${car.make} ${car.model}`;
    li.addEventListener("click", () => showCarDetails(car));
    wishlistUL.appendChild(li);
  });
}

function showCarDetails(car) {
  makeDisplay.textContent = car.make;
  modelDisplay.textContent = car.model;
  yearDisplay.textContent = car.year;
  removeBtn.disabled = false;
  removeBtn.setAttribute("data-carId", car.id);
}

function addCar(event) {
  event.preventDefault();

  let make = makeInput.value;
  let model = modelInput.value;
  let year = yearInput.value;

  console.log("Inside addCar function:" + make, model, year); //does this work?

  wishlist.add(make, model, year);

  updateDOMList(make, model, year);
}

function removeCar() {
  let carId = Number(removeBtn.getAttribute("data-carId"));
  wishlist.remove(carId);

  updateDOMList();

  makeDisplay.textContent = "";
  modelDisplay.textContent = "";
  yearDisplay.textContent = "";
  removeBtn.disabled = true;
}
