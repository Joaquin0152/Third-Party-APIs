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

  function initPage(){
    var init9 = JSON.parse(localStorage.getItem("06:30 am"));
  sixAm.val(init6);

  var init10 = JSON.parse(localStorage.getItem("07:30 am"))
  sevenAm.val(init7);
  
  var init11 = JSON.parse(localStorage.getItem("08:30 am"))
  eightAm.val(init8);
  
  var init12 = JSON.parse(localStorage.getItem("09:30 am"))
  nineAm.val(init9);
  
  var init1 = JSON.parse(localStorage.getItem("10:30 am"))
  tenAm.val(init10);
  
  var init2 = JSON.parse(localStorage.getItem("11:30 pm"))
  elevenAm.val(ini11);
  
  var init3 = JSON.parse(localStorage.getItem("12:30pm"))
  twelvePm.val(init12);
 
  var init4 = JSON.parse(localStorage.getItem("01:30 pm"))
  onePm.val(init1);
  
  var init5 = JSON.parse(localStorage.getItem("02:30pm"))
  twoPm.val(init2);
  
  var init6 = JSON.parse(localStorage.getItem("03:30 pm"))
  threePm.val(init3);

} 

setInterval(displayTime, 1000);
//boom it works!!!!! 