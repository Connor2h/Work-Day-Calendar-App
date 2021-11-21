//variables
var date = new Date();
var hoursArray = [9, 10, 11, 12, 13, 14, 15, 16, 17]
var hourHolderEl = document.getElementById("hour-holder");
var buttonEl = document.getElementById(".saveBtn");
var text;
var userInput = [];

//Decided to use LUXON instead of Moment due to Moment being legacy code
var DateTime = luxon.DateTime;
const now = DateTime.now();
const currentHour = DateTime.local().hour;
//console.log(currentHour);
$("#currentDay").text(now.toLocaleString())

var tasks = {};

// var hourInADay = 9;

for (var i = 0; i < hoursArray.length; i++) {
    //create elements
    var newHourDivEl = document.createElement("div");
    var newTextAreaEl = document.createElement("textarea");
    var newButtonEl = document.createElement("button");

    //append elements
    hourHolderEl.append(newHourDivEl);
    hourHolderEl.append(newTextAreaEl);
    hourHolderEl.append(newButtonEl);

    // document.getElementById("demo").id = "newid";
    //assign id
    var newHourId = hoursArray[i].toString();
    newHourDivEl.id = newHourId;
    newTextAreaEl.id = "textarea-" + i;
    newButtonEl.id = "btn-" + i; 

    //assign classes
    newHourDivEl.className = "col-2 hour";
    newTextAreaEl.className = "col-8 description";
    newButtonEl.className = "col-2 saveBtn far fa-save";


    //check to assign hours to Am or PM
    var hourEl = document.getElementById(newHourId);
    if (hoursArray[i] < 12) {

        hourEl.innerText = newHourId + " AM";
    } else {
        hourEl.innerText = newHourId + " PM";
    }

    //console.log(date)

    //check if current hour is in past,present,future and assign class
    if (currentHour > hoursArray[i]) {
        newTextAreaEl.className = "col-8 past";
    } else if (currentHour == hoursArray[i]) {
        newTextAreaEl.className = "col-8 present";
    } else {
        newTextAreaEl.className = "col-8 future";
    }

}

//setting placeholdertext for elements with the the id of textarea
document.getElementById("textarea-0").placeholder = "Type in here..";
document.getElementById("textarea-1").placeholder = "Type in here..";
document.getElementById("textarea-2").placeholder = "Type in here..";
document.getElementById("textarea-3").placeholder = "Type in here..";
document.getElementById("textarea-4").placeholder = "Type in here..";
document.getElementById("textarea-5").placeholder = "Type in here..";
document.getElementById("textarea-6").placeholder = "Type in here..";
document.getElementById("textarea-7").placeholder = "Type in here..";
document.getElementById("textarea-8").placeholder = "Type in here..";


//click on row and save text in text area
$(".row").on("click", ".description", function () {
    var text = $(this).text().trim();
    // console.log(text)

    var textInput = $("<textarea>").val(text);

    $(this).replaceWith(textInput);

    textInput.trigger("focus");

})

// click off row/blur save text to text area
$(".row").on("blur", "textarea", function () {
    // get the textarea's current value/text
    text = $(this).val().trim();

});

//I need a click event on the button to save to local storage
$(".saveBtn").click(function () {

    userInput = localStorage.getItem("userInput");

    userInput = text;

    //userInput = JSON.parse(localStorage.getItem("tasks"));

    localStorage.setItem("userInput", JSON.stringify(userInput));

});
