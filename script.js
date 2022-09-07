const hoursElem = document.getElementById('hours');
const minutesElem = document.getElementById('minutes');
const secondsElem = document.getElementById('seconds');
const ampmElem = document.getElementById('ampm');
const btn = document.querySelector(".btn");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close-btn");

updateClock();
btn.addEventListener('click', showModal);
closeBtn.addEventListener('click', clearModal);

function updateClock() {
  const date = new Date();
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  let ampm = "AM";

  if (hour > 12) {
    hour = hour - 12;
    ampm = "PM";
  }

  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  hours.textContent = hour;
  minutes.textContent = min;
  seconds.textContent = sec;
  ampmElem.textContent = ampm;
  setTimeout(() => updateClock(), 1000);
}

function showModal() {
  modal.classList.add('open');
}

function clearModal() {
  modal.classList.remove('open');
}