(function() {
    // Define the levels and their corresponding seconds thresholds
    const levels = [
        { grade: "PUG GOD", threshold: 60 },   // Level 1: 0-60 seconds
        { grade: "PUG GOD", threshold: 120 },   // Level 2: 61-120 seconds
        { grade: "PUG GOD", threshold: 180 },   // Level 3: 121-180 seconds
        { grade: "PUG GOD", threshold: Infinity } // Level 4: 181+ seconds
    ];

    let seconds = 0;              
    let timerInterval;            

    function updateDisplay() {
        // Update seconds on the webpage
        document.querySelector('.seconds').textContent = seconds;

        // Find the current level based on the seconds
        const currentLevel = levels.find(level => seconds < level.threshold);

        // Update the grade on the webpage
        document.querySelector('.grade').textContent = currentLevel ? currentLevel.grade : levels[levels.length - 1].grade;
    }

    // Function to update the timer
    function updateTimer() {
        seconds += 0.1;  // Increment by 0.1 seconds (100 milliseconds)
        updateDisplay(); // Update the display with the new time and level
    }

    // Function to start the timer
    function startTimer() {
        timerInterval = setInterval(updateTimer, 100); // Update every 100 milliseconds
    }

    // Function to stop the timer
    function stopTimer() {
        clearInterval(timerInterval);
        updateDisplay(); // Final update to show the last seconds and level
        console.log(`Timer stopped at ${seconds.toFixed(1)} seconds and level: ${levels.find(level => seconds < level.threshold)?.grade || levels[levels.length - 1].grade}`);
    }

    // Start the timer
    startTimer();

    // Stop the timer after 300 seconds
    setTimeout(stopTimer, 300000); // Converts seconds to milliseconds
})();
