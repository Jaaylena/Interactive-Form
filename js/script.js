/*
 */
document.getElementById("name").focus();
const form = document.querySelector("form");
const submitButton = document.querySelector("button");
//create a error message explaination
document
  .querySelector("form")
  .insertAdjacentHTML(
    "afterbegin",
    `<p class="reqField">* - required field</p>`
  );
const otherInput = document.getElementById("other-title");
otherInput.style.display = "none";
const title = document.getElementById("title");
//created elements to display error messages
let nameError = document.createElement("div");
const emailError = document.createElement("div");
const errorCC = document.createElement("div");
const zipError = document.createElement("div");
const errorCVV = document.createElement("div");
const pickActivity = document.createElement("div");
//variables for separating the payment methods
const payments = document.querySelectorAll("#payment");
const paymentOption = document.querySelectorAll("#payment option");
const creditCard = document.querySelector("#credit-card");
const payPal = document.querySelector("#paypal");
const bitcoin = document.querySelector("#bitcoin");
paymentOption[0].hidden = true;
payment.value = "credit card";
payPal.style.display = "none";
bitcoin.style.display = "none";
const designMenu = document.querySelector("#design");
const colors = document.getElementById("color");
const colorOption = document.querySelectorAll("#color option");
//at initial load update the "color" field to read "Please select a Theme"
const colorPlaceholder = document.createElement("option");
colorPlaceholder.style.display = "none";
colors.appendChild(colorPlaceholder).text = "Please Select a T-Shirt Theme";
colors.value = "Please Select a T-Shirt Theme";
const ccNum = document.getElementById("cc-num");
const cvvLabel = document.querySelectorAll(".col-3 label")[1];
cvvLabel.innerHTML = "*cvv";
const expDate = document.querySelectorAll(".credit-card label")[3];
expDate.innerHTML = "*Expiration Date:";
const expYear = document.querySelectorAll(".credit-card label")[4];
expYear.innerHTML = "*Expiration Year:";
const ccLabel = document.querySelector(".col-6 label");
ccLabel.innerHTML = "*Card Number:";
const totalCostDiv = document.createElement("div");
totalCostDiv.id = "total-cost";
const totalCostLabel = document.createElement("label");
totalCostDiv.append(totalCostLabel);
let totalCost = 0;
totalCostLabel.innerHTML = `Total Cost: $${totalCost}`;
const activities = document.querySelector(".activities");
activities.appendChild(totalCostDiv);
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const email = document.getElementsByTagName("label")[1];
email.innerHTML = "*Email:";
const name = document.getElementsByTagName("label")[0];
name.innerHTML = "*Name:";
const zip = document.getElementById("zip");
const zipLabel = document.querySelectorAll(".col-3 label")[0];
zipLabel.innerHTML = "*Zip Code:";
/***job role section **/
title.addEventListener("change", (e) => {
  e.target.value === "other"
    ? (otherInput.style.display = "block")
    : (otherInput.style.display = "none");
});
//T-shirt section
for (let i = 0; i < colors.length; i++) {
  //hide the colors in the "color" drop down
  colors[i].style.display = "none";
}
//event listener for displaying colors depending on selected theme
designMenu.addEventListener("change", (e) => {
  colors.appendChild(colorPlaceholder).text = "Choose a Color";
  colors.value = "Choose a Color";
  if (designMenu.value === "Select Theme") {
    colors.appendChild(colorPlaceholder).text = "Please Select a T-Shirt Theme";
    colors.value = "Please Select a T-Shirt Theme";
  }
  for (let i = 0; i < colors.length; i++) {
    colors[i].style.display = "none";
    if (e.target.value === "js puns") {
      colorOption[0].style.display = "block";
      colorOption[1].style.display = "block";
      colorOption[2].style.display = "block";
    }
    if (e.target.value === "heart js") {
      colorOption[3].style.display = "block";
      colorOption[4].style.display = "block";
      colorOption[5].style.display = "block";
    }
  }
});
/*register for activities section*/
activities.addEventListener("change", (e) => {
  let checkedBox = e.target;
  const cost = parseInt(checkedBox.getAttribute("data-cost"));
  const activityTime = checkedBox.getAttribute("data-day-and-time");
  if (checkedBox.checked === true) {
    totalCost += cost;
    totalCostLabel.innerHTML = `Total Cost: $${totalCost}`;
  } else {
    totalCost -= cost;
    totalCostLabel.innerHTML = `Total Cost: $${totalCost}`;
  }
  for (let i = 0; i < checkboxes.length; i++) {
    const dateAndTime = checkboxes[i].getAttribute("data-day-and-time");
    if (dateAndTime === activityTime && checkedBox !== checkboxes[i]) {
      checkedBox.checked
        ? (checkboxes[i].disabled = true)
        : (checkboxes[i].disabled = false);
    }
  }
});
[...checkboxes].forEach((cb) => {
  cb.addEventListener("focus", (e) => cb.parentElement.classList.add("focus"));
  cb.addEventListener("blur", (e) => {
    const active = document.querySelector(".focus");
    if (active) active.classList.remove("focus");
  });
});
/********* payment section ********/
//show/hide pym options depending on the users selection
payment.addEventListener("change", (e) => {
  if (e.target.value === "credit card") {
    creditCard.style.display = "block";
    payPal.style.display = "none";
    bitcoin.style.display = "none";
  }
  if (e.target.value === "paypal") {
    payPal.style.display = "block";
    creditCard.style.display = "none";
    bitcoin.style.display = "none";
  }
  if (e.target.value === "bitcoin") {
    bitcoin.style.display = "block";
    creditCard.style.display = "none";
    payPal.style.display = "none";
  }
});
/** form Validation section */
function isNameValid() {
  const nameInput = document.getElementById("name");
  nameInput.insertAdjacentElement("beforebegin", nameError);
  const regName = /^(\w+)\s(\w+)\s?$/i;
  if (!regName.test(nameInput.value)) {
    nameInput.setAttribute("required", true);
    nameError.textContent = "* Please enter your first and last name";
    nameError.style.color = "#250D54";
    return true;
  } else {
    nameInput.setAttribute("required", false);
    nameError.textContent = "";
    return false;
  }
}
function isEmailValid() {
  const regEmail = /^[^@]+@[^@.]+\.[\w+]+$/i;
  const emailInput = document.getElementById("mail");
  emailInput.insertAdjacentElement("beforebegin", emailError);
  if (!regEmail.test(emailInput.value)) {
    emailInput.setAttribute("required", true);
    emailError.textContent = "*Please enter a valid Email address";
    emailError.style.color = "#250D54";
    return true;
  } else {
    emailInput.setAttribute("required", false);
    emailError.textContent = "";
    return false;
  }
}
function checkActivities() {
  const checkbox1 = document.querySelectorAll(".activities label")[0];
  for (let i = 0; i < checkboxes.length; i++) {
    if (!checkboxes[i].checked) {
      checkboxes[i].setAttribute("required", true);
      pickActivity.textContent = "* Must Select Main conference.";
      pickActivity.style.color = "red";
      activities.insertBefore(pickActivity, checkbox1);
      return true;
    } else {
      pickActivity.textContent = "";
      return false;
    }
  }
}
function isCcValid() {
  const regexNums = /^(\d{13,16})$/;
  if (!regexNums.test(ccNum.value)) {
    ccNum.setAttribute("required", true);
    errorCC.textContent = " *should contain 13-16 digits";
    errorCC.style.color = "red";
    ccLabel.append(errorCC);
    return true;
  } else {
    ccNum.setAttribute("required", false);
    errorCC.textContent = "";
    return false;
  }
}
function isZipValid() {
  const regexZip = /\b\d{5}\b/;
  if (!regexZip.test(zip.value)) {
    zip.setAttribute("required", true);
    zipLabel.append(zipError);
    zipError.textContent = " *Invalid zip code";
    zipError.style.color = "red";
  } else {
    zip.setAttribute("required", false);
    zipError.textContent = "";
  }
}
function isCvvValid() {
  const cvvInput = document.getElementById("cvv");
  const regexCvv = /^\d{3}$/;
  if (!regexCvv.test(cvvInput.value)) {
    cvvInput.setAttribute("required", true);
    errorCVV.style.color = "red";
    errorCVV.textContent = " *Security Code Needed";
    cvvLabel.append(errorCVV);
  } else {
    cvvInput.setAttribute("required", false);
    errorCVV.textContent = "";
  }
}
function validateForm() {
  const formFields = [isNameValid(), isEmailValid(), checkActivities()];
  if (creditCard.style.display == "none") {
    return formFields;
  } else {
    formFields;
    isZipValid();
    isCcValid();
    isCvvValid();
  }
}
//an eventlistener that calls tha validate funtions and verifies fieldsets
document.getElementById("name").addEventListener("keyup", isNameValid);
document.getElementById("mail").addEventListener("keyup", isEmailValid);
document.getElementById("cc-num").addEventListener("keyup", isCcValid);
document.getElementById("zip").addEventListener("keyup", isZipValid);
document.getElementById("cvv").addEventListener("keyup", isCvvValid);
submitButton.addEventListener("click", (e) => {
  validateForm();

    e.preventDefault();


});
