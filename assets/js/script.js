var date = new Date();
var hoursArray = [9, 10, 11, 12, 13, 14, 15, 16, 17]
var hourHolderEl = document.getElementById("hour-holder");
//Decided to use LUXON instead of Moment due to Moment being legacy code
var DateTime = luxon.DateTime;
const now = DateTime.now();
const currentHour = DateTime.local().hour;
console.log(currentHour);
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

    //assign classes
    newHourDivEl.className = "col-2 hour";
    newTextAreaEl.className = "col-8 description";
    newButtonEl.className = "col-2 saveBtn far fa-save";

    //console.log(newHourId);




    //check
    var hourEl = document.getElementById(newHourId);
    if (hoursArray[i] < 12) {

        hourEl.innerText = newHourId + " AM";
    } else {
        hourEl.innerText = newHourId + " PM";
    }

    //console.log(date)

    if (currentHour > hoursArray[i]) {
        newTextAreaEl.className = "col-8 past";
    } else if (currentHour == hoursArray[i]) {
        newTextAreaEl.className = "col-8 present";
    } else {
        newTextAreaEl.className = "col-8 future";
    }


}

document.getElementById("textarea-0").placeholder = "Type in here..";
document.getElementById("textarea-1").placeholder = "Type in here..";
document.getElementById("textarea-2").placeholder = "Type in here..";
document.getElementById("textarea-3").placeholder = "Type in here..";
document.getElementById("textarea-4").placeholder = "Type in here..";
document.getElementById("textarea-5").placeholder = "Type in here..";
document.getElementById("textarea-6").placeholder = "Type in here..";
document.getElementById("textarea-7").placeholder = "Type in here..";
document.getElementById("textarea-8").placeholder = "Type in here..";
document.getElementById("textarea-9").placeholder = "Type in here..";

//time/date/other stuff
//document.getElementById('currentDay').innerHTML = date;


$(".row").on("click", ".description", function () {
    var text = $(this).text().trim();
    // console.log(text)

    var textInput = $("<textarea>").val(text);

    $(this).replaceWith(textInput);

    textInput.trigger("focus");

})

$(".row").on("blur", "textarea", function () {
    // get the textarea's current value/text
    var text = $(this).val().trim();

    // get the parent ul's id attribute
    var status = $(this).closest(".div").attr("id");
    //  var status = $(this).closest(".list-group").attr("id").replace("list-", "");
    //console.log(status);

    // get the task's position in the list of other li elements
    var index = $(this).closest(".row").index();
    //var index = $(this).closest(".list-group-item").index();

    //tasks[status][index].text = text; //access the task the global array and save text in it
    //console.log(tasks[status][index].text)//this is important for assignment 5
    //saveTasks();

    //important for assignment 5 // may need to wrap this in an event function that if they click the save button then save to local storage/else do nothing
    // recreate p element
    //var taskP = $("<textarea>").addClass("col-8").text(text);
    //var taskP = $("<p>").addClass("m-1").text(text);

    // replace textarea with p element
    //$(this).replaceWith(taskP);

});


//I need a click event on the button to save to local storage
$(".saveBtn").click(function () {
    // grab value from user and store in variable
    //need to wrap all rows into a div and then $(this).siblings
    var userInput = $(this).val()
    console.log(userInput);
    //localStorage.setItem()
});




//console.log(date);