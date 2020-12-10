// global variables
var currentDay= moment().format('LL');
var currentTime = moment().format('LT');

// updating current day to html
$('#currentDay').text(currentDay)
// updating current time to index
$('#currentTime').text(currentTime)

// add event listener click for button
// saving user input to local storage
// Event listener to save to local stroage
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

// working function for text storage at eleven
$('#elevenBtn').on('click',function(e){
    var userInput= $('#elevenText').val();
    e.preventDefault();
    localStorage.setItem('eleven', userInput);
})
$('#elevenText').val(localStorage.getItem('eleven'));
// working function for text storage at twelve
$('#twelveBtn').on('click',function(e){
    var userInput= $('#twelveText').val();
    e.preventDefault();
    localStorage.setItem('twelve', userInput);
})
$('#twelveText').val(localStorage.getItem('twelve'));
// working function for text storage at one
$('#oneBtn').on('click',function(e){
    var userInput= $('#oneText').val();
    e.preventDefault();
    localStorage.setItem('one', userInput);
})
$('#oneText').val(localStorage.getItem('one'));
// color changing blocks based on time
// if time is current then .present
// if time is past then .past
// if time is future then .past


// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future

