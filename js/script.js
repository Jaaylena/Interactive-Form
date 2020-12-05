/*
 */
document.getElementById('name').focus();
const form = document.querySelector('form');
const submitButton = document.querySelector('button');
//create a error message explaination
document.querySelector('form').insertAdjacentHTML('afterbegin', `<p class="reqField">* - required field</p>`);
const otherInput = document.getElementById('other-title');
otherInput.style.display = 'none';
const title = document.getElementById('title');
//created elements to display error messages
const nameError = document.createElement('div');
const emailError = document.createElement('div');
const errorCC = document.createElement('div');
const zipError = document.createElement('div');
const errorCVV = document.createElement('div');
const pickActivity = document.createElement('span:before');
//variables for separating the payment methods 
const payments = document.querySelectorAll('#payment');
const paymentOption = document.querySelectorAll('#payment option');
const creditCard = document.querySelector('#credit-card');
const payPal = document.querySelector('#paypal');
const bitcoin = document.querySelector('#bitcoin');
paymentOption[0].hidden = true;
payment.value = 'credit card';
payPal.style.display = 'none';
bitcoin.style.display = 'none';
const designMenu = document.querySelector('#design');
const colors = document.getElementById('color');
const colorOption = document.querySelectorAll('#color option'); 
//at initial load update the "color" field to read "Please select a Theme"
const colorPlaceholder = document.createElement('option');
colorPlaceholder.style.display = 'none';
colors.appendChild(colorPlaceholder).text = 'Please Select a T-Shirt Theme';
colors.value = 'Please Select a T-Shirt Theme'; 
//get the input element with id cc-num set it to ccNum
const ccNum = document.getElementById('cc-num');
const cvvLabel = document.querySelectorAll('.col-3 label')[1];
cvvLabel.innerHTML = '*cvv';
const expDate = document.querySelectorAll('.credit-card label')[3];
expDate.innerHTML = '*Expiration Date:';
const expYear = document.querySelectorAll('.credit-card label')[4];
expYear.innerHTML = '*Expiration Year:';
//get the label of the div element with id credit-card
const ccLabel = document.querySelector('.col-6 label');
ccLabel.innerHTML = '*Card Number:';
const totalCostDiv = document.createElement('div');
totalCostDiv.id = 'total-cost';
const totalCostLabel = document.createElement('label');
totalCostDiv.append(totalCostLabel);
let totalCost = 0;
totalCostLabel.innerHTML = `Total Cost: $${totalCost}`;
const activities = document.querySelector('.activities');
activities.appendChild(totalCostDiv);
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
//set email label innerHTML to *Email: to show user required fields
const email = document.getElementsByTagName('label')[1];
email.innerHTML = '*Email:';
//setting the first label element and setting it to the variable name
const name = document.getElementsByTagName('label')[0];
name.innerHTML = '*Name:';
const zip = document.getElementById('zip');
const zipLabel = document.querySelectorAll('.col-3 label')[0];
zipLabel.innerHTML = '*Zip Code:';
/***job role section **/
title.addEventListener('change', (e) => {
    e.target.value === 'other' ?
        otherInput.style.display = 'block' :
        otherInput.style.display = 'none';
});
//T-shirt section 
for (let i = 0; i < colors.length; i++) {
    //hide the colors in the "color" drop down    
    colors[i].style.display = 'none';
}
//event listener for displaying colors depending on selected theme
designMenu.addEventListener('change', (e) => {
    colors.appendChild(colorPlaceholder).text = 'Choose a Color';
    colors.value = 'Choose a Color';
    if (designMenu.value === 'Select Theme') {
        colors.appendChild(colorPlaceholder).text = 'Please Select a T-Shirt Theme';
        colors.value = 'Please Select a T-Shirt Theme';
    }
    for (let i = 0; i < colors.length; i++) {
        colors[i].style.display = 'none';
        if (e.target.value === 'js puns') {
            colorOption[0].style.display = 'block';
            colorOption[1].style.display = 'block';
            colorOption[2].style.display = 'block';
        }
        if (e.target.value === 'heart js') {
            colorOption[3].style.display = 'block';
            colorOption[4].style.display = 'block';
            colorOption[5].style.display = 'block';
        }
    }
});
/*register for activities section*/
activities.addEventListener('change', (e) => {
    let checkedBox = e.target;
    const cost = parseInt(checkedBox.getAttribute('data-cost'));
    const activityTime = checkedBox.getAttribute('data-day-and-time');
    if (checkedBox.checked == true) {
        totalCost += cost;
        totalCostLabel.innerHTML = `Total Cost: $${totalCost}`;
    } else {
        totalCost -= cost;
        totalCostLabel.innerHTML = `Total Cost: $${totalCost}`;
    }
    for (let i = 0; i < checkboxes.length; i++) {
        const dateAndTime = checkboxes[i].getAttribute('data-day-and-time');
        if (dateAndTime === activityTime && checkedBox !== checkboxes[i]) {
            checkedBox.checked ?
                checkboxes[i].disabled = true :
                checkboxes[i].disabled = false;
        }
    }
    [...checkboxes].forEach(cb => (cb.disabled) ? cb.parentElement.classList.add('disabled') : cb.parentElement.classList.remove('disabled'));

});
activities.addEventListener('focus', (e) => {
    const click = e.target;
    const clickType = clicked.getAttribute('data-cost');
    for(let i = 0; i < checkboxes.length; i++) {
        const checkboxType = checkboxes[i].getAttribute('data-cost');
        if(clickType.checked) {

        }
    }
    console.log(clickType);
});

