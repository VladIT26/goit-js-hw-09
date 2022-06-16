import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
const refs = {
    inputField: document.querySelector('#datetime-picker'),
    buttonStart: document.querySelector('button[data-start]'),
    daysField: document.querySelector('[data-days]'),
    hoursField: document.querySelector('[data-hours]'),
    minutesField: document.querySelector('[data-minutes]'),
    secondsField: document.querySelector('[data-seconds]'),
};

let selectedDate = null;
let timerId = null;
let timeToClose = null;

refs.buttonStart.addEventListener('click', onStart);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0] < Date.now()) {
          window.alert("Please choose a date in the future")
        } else {
            refs.buttonStart.removeAttribute("disabled");
            selectedDate = selectedDates[0];
    }
    console.log(selectedDates[0]);
  },
};



flatpickr("#datetime-picker", options)


function onStart(event) {
    event.preventDefault();
    timerId = setInterval(() => {
        timeToClose = selectedDate - Date.now()
        if (timeToClose < 0) {
            clearInterval(timerId);
            return;
        }
    }, 1000)
};
console.log(timeToClose)

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

function addZero(value) {
    return String(value).padStart(2,'0');
}