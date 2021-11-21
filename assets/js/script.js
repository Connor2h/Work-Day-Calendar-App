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
    //var rowDivEl = document.createElement("div");
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
$("#btn-0").click(function () {

    //save to a variable
    var nineSave = $(this).siblings("#textarea-0").val();

    //store local storage
    localStorage.setItem("9am", nineSave);

});

$("#btn-1").click(function () {

    //save to a variable
    var tenSave = $(this).siblings("#textarea-1").val();

    //store local storage
    localStorage.setItem("10am", tenSave);

});

$("#btn-2").click(function () {

    //save to a variable
    var elevenSave = $(this).siblings("#textarea-2").val();

    //store local storage
    localStorage.setItem("11am", elevenSave);

});

$("#btn-3").click(function () {

    //save to a variable
    var twelveSave = $(this).siblings("#textarea-3").val();

    //store local storage
    localStorage.setItem("12pm", twelveSave);

});

$("#btn-4").click(function () {

    //save to a variable
    var oneSave = $(this).siblings("#textarea-4").val();

    //store local storage
    localStorage.setItem("13pm", oneSave);

});

$("#btn-5").click(function () {

    //save to a variable
    var twoSave = $(this).siblings("#textarea-5").val();

    //store local storage
    localStorage.setItem("14pm", twoSave);

});

$("#btn-6").click(function () {

    //save to a variable
    var threeSave = $(this).siblings("#textarea-6").val();

    //store local storage
    localStorage.setItem("15pm", threeSave);

});

$("#btn-7").click(function () {

    //save to a variable
    var fourSave = $(this).siblings("#textarea-7").val();

    //store local storage
    localStorage.setItem("16pm", fourSave);

});

$("#btn-8").click(function () {

    //save to a variable
    var fiveSave = $(this).siblings("#textarea-8").val();

    //store local storage
    localStorage.setItem("17pm", fiveSave);

});

//load the text back from local storage
$("#hour-holder #textarea-0").val(localStorage.getItem("9am"));
$("#hour-holder #textarea-1").val(localStorage.getItem("10am"));
$("#hour-holder #textarea-2").val(localStorage.getItem("11am"));
$("#hour-holder #textarea-3").val(localStorage.getItem("12pm"));
$("#hour-holder #textarea-4").val(localStorage.getItem("13pm"));
$("#hour-holder #textarea-5").val(localStorage.getItem("14pm"));
$("#hour-holder #textarea-6").val(localStorage.getItem("15pm"));
$("#hour-holder #textarea-7").val(localStorage.getItem("16pm"));
$("#hour-holder #textarea-8").val(localStorage.getItem("17pm"));