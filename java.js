// time DOM elements
var timeDisplayEl = $('#time-display');
var dateInputEl = $('#datepicker');

// handle displaying the time
function displayTime() {
  var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
  timeDisplayEl.text(rightNow);
}
setInterval(displayTime, 1000);
//boom it works!!!!! 

$( function() {
    $( "#datepicker" ).datepicker();
  } );
  