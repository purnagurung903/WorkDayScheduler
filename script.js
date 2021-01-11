//alert("yooo"); testing my js is working or not
//console.log(dayjs())
//console.log(dayjs().format("dddd, MMMM D YYYY " + "h mm A"));
console.log(dayjs().format("h"))
var today = $("#currentDay")

$(document).ready(function(){//getting ready to load document which is html and css.
  //displaying current date & time.
  $("#currentDay").text(dayjs().format("dddd, MMMM D YYYY " + "h mm A"));
  //add click listener for user input and time stamp
  $(".saveBtn").on("click",function(){
    //get value
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    // storing the given value by set item in local storage!
    localStorage.setItem(time, text);
  })

  //load all saved data from localStorage for each hour created.
  $("#hour9 .description").val(localStorage.getItem("hour9"));
  $("#hour10 .description").val(localStorage.getItem("hour10"));
  $("#hour11 .description").val(localStorage.getItem("hour11"));
  $("#hour12 .description").val(localStorage.getItem("hour12"));
  $("#hour13 .description").val(localStorage.getItem("hour13"));
  $("#hour14 .description").val(localStorage.getItem("hour14"));
  $("#hour15 .description").val(localStorage.getItem("hour15"));
  $("#hour16 .description").val(localStorage.getItem("hour16"));
  $("#hour17 .description").val(localStorage.getItem("hour17"));


  function myHourTracker(){

    //get current number of nhours
    var currentHour =  dayjs().hour();

    //looping the time blooks.
    $(".time-block").each(function(){
      var blockHour = parseInt($(this).attr("id").split("hour")[1]);

      console.log(blockHour, currentHour)
      //checking if we have moved past this time.
      if (blockHour < currentHour){
        $(this).addClass("past");//white color
        $(this).removeClass("future");//green color
        $(this).removeClass("present");//red color
      }
      else if (blockHour === currentHour){
        $(this).removeClass("past");
        $(this).addClass("present");
        $(this).removeClass("future");
      }
      else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
      }




    })

  }
  myHourTracker();// calling function

  
  

})