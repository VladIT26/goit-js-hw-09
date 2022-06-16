const refs = {
  body: document.querySelector('body'),
  buttonStart: document.querySelector('button[data-start]'),
  buttonStop: document.querySelector('button[data-stop]')
}

refs.buttonStop.setAttribute("disabled", " ");
let timerId = null;

refs.buttonStart.addEventListener('click', () => {
  timerId = setInterval(() => {
      refs.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  refs.buttonStart.setAttribute("disabled", " ");
  refs.buttonStop.removeAttribute("disabled")
});

refs.buttonStop.addEventListener("click", () => {
    clearInterval(timerId);
    refs.buttonStop.setAttribute("disabled", " ");
    refs.buttonStart.removeAttribute("disabled");
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
