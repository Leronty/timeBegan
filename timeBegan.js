
  function showTime() {
    let currentTime = new Date(); // current time
    this.document.getElementById("display").innerHTML = Date.parse(currentTime);

  }
  showTime();
  setInterval(showTime, 1000);


