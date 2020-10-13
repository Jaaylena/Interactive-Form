//select element with id name and set it's focus
     document.getElementById('name').focus();

/***job role section **/
//**hide the "other" initially in order for this feature to work when JS is disabled
 
const otherInput = document.getElementById('other-title');
    otherInput.style.display = 'none';
const title = document.getElementById('title');
let titleValue = title.option
//when "other" job role is selected in the drop down 
title.addEventListener('change', (e) => {
    //show text input with ID 'other-title'
    if(e.target.value === 'other') {
        otherInput.style.display = 'block';
    }
    if(e.target.value !== 'other')
        otherInput.style.display = 'none';
});
//T-shirt section 
//filter the available "color" options by the selected theme in the design field
    //at initial load update the "color" field to read "Please select a Theme"
    //hide the colors in the "color" drop down    
    //when a design theme 
        // if no theme in the "design" menu
              //no color options appear in the "color" dropdown 
             //color field reads "Please select a T-shirt theme"
    //T-shirt "color" menu 
        //display options that match the users theme selection
        //if user selects "Theme- I Puns"
            //the color menu should display "cornflower blue", 
            //"dark slate grey", and "gold"
        //if user selects "theme- I heart JS" 
            //color menu should display "Tomatoe", "steel blue",
            //and "dim grey"
//update the color field and drop down menu when a new theme is selected
    //in the design.
//register for activities section 
