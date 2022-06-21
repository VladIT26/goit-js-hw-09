import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from "notiflix";

const refs = {
    inputField: document.querySelector('#datetime-picker'),
    buttonStart: document.querySelector('button[data-start]'),
    daysField: document.querySelector('[data-days]'),
    hoursField: document.querySelector('[data-hours]'),
    minutesField: document.querySelector('[data-minutes]'),
    secondsField: document.querySelector('[data-seconds]'),
};
const isDisabled = true;
refs.buttonStart.disabled = isDisabled;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    dateCheck(selectedDates[0]);
  },
};

const timePicker = flatpickr(refs.inputField, options);

function dateCheck(date) {
  const currentDate = new Date();
  console.log(currentDate)
  if (currentDate > date) {
    Notify.failure("Please choose date in the future")
  } else {
    refs.buttonStart.disabled = !isDisabled;
  }
  
}
let intervalId = null; 

refs.buttonStart.addEventListener('click', onStart);

function onStart(event) {
  event.preventDefault();
  refs.buttonStart.disabled = isDisabled;
  refs.inputField.disabled = isDisabled;
  intervalId = setInterval(() => {
    const diff = timePicker.selectedDates[0] - Date.now();
      const timeToClose = convertMs(timePicker.selectedDates[0] - Date.now())
    if (diff < 1000) {
      clearInterval(intervalId)
      Notify.success("Час вийшов!")
      }
      updateTimeValues(timeToClose)
    }, 1000)
};

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

function addZero(value) {
    return String(value).padStart(2,'0');
}


function updateTimeValues({ days, hours, minutes, seconds }) {
  refs.daysField.textContent = addZero(days);
  refs.hoursField.textContent = addZero(hours);
  refs.minutesField.textContent = addZero(minutes);
  refs.secondsField.textContent = addZero(seconds);
}