document.addEventListener("DOMContentLoaded", function(){
    const daysOfWeek = ["Sunday","Monday","Tuesday", "Wednesday", "Thursday", "Friday","Saturday"];
    const today = new Date();
    const dayOfWeek = daysOfWeek[today.getDay()];
    console.log("dates",dayOfWeek);
    document.getElementById("dates").textContent = dayOfWeek;

    function updateUTCTime() {
        const utcTimeElement = document.getElementById('currentTimeUTC');
        const now = new Date();
        const utcString = now.toUTCString();
        utcTimeElement.textContent = utcString;
    }
    
    // Update the time every second
    setInterval(updateUTCTime, 1000);
    
    // Initialize the time display
    updateUTCTime();
    
});