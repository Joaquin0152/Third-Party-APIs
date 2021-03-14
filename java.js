// time DOM elements
var timeDisplayEl = $('#time-display');
var dateInputEl = $('#datepicker');
var clearButton = document.getElementById("clearBtn");
var saveButton = document.getElementById("saveBtn");
var sixAm = $("#6am");
var sevenAm = $("#7am");
var eightAm = $("#8am");
var nineAm = $("#9am");
var tenAm = $("#10am");
var elevenAm = $("#11am");
var twelvePm = $("#12pm");
var onePm = $("#1pm");
var twoPm = $("#2pm");
var threePm = $("#3pm");

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

//activitie 23
  function initPage(){
    var init6 = JSON.parse(localStorage.getItem("06:30 AM"));
  sixAm.val(init6);

  var init7 = JSON.parse(localStorage.getItem("07:30 AM"))
  sevenAm.val(init7);
  
  var init8 = JSON.parse(localStorage.getItem("08:30 AM"))
  eightAm.val(init8);
  
  var init9 = JSON.parse(localStorage.getItem("09:30 AM"))
  nineAm.val(init9);
  
  var init10 = JSON.parse(localStorage.getItem("10:30 AM"))
  tenAm.val(init10);
  
  var init11 = JSON.parse(localStorage.getItem("11:30 AM"))
  elevenAm.val(init11);
  
  var init12 = JSON.parse(localStorage.getItem("12:30 PM"))
  twelvePm.val(init12);
 
  var init1 = JSON.parse(localStorage.getItem("01:30 PM"))
  onePm.val(init1);
  
  var init2 = JSON.parse(localStorage.getItem("02:30 PM"))
  twoPm.val(init2);
  
  var init3 = JSON.parse(localStorage.getItem("03:30 PM"))
  threePm.val(init3);

} 

//how to add funciton in order for the background color to change with time. 
//var past, present, future

if (displayTime < ("id")){
  $("input-group").addClass("present");
} else if (displayTime > ("id")){
  $("input-group").addClass("past");
};

setInterval(displayTime, 1000);
//boom it works!!!!! 