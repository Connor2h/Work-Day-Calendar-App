var date = new Date();
var hoursArray= [9, 10, 11, 12, 1, 2, 3, 4, 5]

var tasks = {};


document.getElementById('currentDay').innerHTML=date;




$(".row").on("click", "div", function() {
    var text = $(this).text().trim();

    var textInput = $("<textarea>").addClass("form-control").val(text);

    $(this).replaceWith(textInput);

    textInput.trigger("focus");

})

$(".row").on("blur", "textarea", function() {
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
    var taskP = $("<div>").addClass("col-8 past").text(text);
    //var taskP = $("<p>").addClass("m-1").text(text);

    // replace textarea with p element
    $(this).replaceWith(taskP);

});


//I need a click event on the button to save to local storage
$( ".saveBtn" ).click(function() {
    alert( "Handler for .click() called." );
});




//console.log(date);