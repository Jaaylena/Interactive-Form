/*
*/
//select element with id name and set it's focus
//https://drive.google.com/file/d/1U12HbHqO8gEz-Szm4hRUvxtUMvqsZbPb/view
document.getElementById('name').focus();
//create a error message explaination
const reqField = document.createElement('p');
reqField.innerHTML = '* - required field';
const fieldset = document.querySelector('fieldset');
console.log(reqField);
//created a span for the CSS file to display valid and invalid
const span = document.createElement('span');
fieldset.prepend(reqField);
//set name label to innerHTML *Name: to show user required fields
const name = document.getElementsByTagName('label')[0];
    name.innerHTML = '*Name:';
    name.appendChild(span);
//set email label innerHTML to *Email: to show user required fields
const email = document.getElementsByTagName('label')[1];
    email.innerHTML = '*Email:';
/***job role section **/
//**hide the "other" initially in order for this feature to work when JS is disabled
const otherInput = document.getElementById('other-title');
otherInput.style.display = 'none';
const title = document.getElementById('title');
let titleValue = title.value;
//when "other" job role is selected in the drop down 
title.addEventListener('change', (e) => {
    e.target.value === 'other'?
        otherInput.style.display = 'block':
        otherInput.style.display = 'none'; 
});
//T-shirt section 
const designMenu = document.querySelector('#design');
const colors = document.getElementById('color');
const colorOption = document.querySelectorAll('#color option');

//at initial load update the "color" field to read "Please select a Theme"
const colorPlaceholder = document.createElement('option');
colorPlaceholder.style.display = 'none';
colors.appendChild(colorPlaceholder).text = 'Please Select a T-Shirt Theme';
colors.value = 'Please Select a T-Shirt Theme';

for (let i = 0; i < colors.length; i++) {
    //hide the colors in the "color" drop down    
    colors[i].style.display = 'none';
}
//when a design theme is selected show the colors for that theme
designMenu.addEventListener('change', (e) => {
    //when a theme is selected drop down placeholder changes to 'choose a color' 
    colors.appendChild(colorPlaceholder).text = 'Choose a Color';
    colors.value = 'Choose a Color';
    if (designMenu.value === 'Select Theme') {
        colors.appendChild(colorPlaceholder).text = 'Please Select a T-Shirt Theme';
        colors.value = 'Please Select a T-Shirt Theme';
    }
    //filter the available "color" options by the selected theme in the design field
    for (let i = 0; i < colors.length; i++) {
        //hide the colors in the "color" drop down    
        colors[i].style.display = 'none';
        //if user selects "Theme- I Puns"
        if (e.target.value === 'js puns') {
            //the color menu should display "cornflower blue", "dark slate grey", and "gold"
            colorOption[0].style.display = 'block';
            colorOption[1].style.display = 'block';
            colorOption[2].style.display = 'block';
            //display options that match the users theme selection
        }
        //if user selects "theme- I heart JS" 
        if (e.target.value === 'heart js') {
            //color menu should display "Tomatoe", "steel blue", and "dim grey"
            colorOption[3].style.display = 'block';
            colorOption[4].style.display = 'block';
            colorOption[5].style.display = 'block';
        }
    }
});
/*register for activities section*/

