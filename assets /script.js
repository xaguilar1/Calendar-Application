var userText = document.querySelector("description");
var buttons = document.querySelector("saveBtn");
var hourTime = document.querySelector("hour");

// variable to store and loop through scheduler
var myDay = [
    {
        hour: "09",
        time: "09",
        meridiem: "am",
        reminder: ""
    },
    {
        hour: "10",
        time: "10",
        meridiem: "am",
        reminder: ""
    },
    {
        hour: "11",
        time: "11",
        meridiem: "am",
        reminder: ""
    },
    {
        hour: "12",
        time: "12",
        meridiem: "pm",
        reminder: ""
    },
    {
        hour: "01",
        time: "13",
        meridiem: "pm",
        reminder: ""
    },
    {
        hour: "02",
        time: "14",
        meridiem: "pm",
        reminder: ""
    },


// saves data to be used in localStorage
$(".saveBtn").on("click", function(event) {
    event.preventDefault();
    var saveIndex = $(this).siblings(".description").children(".future").attr("id");
    myDay[saveIndex].reminder = $(this).siblings(".description").children(".future").val();
    console.log(saveIndex);
    saveReminders();
    displayReminders();
})














