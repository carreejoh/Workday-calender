// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
 



    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
  });
  

  

  
  
  
  // For Current Date 
  
  var currentday = $('#currentDay');
  var today = dayjs();
  var submitbutton = $('.saveBtn');


  currentday.text(today.format('MMM D, YYYY'));

 
  // For Changing Color


  

  setInterval (function changecolor() {
    var currenthour = today.format("HH");
    for (i = 0; i < 24; i++) {
        if (i > 17, i < 9) {

        } else if (i == currenthour) {
            var presenttime =document.getElementById(i);
            presenttime.setAttribute("class", "row time-block present")
        } else if (i < currenthour) {
            var pasttime = document.getElementById(i);
            pasttime.setAttribute("class", "row time-block past");
        } else if (i > currenthour, i < 18) {
            var futuretime = document.getElementById(i);
            futuretime.setAttribute = ("class", "row time-block future");
        } 
    }

  }, 1000 )


  $(function () { 
  submitbutton.click(function() {
    localStorage.setItem($(this).parent().attr('id'), $(this).siblings("textarea").val())
  })
  submitbutton.each(function() {
    $(this).siblings("textarea").text(localStorage.getItem($(this).parent().attr("id")))
  })
})
  
  






        
 // $(".saveBtn").on('click', function(){
  //  var text = $('.description').val();
  //  
  //  console.log(text);
//})
  

 