//create an element to display the total activity cost
const totalCostDiv = document.createElement('div');
totalCostDiv.id = 'total-cost';
const totalCostLabel = document.createElement('label');
totalCostDiv.append(totalCostLabel);
//create a global variable to store  activity cost initially set to $0
let totalCost = 0;
totalCostLabel.innerHTML = `Total Cost: $${totalCost}`;
//totalCostDiv.append(totalCost);
const activities = document.querySelector('.activities');
//append to the .activity section
activities.appendChild(totalCostDiv);
//listen for changes in the Activity section using an event listener
activities.addEventListener('change', (e) => {
    //variable that references the checked element 
    let checkedBox = e.target;
    //get the 'data-cost' attribute value of the clicked element
    const cost = parseInt(checkedBox.getAttribute('data-cost'));
    //if the input element is checked
    if (checkedBox.checked == true) {
        //add the cost of the currently clicked activity to the total cost variable.
        totalCost += cost;
        //use a template literal to display the value of cost
        totalCostLabel.innerHTML = `Total Cost: $${totalCost}`;
    } else {
        //subtract the cost
        totalCost -= cost;
        totalCostLabel.innerHTML = `Total Cost: $${totalCost}`;
    }
    //select the activity checkbox element and store it in a variable called activity  
    const activity = checkedBox.getAttribute('data-day-and-time');
    //set the checkbox input to a variable checkboxes
    const checkboxes = document.querySelectorAll('.activities input');
    //retrieve the list of activities with an attribute of 'data-day-and time'
    for (let i = 0; i < checkboxes.length; i++) {
        //set the iterate to a variable called dateAndTimee
        const dateAndTime = checkboxes[i].getAttribute('data-day-and-time');
        //check to see if the checked activity matches anothers dateAndTime
        if (dateAndTime === activity && checkedBox !== checkboxes[i]) {
            //disable any activity with conflicting times 
            checkedBox.checked ?
                checkboxes[i].disabled = true :
                checkboxes[i].disabled = false;
        }
    }
});
/* payment section */
//get element with 'payment' id and set it to the variable paymentOption
const payments = document.querySelectorAll('#payment');
const paymentOption = document.querySelectorAll('#payment option');
const creditCard = document.querySelector('#credit-card');
const payPal = document.querySelector('#paypal');
const bitcoin = document.querySelector('#bitcoin');
//hide 'Select Payment Method' from dropdown option;
paymentOption[0].hidden = true;
payment.value = 'credit card';
payPal.style.display = 'none';
bitcoin.style.display = 'none';
// listen for change in dropdown in select payment 
payment.addEventListener('change', (e) => {
        //if selected value is credit card hide paypal and bitcoin option
        if (e.target.value === 'credit card') {
            creditCard.style.display = 'block';
            payPal.style.display = 'none';
            bitcoin.style.display = 'none';
            //if selected value is paypal hide credit card and bitcoin option
        }
        if (e.target.value === 'paypal') {
            payPal.style.display = 'block';
            creditCard.style.display = 'none';
            bitcoin.style.display = 'none';
            //if selected value is bitcoin hide paypal, and credit card option 
        }
        if (e.target.value === 'bitcoin') {
            bitcoin.style.display = 'block';
            creditCard.style.display = 'none';
            payPal.style.display = 'none';
        }
});
/** form Validation section */


//function validateFormInformation
/** found on https://www.codexworld.com/how-to/validate-first-last-name-with-regular-expression-using-javascript **/
function validateName() {
    let regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    fieldset.prepend(reqField);
    
        //pass in form id name
    const nameInputValue = document.getElementById('name').value;
    const nameInput = document.getElementById('name');
     //if userInput in name field is blank 
    if(!regName.test(nameInputValue) ) {
    //display message 'name is required'
        nameInput.setAttribute('required', true);
        return false;
    } else {
        nameInput.setAttribute('required', false);
        return true;
    }
}
//function validateEmail 
function validateEmail() {
//get form with ID mail

    const emailInputValue = document.getElementById('mail').value;
    const emailInput = document.getElementById('mail');
    //if userInput is null
    if(emailInputValue == null || ''){
    //display message 'incorrect email information'
    emailInput.setAttribute('required', true);
    return false;
    } else {
    emailInput.setAttribute('required', false);
    return true;
    }
}
//function ValidateActivity
    //get form id activity
    //if no selection 
        //display message 'please choose an activity'
    //endfunction
    //get the label of the div element with id credit-card
    const ccLabel = document.querySelector('#credit-card label');
    //set it's innerHTML to required field
    ccLabel.innerHTML = '*Card Number:';
    const zipLabel = document.querySelector('.col-3 label');
    zipLabel.innerHTML = '*Zip Code:';
    const cvvLabel = document.querySelector('#cvv');
    console.log(cvvLabel);
    console.log(zipLabel);
console.log(ccLabel);
//function to validatecredit card info
    //get the value of the input element with id cc-num set it to ccNumValue
    //get the input element with id cc-num set it to ccNum
    //if ccNumValue is null or empty 
        //setAttribute('required', true);
        //return false
    //else 
        //setAttribute('required, false);
        //return true
        //end function

//an eventlistener that calls tha validate funtions and verifies true or false 
fieldset.addEventListener('keyup', (e) => {
    validateName();
    validateEmail();

});