/********* payment section ********/
//show/hide pym options depending on the users selection
payment.addEventListener('change', (e) => {
    if (e.target.value === 'credit card') {
        creditCard.style.display = 'block';
        payPal.style.display = 'none';
        bitcoin.style.display = 'none';
    }
    if (e.target.value === 'paypal') {
        payPal.style.display = 'block';
        creditCard.style.display = 'none';
        bitcoin.style.display = 'none';
    }
    if (e.target.value === 'bitcoin') {
        bitcoin.style.display = 'block';
        creditCard.style.display = 'none';
        payPal.style.display = 'none';
    }
});
/** form Validation section */
function isNameValid() {
    const nameInput = document.getElementById('name');
    nameInput.insertAdjacentElement('beforebegin', nameError);
    const regName = /^(\w+)\s(\w+)\s?$/i;
    if (!regName.test(nameInput.value)) {
        nameInput.setAttribute('required', true);
        nameError.textContent = '* Please enter your first and last name';
        nameError.style.color = '#250D54';
        return true;
    } else {
        nameInput.setAttribute('required', false);
        nameError.textContent = '';
        return false;
    }
}

function isEmailValid() {
    const regEmail = /^[^@]+@[^@.]+\.[\w+]+$/i;
    const emailInput = document.getElementById('mail');
    emailInput.insertAdjacentElement('beforebegin', emailError);
    if (!regEmail.test(emailInput.value)) {
        emailInput.setAttribute('required', true);
        emailError.textContent = '*Please enter a valid Email address';
        emailError.style.color = '#250D54';
        return true;
    } else {
        emailInput.setAttribute('required', false);
        emailError.textContent = '';
        return false;
    }
}
function checkActivities() {
    const checkbox1 = document.querySelectorAll('.activities label')[0];
    for (let i = 0; i < checkboxes.length; i++) {
       if(!checkboxes[i].checked) {
        checkboxes[i].setAttribute('required', true)
        pickActivity.textContent = '* Please Select an Activity';
        pickActivity.style.color = 'red';
        activities.insertBefore(pickActivity, checkbox1);
        return true;
       } else {
           pickActivity.textContent = '';
           return false;
       }
    }
 }
function isCcValid() {
    const regexNums = /^(\d{13,16})$/;
    if (!regexNums.test(ccNum.value)) {
        ccNum.setAttribute('required', true);
        errorCC.textContent = ' *should contain 13-16 digits';
        errorCC.style.color = 'red';
        ccLabel.append(errorCC);
        return true;
    } else {
        ccNum.setAttribute('required', false);
        errorCC.textContent = '';
        return false;
    }
}
function isZipValid() {
    const regexZip = /\b\d{5}\b/;
    if(!regexZip.test(zip.value)){
      zip.setAttribute('required', true);
      zipLabel.append(zipError);
      zipError.textContent = ' *Invalid zip code';
      zipError.style.color = 'red';
    } else {
      zip.setAttribute('required', false);
      zipError.textContent = '';
    }
}
function isCvvValid(){
  const cvvInput = document.getElementById('cvv');
  const regexCvv = /^\d{3}$/;
  if(!regexCvv.test(cvvInput.value)) {
    cvvInput.setAttribute('required', true);
    errorCVV.style.color = 'red';
    errorCVV.textContent = ' *Security Code Needed';
    cvvLabel.append(errorCVV);
  } else {
    cvvInput.setAttribute('required', false);
    errorCVV.textContent = '';
  }
}
//an eventlistener that calls tha validate funtions and verifies fieldsets
form.addEventListener('keyup', (e) => {
    if (e.target.id === 'name') {
        e.preventDefault();
        isNameValid();
    } else if (e.target.id === 'mail') {
        e.preventDefault();
        isEmailValid();
    } else if (e.target.id === 'cc-num') {
        e.preventDefault();
        isCcValid();
    } else if(e.target.id === 'zip') {
        e.preventDefault();
        isZipValid();
    } else if(e.target.id === 'cvv') {
        e.preventDefault();
        isCvvValid();
    }
 });
submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    isNameValid();
    isEmailValid();
    checkActivities();
    isCcValid();
    isZipValid();
    isCvvValid();
    alert('Please complete the form');
});