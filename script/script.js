// Analog clock
function analogClockFunc(){
    let second = document.querySelector('.second')
    let minute = document.querySelector('.minute')
    let hour = document.querySelector('.hour')

    // Add tick mark
    function addTickMarks() {
        const tickParent = document.querySelector('.tick-parent');
        for (let i = 0; i < 60; i++) {
          const tickMark = document.createElement('div');
          tickMark.className = 'bg-red-500 absolute'
          const tickMarkLength = i % 5 === 0 ? 12 : 6; // Longer tick marks every 5 units
          const tickMarkThickness = i % 5 === 0 ? 2 : 1; // Thicker tick marks every 5 units
          tickMark.style.width = `${tickMarkThickness}px`;
          tickMark.style.height = `${tickMarkLength}px`;
          const angle = i * 6; // Each tick mark is 6 degrees apart
          tickMark.style.transform = `rotate(${angle}deg) translateY(-100px)`;
          tickParent.appendChild(tickMark);
        }
      }
      addTickMarks()
      
    
// Default Interface
defaultClockInterface()
function defaultClockInterface(){
    let date = new Date()
    let secondRatio = date.getSeconds() / 60
    let minuteRatio = (secondRatio + date.getMinutes()) / 60
    let hourRatio = (minuteRatio + date.getHours()) / 12
    let secondAngle = secondRatio * 360
    let minuteAngle = minuteRatio * 360
    let hourAngle = hourRatio * 360
    second.style.transform = `rotate(${secondAngle}deg)`
    minute.style.transform = `rotate(${minuteAngle}deg)`
    hour.style.transform = `rotate(${hourAngle}deg)`
}

// Update Interface after every one second
    let clockInterval = setInterval(updateClock, 1000)
    function updateClock(){
        let date = new Date()
        let secondRatio = date.getSeconds() / 60
        let minuteRatio = (secondRatio + date.getMinutes()) / 60
        let hourRatio = (minuteRatio + date.getHours()) / 12
        let secondAngle = secondRatio * 360
        let minuteAngle = minuteRatio * 360
        let hourAngle = hourRatio * 360
        second.style.transform = `rotate(${secondAngle}deg)`
        minute.style.transform = `rotate(${minuteAngle}deg)`
        hour.style.transform = `rotate(${hourAngle}deg)`
    }
    
}
analogClockFunc()