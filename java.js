// time DOM elements
var timeDisplayEl = $('#time-display');
var dateInputEl = $('#datepicker');
var clear = $('input["text"]');

// handle displaying the time
function displayTime() {
  var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
  timeDisplayEl.text(rightNow);
}
setInterval(displayTime, 1000);
//boom it works!!!!! 

function resetButton(event){
  event.preventDefault();
  $('input["text"]').val('');
}















  // $(document).ready(function(){
  //   console.log("ready!");
  //   moment().day("Sunday");
  //   console.log(momnet().hour());
  //   $(#"currendDay").text(moment().format('dddd,mmmm Do'));
  //   $('textarea').removeClass('past').addClass('future');
  //   if currentTime = time dislplay correct textarea aka color = red
  //   before <=currentTime gray
  //   future = green

  // });