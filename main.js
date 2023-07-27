
function instru(){
    var element = document.getElementById("inst");
    var a=getComputedStyle(element).visibility;
    if(a=="hidden")
    element.style.visibility="visible";
    else
    element.style.visibility="hidden";
}




function setTimer() {
    var seconds1 = parseInt(document.getElementById("se1").value, 10);
    var min1 = parseInt(document.getElementById("mi1").value, 10);
    var hrs1 = parseInt(document.getElementById("hr1").value, 10);
    var da1 = parseInt(document.getElementById("da1").value, 10);
    
    if (seconds1 < 0 || seconds1 > 59) {
      seconds1 = 0;
    }
    if (min1 < 0 || min1 > 59) {
      min1 = 0;
    }
    if (hrs1 < 0 || hrs1 > 23) {
      hrs1 = 0;
    }
    if (da1 < 0) {
      da1 = 0;
    }
  
    document.getElementById("se1").value ="0";
    document.getElementById("mi1").value = "0";
    document.getElementById("hr1").value = "0";
    document.getElementById("da1").value = "0";
  
    document.getElementById("se2").innerText = seconds1.toString().padStart(2, "0");
    document.getElementById("mi2").innerText = min1.toString().padStart(2, "0");
    document.getElementById("hr2").innerText = hrs1.toString().padStart(2, "0");
    document.getElementById("da2").innerText = da1.toString().padStart(2, "0");
  }
  
  var intervalId;
  var st = false;
  
  function start() {
    if (!st) {
      st = true;
      intervalId = setInterval(() => {
        var seconds3 = parseInt(document.getElementById("se2").innerText, 10);
        var min3 = parseInt(document.getElementById("mi2").innerText, 10);
        var hrs3 = parseInt(document.getElementById("hr2").innerText, 10);
        var da3 = parseInt(document.getElementById("da2").innerText, 10);
  
        seconds3--;
  
        if (seconds3 < 0) {
          min3--;
          seconds3 = 59;
        }
        if (min3 < 0) {
          hrs3--;
          min3 = 59;
        }
        if (hrs3 < 0) {
          da3--;
          hrs3 = 23;
        }
  
        document.getElementById("se2").innerText = seconds3.toString().padStart(2, '0');
        document.getElementById("mi2").innerText = min3.toString().padStart(2, '0');
        document.getElementById("hr2").innerText = hrs3.toString().padStart(2, '0');
        document.getElementById("da2").innerText = da3.toString().padStart(2, '0');
  
        if (da3 <= 0 && hrs3 <= 0 && min3 <= 0 && seconds3 <= 0) {
          clearInterval(intervalId);
          st = false;
        }
        if (da3 < 0 || hrs3 < 0 || min3 < 0 || seconds3 < 0) {
          document.getElementById("se2").innerText = "00";
          document.getElementById("mi2").innerText = "00";
          document.getElementById("hr2").innerText = "00";
          document.getElementById("da2").innerText = "00";
          clearInterval(intervalId);
          st = false;
        }
      }, 1000);
    }
  }
  


function pause() {
    clearInterval(intervalId);
    st=false;
  }
  
  function reset() {
    clearInterval(intervalId);
    st=false;
    document.getElementById("se2").innerText = "00";
    document.getElementById("mi2").innerText = "00";
    document.getElementById("hr2").innerText = "00";
    document.getElementById("da2").innerText = "00";
  }

