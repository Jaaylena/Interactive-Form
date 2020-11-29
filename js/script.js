/*
 */
//select element with id name and set it to focus
document.getElementById('name').focus();
//create a error message explaination
const fieldset = document.querySelector('fieldset');
const submitButton = document.querySelector('button');
//create a error message explaination
document.querySelector('form').insertAdjacentHTML('afterbegin', `<p class="reqField">* - required field</p>`);
//created a span for the CSS file to display valid and invalid
const nameError = document.createElement('span:before');
const emailError = document.createElement('span:before');
const ccNumError = document.createElement('span:before');
console.log(ccNumError);
/***job role section **/
//**hide the "other" initially in order for this feature to work when JS is disabled
const otherInput = document.getElementById('other-title');
otherInput.style.display = 'none';
const title = document.getElementById('title');
let titleValue = title.value;
//when "other" job role is selected in the drop down 
title.addEventListener('change', (e) => {
    e.target.value === 'other' ?
        otherInput.style.display = 'block' :
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
//set the checkbox input to a variable checkboxes
const checkboxes = document.querySelectorAll('input[type="checkbox]');
//listen for changes in the Activity section using an event listener
activities.addEventListener('change', (e) => {
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
/********* payment section ********/
const payments = document.querySelectorAll('#payment');
const paymentOption = document.querySelectorAll('#payment option');
const creditCard = document.querySelector('#credit-card');
const payPal = document.querySelector('#paypal');
const bitcoin = document.querySelector('#bitcoin');
//hide 'Select Payment Method' from dropdown option
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
function isNameValid() {
    //setting the first label element and setting it to the variable name
    const name = document.getElementsByTagName('label')[0];
    // a variable that gets the element with the ID 'name'
    const nameInput = document.getElementById('name');
    //a variable that gets the value of the element with ID 'name'
    const nameInputValue = nameInput.value;
    nameInput.insertAdjacentElement('beforebegin', nameError);
    const regName = /^(\w+)\s(\w+)\s?$/i;
    //if userInput in name field is blank 
    if (!regName.test(nameInputValue)) {
        //display message 'name is required'
        nameInput.setAttribute('required', true);
        //adding a * to the name lable to alert the user that its required
        name.innerHTML = '*Name:';
        nameError.textContent = '* Please enter your first and last name';
        nameError.style.color = '#250D54';
        return true;
    } else if (regName.test(nameInputValue)) {
        nameInput.setAttribute('required', false);
        nameError.textContent = '';
        return false;
    }
}

function isEmailValid() {
    //regex for testing the input email
    const regEmail = /^[^@]+@[^@.]+\.[a-z]+$/i;
    //get the input with id email and set it to a variable
    const emailInput = document.getElementById('mail');
    //get the value of the input with ID mail setting it to a variable
    const emailInputValue = emailInput.value;
    emailInput.insertAdjacentElement('beforebegin', emailError);
    //set email label innerHTML to *Email: to show user required fields
    const email = document.getElementsByTagName('label')[1];
    email.innerHTML = '*Email:';
    //if userInput is null
    if (!regEmail.test(emailInputValue)) {
        //display message 'incorrect email information'
        emailInput.setAttribute('required', true);
        emailError.textContent = '*Please enter a valid Email address';
        emailError.style.color = '#250D54';
        return true;
        e.preventDefault();
    } else {
        emailInput.setAttribute('required', false);
        emailError.textContent = '';
        return false;
    }
}
//function to validate activity
// function isActivityChecked(e) {
//     const actError = document.createElement('p');
//     let unchecked = 0;
//     //for each check box check if the boxes have been checked
    
//       if(unchecked === checkboxes.length){
//         actError.textContent = 'Please Select at least one activity';
//         actError.style.color = 'red';
//         activities.appendChild(actError);
//         if(activities.children.length > 9 ) {
//           activities.removeChild(activities.lastElementChild);
//         }
//         e.preventDefault();
//       }

//     }
    

// isActivityChecked();

const cvvLabel = document.querySelectorAll('.col-3 label')[1];
cvvLabel.innerHTML = '*cvv';
const expDate = document.querySelectorAll('.credit-card label')[3];
expDate.innerHTML = '*Expiration Date:';
const expYear = document.querySelectorAll('.credit-card label')[4];
expYear.innerHTML = '*Expiration Year:';
//get the label of the div element with id credit-card
const ccLabel = document.querySelector('.col-6 label');
//set it's innerHTML to required field
ccLabel.innerHTML = '*Card Number:';
//function not working still accepting nondigit input
function isCcValid() {
    //A variable to store a regex for numbers 
    const regexNums = /^d(\d{13,16})$/;
    //get the input element with id cc-num set it to ccNum
    const ccNum = document.getElementById('cc-num');
    const ccNumValue = ccNum.value;
    ccLabel.insertAdjacentElement('beforebegin', ccNumError);
    //if input matches the regex requirements return true and display error message
    if (!regexNums.test(ccNumValue)) {
        ccNum.setAttribute('required', true);
        ccNumError.textContent = 'credit card number needs to have 13 or 16 numbers';
        ccNumError.style.color - 'red';
        return true;
    } else {
        ccNum.setAttribute('required', false);
        ccNumError.textContent = '';
        return false;
        //end function	    
    }
}
//formatting funtion to reformat the ccnumber input

function formatCcNumber() {
    const regexNums = /\d{4}-?\d{4}-?\d{4}-?\d{4}/;
    return ccnumber.replace(regexNums, $1 - $2 - $3 - $4);
}
console.log(formatCcNumber);
// //function that validates the zip code input
function isZipValid() {
    //create a regex to test zip code input that 
    const regexZip = /\b\d{5}\b/;
    const zipLabel = document.querySelectorAll('.col-3 label')[0];
    zipLabel.innerHTML = '*Zip Code:';
    if(regexZip.test(zipValue)){
      zip.setAttribute('required', true);

    } else {
      zip.setAttribute('required', false);

    }
}
function isCvvValid(){
  const cvvInput = document.getElementById('cvv');
  const regexCvv = /^\d{3}$/;
  if(regexCvv.test(cvvInput.value) === false) {
  cvvInput.setAttribute('required', true);
  cvvInput.style.borderColor = 'red';
  } else {
    cvvInput.setAttribute('required', false);

  }
}

//an eventlistener that calls tha validate funtions and verifies fieldsets
fieldset.addEventListener('keyup', (e) => {
    e.preventDefault();

    //if user enters text in name input 
    if (e.target.id === 'name') {
        e.preventDefault();

        //validate name
    } else {
        isNameValid();

    }
    if (e.target.id === 'email') {
        e.preventDefault();

    } else {
        isEmailValid();
    }
    if (e.target.id === 'cc-num') {
        e.preventDefault();

    } else {
        isCcValid();
    }
});
submitButton.addEventListener('click', (e) => {
    console.log('the button works boom');
    isNameValid();
    isEmailValid();
    isActivityChecked();
    alert('Please complete the form');

});