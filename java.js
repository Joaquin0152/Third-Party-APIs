// time DOM elements
var timeDisplayEl = $('#time-display');
var dateInputEl = $('#datepicker');
var clearButton = document.getElementById("clearBtn");
var saveButton = document.getElementById("saveBtn");

// handle displaying the time
function displayTime() {
  var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
  timeDisplayEl.text(rightNow);
};


//save button
$(".saveBtn").on("click", function(){
  userInput = $(this).siblings(".form-control").val().trim();
  console.log(userInput);
  hourSpan = $(this).siblings(".input-group-prepend").text().trim();
  console.log(hourSpan);
  localStorage.setItem(hourSpan, JSON.stringify(userInput));

})

  $("#clear").on("click", function(){
    localStorage.clear();
    initPage()
  }) 

setInterval(displayTime, 1000);
//boom it works!!!!! 