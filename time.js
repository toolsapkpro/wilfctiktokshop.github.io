   // Set the countdown time in minutes
   var countdownMinutes = 30;

   // Calculate the total seconds
   var totalSeconds = countdownMinutes * 60;

   // Function to update the countdown timer
   function updateTimer() {
       var minutes = Math.floor(totalSeconds / 60);
       var seconds = totalSeconds % 60;

       // Display the timer in the "timer" element
       document.getElementById("timer").textContent = minutes + "m " + seconds + "s";

       // Check if the countdown has reached zero
       if (totalSeconds <= 0) {
           document.getElementById("timer").textContent = "Time's up!";
           clearInterval(interval);
       } else {
           totalSeconds--;
       }
   }

   // Call the updateTimer function every second
   var interval = setInterval(updateTimer, 1000);

   // Initial update
   updateTimer();