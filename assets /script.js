
//sets current day and time at the top of the screen 

var dateAndtime = function(){$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'))}
setInterval(dateAndtime,1000);

var saveText = ["", "", "", "", "", "","", "", ""];


var currentT = parseInt(moment().format("HH"));
 
console.log(currentT);
// //function for past present and future color slots 

$("textarea").each (function() {
    var currentBlock = $(this);
    var timeOfBlock = parseInt(currentBlock.attr("id"));
    console.log(timeOfBlock);
    if (timeOfBlock === currentT) {
        currentBlock.addClass("present");
        currentBlock.removeClass("past");
        currentBlock.removeClass("future");
        } else if (timeOfBlock < currentT) {
        currentBlock.addClass("past");
        currentBlock.removeClass("present")
        currentBlock.removeClass("future")
        } else if (timeOfBlock > currentT) {
            currentBlock.removeClass("past");
            currentBlock.addClass("future");
            currentBlock.removeClass("present");
        }

});


//create button clicking saving text in local storage


$(".saveBtn").on("click", function() {
    
    var hour = $(this).parent().attr("id");
    console.log(hour);

    var currentText = $(".text" + hour);
    console.log(currentText.val());

    var arrayIndex = parseInt($(this).attr("data-type"));
    saveText[arrayIndex] = currentText.val();
    console.log(saveText);

    localStorage.setItem("setText", JSON.stringify(saveText));
});

//sets exhisting ls data to the view if exhisting 
function textToView () {

    var exhistData = JSON.parse(localStorage.getItem("setText"));

    if (exhistData) {
        saveText = exhistData;
    }

    textToView();
}


// //displays any data in ls to the view 

// function displayTasks () {

// }





























