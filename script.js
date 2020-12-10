// global variables
var currentDay= moment().format('LL');
var currentTime = moment().format('LT');

// updating current day to html
$('#currentDay').text(currentDay)
// updating current time to index
$('#currentTime').text(currentTime)

// add event listener click for button
// saving user input to local storage
$('#nineBtn').on('click',function(e){
    var userInput= $('#nineText').val();
    e.preventDefault();
    localStorage.setItem('nine', userInput);
})
// getting stored value and displaying
$('#nineText').val(localStorage.getItem('nine'));

// working function for text storage at ten
$('#tenBtn').on('click',function(e){
    var userInput= $('#tenText').val();
    e.preventDefault();
    localStorage.setItem('ten', userInput);
})
$('#tenText').val(localStorage.getItem('ten'));

// color changing blocks based on time


// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future

