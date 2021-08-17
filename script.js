

//Functions that will execute once window loads

window.onload = function(){
    colorCode();
    _9AM();
    _10AM();
    _11AM();
    _12PM();
    _1PM();
    _2PM();
    _3PM();
    _4PM();
    _5PM();
   }
  
   //Variables for time and date
  var currentDay = moment().format("dddd LL");
  $("#currentDay").append(currentDay);

  var currentTime = moment().format("LT");
  $("#currentTime").append(currentTime);
  
  var now = new Date().getHours();
  
// Color codes rows depending on if it's in the past or present

  function colorCode() {
    if (now > 9) {
      $("#toDo9AM").addClass("past");
    } else if (now >= 9 && now < 10) {
      $("#toDo9AM").addClass("present");
    } else if (now < 9) {
      $("#toDo9AM").addClass("future");
    }
    if (now > 10) {
      $("#toDo10AM").addClass("past");
    } else if (now >= 10 && now < 11) {
      $("#toDo10AM").addClass("present");
    } else if (now < 10) {
      $("#toDo10AM").addClass("future");
    }
    if (now > 11) {
      $("#toDo11AM").addClass("past");
    } else if (now >= 11 && now < 12) {
      $("#toDo11AM").addClass("present");
    } else if (now < 11) {
      $("#toDo11AM").addClass("future");
    }
    if (now > 12) {
      $("#toDo12PM").addClass("past");
    } else if (now >= 12 && now < 13) {
      $("#toDo12PM").addClass("present");
    } else if (now < 12) {
      $("#toDo12PM").addClass("future");
    }
    if (now > 13) {
      $("#toDo1PM").addClass("past");
    } else if (now >= 13 && now < 14) {
      $("#toDo1PM").addClass("present");
    } else if (now < 13) {
      $("#toDo1PM").addClass("future");
    }
    if (now > 14) {
      $("#toDo2PM").addClass("past");
    } else if (now >= 14 && now < 15) {
      $("#toDo2PM").addClass("present");
    } else if (now < 14) {
      $("#toDo2PM").addClass("future");
    }
    if (now > 15) {
      $("#toDo3PM").addClass("past");
    } else if (now >= 15 && now < 16) {
      $("#toDo3PM").addClass("present");
    } else if (now < 15) {
      $("#toDo3PM").addClass("future");
    }
    if (now > 16) {
      $("#toDo4PM").addClass("past");
    } else if (now >= 16 && now < 17) {
      $("#toDo4PM").addClass("present");
    } else if (now < 16) {
      $("#toDo4PM").addClass("future");
    }
    if (now > 17) {
      $("#toDo5PM").addClass("past");
    } else if (now >= 17 && now < 18) {
      $("#toDo5PM").addClass("present");
    } else if (now < 17) {
      $("#toDo5PM").addClass("future");
    }
  }
  
  
 //Functions for each of the time slots to save the value entered to local storage

 // *** Tried using the $("") jquery selector method but would not save ***
  
  function _9AM() {
    var inputToDo9AM = document.querySelector("#toDo9AM");

    var outputToDo9AM = document.querySelector("#toDo9AM");

    var saveButton9AM = document.querySelector("#saveButton9AM");
  
    saveButton9AM.addEventListener ("click", updateOutput);
  
    outputToDo9AM.textContent = localStorage.getItem("content9AM");

    inputToDo9AM.value = localStorage.getItem("content9AM");
  
    function updateOutput() {

      localStorage.setItem("content9AM", inputToDo9AM.value);
  
      outputToDo9AM.textContent = inputToDo9AM.value;
    }
  }

  function _10AM() {
    var inputToDo10AM = document.querySelector("#toDo10AM");

    var outputToDo10AM = document.querySelector("#toDo10AM");

    var saveButton10AM = document.querySelector("#saveButton10AM");

  
    saveButton10AM.addEventListener("click", updateOutput);
  
    outputToDo10AM.textContent = localStorage.getItem("content10AM");

    inputToDo10AM.value = localStorage.getItem("content10AM");
  
    function updateOutput() {

      localStorage.setItem("content10AM", inputToDo10AM.value);

  
      outputToDo10AM.textContent = inputToDo10AM.value;
    }
  }

  function _11AM() {

    var inputToDo11AM = document.querySelector("#toDo11AM");

    var outputToDo11AM = document.querySelector("#toDo11AM");

    var saveButton11AM = document.querySelector("#saveButton11AM");

  
    saveButton11AM.addEventListener("click", updateOutput);

  
    outputToDo11AM.textContent = localStorage.getItem("content11AM");

    inputToDo11AM.value = localStorage.getItem("content11AM");
  
    function updateOutput() {

      localStorage.setItem("content11AM", inputToDo11AM.value);
  
      outputToDo11AM.textContent = inputToDo11AM.value;
    }
  }

  function _12PM() {

    var inputToDo12PM = document.querySelector("#toDo12PM");

    var outputToDo12PM = document.querySelector("#toDo12PM");

    var saveButton12PM = document.querySelector("#saveButton12PM");

  
    saveButton12PM.addEventListener("click", updateOutput);
  
    outputToDo12PM.textContent = localStorage.getItem("content12PM");
    inputToDo12PM.value = localStorage.getItem("content12PM");
  
    function updateOutput() {
      localStorage.setItem("content12PM", inputToDo12PM.value);
  
      outputToDo12PM.textContent = inputToDo12PM.value;
    }
  }

  function _1PM() {
    var inputToDo1PM = document.querySelector("#toDo1PM");
    var outputToDo1PM = document.querySelector("#toDo1PM");
    var saveButton1PM = document.querySelector("#saveButton1PM");
  
    saveButton1PM.addEventListener("click", updateOutput);
  
    outputToDo1PM.textContent = localStorage.getItem("content1PM");
    inputToDo1PM.value = localStorage.getItem("content1PM");
  
    function updateOutput() {

      localStorage.setItem("content1PM", inputToDo1PM.value);
  
      outputToDo1PM.textContent = inputToDo1PM.value;
    }
  }

  function _2PM() {

    var inputToDo2PM = document.querySelector("#toDo2PM");

    var outputToDo2PM = document.querySelector("#toDo2PM");

    var saveButton2PM = document.querySelector("#saveButton2PM");
  
    saveButton2PM.addEventListener("click", updateOutput);
  
    outputToDo2PM.textContent = localStorage.getItem("content2PM");

    inputToDo2PM.value = localStorage.getItem("content2PM");
  
    function updateOutput() {

      localStorage.setItem("content2PM", inputToDo2PM.value);
  
      outputToDo2PM.textContent = inputToDo2PM.value;
    }
  }

  function _3PM() {

    var inputToDo3PM = document.querySelector("#toDo3PM");

    var outputToDo3PM= document.querySelector("#toDo3PM");

    var saveButton3PM = document.querySelector("#saveButton3PM");
  
    saveButton3PM.addEventListener("click", updateOutput);
  
    outputToDo3PM.textContent = localStorage.getItem("content3PM");

    inputToDo3PM.value = localStorage.getItem("content3PM");
  
    function updateOutput() {

      localStorage.setItem("content3PM", inputToDo3PM.value);
  
      outputToDo3PM.textContent = inputToDo3PM.value;
    }
  }

  function _4PM() {

    var inputToDo4PM = document.querySelector("#toDo4PM");

    var outputToDo4PM = document.querySelector("#toDo4PM");

    var saveButton4PM = document.querySelector("#saveButton4PM");
  
    saveButton4PM.addEventListener("click", updateOutput);
  
    outputToDo4PM.textContent = localStorage.getItem("content4PM");

    inputToDo4PM.value = localStorage.getItem("content4PM");
  
    function updateOutput() {

      localStorage.setItem("content4PM", inputToDo4PM.value);
  
      outputToDo4PM.textContent = inputToDo4PM.value;
    }
  }

  function _5PM() {

    var inputToDo5PM = document.querySelector("#toDo5PM");

    var outputToDo5PM = document.querySelector("#toDo5PM");

    var saveButton5PM = document.querySelector("#saveButton5PM");
  
    saveButton5PM.addEventListener("click", updateOutput);
  
    outputToDo5PM.textContent = localStorage.getItem("content5PM");

    inputToDo5PM.value = localStorage.getItem("content5PM");
  
    function updateOutput() {

      localStorage.setItem("content5PM", inputToDo5PM.value);
  
      outputToDo5PM.textContent = inputToDo5PM.value;
    }
  }
