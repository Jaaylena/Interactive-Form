//select element with id name and set it's focus
     document.getElementById('name').focus();

/***job role section **/
//**hide the "other" initially in order for this feature to work when JS is disabled
 
const otherInput = document.getElementById('other-title');
    otherInput.style.display = 'none';
const title = document.getElementById('title');

//when "other" job role is selected in the drop down 
title.addEventListener('change', (e) => {
    //show text input with ID 'other-title'
    if(e.target.value === 'other') {
        otherInput.style.display = 'block';
    }else {
        otherInput.style.display = 'none';
    }   
});
//T-shirt section 
const selectDesign = document.querySelector('#design');
const colors = document.getElementById('color');
//at initial load update the "color" field to read "Please select a Theme"
const colorPlaceholder = document.createElement('option');
    colorPlaceholder.style.display = 'none';
    colors.appendChild(colorPlaceholder).text = 'Please Select a T-Shirt Theme';
    colors.value = 'Please Select a T-Shirt Theme';
for(let i = 0; i < colors.length; i++) {
   //hide the colors in the "color" drop down    
    colors[i].style.display = 'none';
}

//when a design theme is selected show the colors for that theme
selectDesign.addEventListener('change', (e) => {
//filter the available "color" options by the selected theme in the design field
     //if user selects "Theme- I Puns"
    if(e.target.value === 'js puns') {
     //display options that match the users theme selection
    
    }
     //the color menu should display "cornflower blue", 
            //"dark slate grey", and "gold"
    
});
        
           
        //if user selects "theme- I heart JS" 
            //color menu should display "Tomatoe", "steel blue",
            //and "dim grey"
//update the color field and drop down menu when a new theme is selected
    //in the design.
//register for activities section 
