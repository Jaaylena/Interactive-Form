/*
https://drive.google.com/file/d/1U12HbHqO8gEz-Szm4hRUvxtUMvqsZbPb/view
*/
//select element with id name and set it's focus
document.getElementById('name').focus();
/***job role section **/
//**hide the "other" initially in order for this feature to work when JS is disabled
const otherInput = document.getElementById('other-title');
otherInput.style.display = 'none';
const title = document.getElementById('title');
let titleValue = title.value;
//when "other" job role is selected in the drop down 
title.addEventListener('change', (e) => {
    if (e.target.value === 'other') {
        otherInput.style.display = 'block';
    } else {
        otherInput.style.display = 'none';
    }
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
    if(designMenu.value === 'Select Theme') {
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
    const mainEvent = activities.getAttributeNames('all');
    console.log(mainEvent)
    const checkboxes = document.querySelectorAll('.activity input');
    console.log(checkboxes);  
    const scheduledActivity = checkedBox.getAttribute('data-day-and-time');
    console.log(scheduledActivity);
     //if the input element is checked
    if(checkedBox.checked == true) {
      //add the cost of the currently clicked activity to the total cost variable.
        totalCost += cost;
    //use a template literal to display the value of cost
    totalCostLabel.innerHTML = `Total Cost: $${totalCost}`;
    } else {
         //subtract the cost
         totalCost -= cost;
    } 
    for(let i = 0; i < checkboxes.length; i++) {
      const selectedActivity = checkboxes[i].getAttribute('data-day-and-time');
      console.log(selectedActivity);
      
    }
    //disable check boxes if main conference isn't selected 
        

  
    //when user picks an activity disable the activities that have coinciding times
    
    //if an activity with the data-day-and-time="Tuesday 9am-12pm" is chosen
        //disable the other activities with data-day-and-time="Tuesday 9am-12pm" 
    //if an activity with the data-day-and-time="Tuesday 1pm-4pm" is chosen
        //disable the other activities with the data-day-and-time="Tuesday 1pm-4pm"
});  

