let hour9 = $("#9");
let hour10 = $("#10");
let hour11 = $("#11");
let hour12 = $("#12");
let hour1 = $("#13");
let hour2 = $("#14");
let hour3 = $("#15");
let hour4 = $("#16");
let hour5 = $("#17");
let hour6 = $("#18");
let time = moment();







function writePlanner() {

    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

    $("#9 .planner").val(localStorage.getItem("9"))
    $("#10 .planner").val(localStorage.getItem("10"))
    $("#11 .planner").val(localStorage.getItem("11"))
    $("#12 .planner").val(localStorage.getItem("12"))
    $("#13 .planner").val(localStorage.getItem("13"))
    $("#14 .planner").val(localStorage.getItem("14"))
    $("#15 .planner").val(localStorage.getItem("15"))
    $("#16 .planner").val(localStorage.getItem("16"))
    $("#17 .planner").val(localStorage.getItem("17"))
    $("#18 .planner").val(localStorage.getItem("18"))
    // $(".time-block").attr("id");
    // let planner = localStorage.getItem('id');

    // if (planner !== null) {
    //     $(this).children
    //     (".planner").val(planner);
    // }
} 

writePlanner();


let saveButton = $(".saveBtn");

saveButton.on("click", function() {
    let time = $(this).parent().attr("id");
    let planner = $(this).siblings(".planner").val();
    localStorage.setItem(time, planner);
    console.log(planner)
   
    
    }
  
  
  );

  function timeChange() {

    hour = time.hour();
    $(".time-block").each(function () {
    let currentHour = parseInt($(this).attr("id"));

    if (currentHour > hour) {
        $(this).addClass("future")
    } else if (currentHour === hour) {
        $(this).addClass("present")
    } else if (currentHour < hour) {
        $(this).addClass("past")
    }



})
  }; timeChange();


  function clearSchedule() {

   

    $("#clear-button").on("click", function() {
    
    $("#9 .planner").val(localStorage.removeItem("9"))
    $("#10 .planner").val(localStorage.removeItem("10"))
    $("#11 .planner").val(localStorage.removeItem("11"))
    $("#12 .planner").val(localStorage.removeItem("12"))
    $("#13 .planner").val(localStorage.removeItem("13"))
    $("#14 .planner").val(localStorage.removeItem("14"))
    $("#15 .planner").val(localStorage.removeItem("15"))
    $("#16 .planner").val(localStorage.removeItem("16"))
    $("#17 .planner").val(localStorage.removeItem("17"))
    $("#18 .planner").val(localStorage.removeItem("18"))

    })
}; clearSchedule();
//   function clearSchedule() {
//       $("#clear-button").on("click", function() {
//         let time = $(this).parent().attr("id");
//         let planner = $(this).siblings(".planner").val();
//           localStorage.removeItem(time, planner)
//       })
//   }; clearSchedule();