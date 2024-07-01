document.addEventListener("DOMContentLoaded", function(){
    const daysOfWeek = ["Sunday","Monday","Tuesday", "Wednesday", "Thursday", "Friday","Saturday"];
    const today = new Date();
    const dayOfWeek = daysOfWeek[today.getDay()];
    console.log("dates",dayOfWeek);
    document.getElementById("dates").textContent = dayOfWeek;
});