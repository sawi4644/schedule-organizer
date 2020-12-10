// global variables
var currentDay= moment().format('LL'); 

// updating current day to html
$('#currentDay').text(currentDay)

// add event listener click for button
// saving user input to local storage
$('#nineBtn').on('click',function(e){
    var userInput= $('#nineText').val();
    localStorage.setItem('nine', userInput);
})
// getting stored value and displaying
$('#nineText').val(localStorage.getItem('nine'));

$('#tenBtn').on('click',function(e){
    var userInput= $('#tenText').val();
    localStorage.setItem('ten', userInput);
})
// getting stored value and displaying
$('#tenText').val(localStorage.getItem('ten'));

// grab text user input information from correct row
// save to local storage
// display new information on correct row








// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future

// WHEN I click into a time block
// THEN I can enter an event
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist
