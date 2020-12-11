// global variables
var currentDay = moment().format('LL');
var currentTime = moment().format('LT');
var currentHour = currentTime.split(':')[0]
var allHours = ['9', '10', '11', '12', '1', '2', '3', '4', '5']
console.log(currentHour)
console.log('time', currentTime,)

// updating current day and time to index
$('#currentDay').text(currentDay)
$('#currentTime').text(currentTime)

$('#nineBtn').on('click', function (e) {
    var userInput = $('#nineText').val();
    e.preventDefault();
    localStorage.setItem('nine', userInput);
})

$('#nineText').val(localStorage.getItem('nine'));

$('#tenBtn').on('click', function (e) {
    var userInput = $('#tenText').val();
    e.preventDefault();
    localStorage.setItem('ten', userInput);
})
$('#tenText').val(localStorage.getItem('ten'));


$('#elevenBtn').on('click', function (e) {
    var userInput = $('#elevenText').val();
    e.preventDefault();
    localStorage.setItem('eleven', userInput);
})
$('#elevenText').val(localStorage.getItem('eleven'));

$('#twelveBtn').on('click', function (e) {
    var userInput = $('#twelveText').val();
    e.preventDefault();
    localStorage.setItem('twelve', userInput);
})
$('#twelveText').val(localStorage.getItem('twelve'));

$('#oneBtn').on('click', function (e) {
    var userInput = $('#oneText').val();
    e.preventDefault();
    localStorage.setItem('one', userInput);
})
$('#oneText').val(localStorage.getItem('one'));


$('#twoBtn').on('click', function (e) {
    var userInput = $('#twoText').val();
    e.preventDefault();
    localStorage.setItem('two', userInput);
})
$('#twoText').val(localStorage.getItem('two'));

$('#threeBtn').on('click', function (e) {
    var userInput = $('#threeText').val();
    e.preventDefault();
    localStorage.setItem('three', userInput);
})
$('#threeText').val(localStorage.getItem('three'));


$('#fourBtn').on('click', function (e) {
    var userInput = $('#fourText').val();
    e.preventDefault();
    localStorage.setItem('four', userInput);
})
$('#fourText').val(localStorage.getItem('four'));


$('#fiveBtn').on('click', function (e) {
    var userInput = $('#fiveText').val();
    e.preventDefault();
    localStorage.setItem('five', userInput);
})
$('#fiveText').val(localStorage.getItem('five'));


// code for time updates with colors
function nineColor() {
    var startDay = moment().startOf('day');
    if (currentTime.isAfter(startDay)) {
        $('#nineText').addClass("past");
    }
    else if (currentTime.isBefore(startDay)) {
        $('#nineText').addClass("future");
    }
    else if (currentTime.isSame(startDay)) {
        $('#nineText').addClass("present");
    }
};
nineColor();


// color changing blocks based on time
function presentTime() {

}




