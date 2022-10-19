const hoursElem = document.getElementById('hours');
const minutesElem = document.getElementById('minutes');
const secondsElem = document.getElementById('seconds');
const ampmElem = document.getElementById('ampm');
const btn = document.querySelector(".btn");
const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal-content");
const closeBtn = document.querySelector(".close-btn");
const month = document.querySelector('.modal h3');

updateClock();
createTable();
hightLightCurrentDate();
updateMonth();
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

  hoursElem.textContent = hour;
  minutesElem.textContent = min;
  secondsElem.textContent = sec;
  ampmElem.textContent = ampm;
  setTimeout(() => updateClock(), 1000);
}

function showModal() {
  modal.classList.add('open');
}

function clearModal() {
  modal.classList.remove('open');
}

function createTable() {
  const date = new Date(new Date().getFullYear(), new Date().getMonth());
  let table = `<table><tr> <th>s</th> <th>m</th> <th>t</th> <th>w</th>
  <th>t</th> <th>f</th> <th>s</th> </tr><tr>`

  // days before first day of month
  for (let i = 0; i < date.getDay(); i++) {
    table += '<td></td>';
  }

  // populating table cells with date
  while (new Date().getMonth() == date.getMonth()) {
    table += '<td>' + date.getDate() + '</td>';
    date.setDate(date.getDate() + 1);

    if (date.getDay() == 0) {
      table += '</tr><tr>';
    }
  }

  for (let i = date.getDay(); i < 7; i++) {
    table += '<td></td>';
  }

  table += '</tr></table>'
  modalContent.insertAdjacentHTML("beforeend", table);
}

function hightLightCurrentDate() {
  for (let td of document.querySelectorAll('td')) {
    if (td.textContent == new Date().getDate()) {
      td.style.background = "orange";
    
      td.style.color = "#fff"
    }
  }
}

function updateMonth() {
  const arr = ["January", "february", "march", "april", "may",
  "june", "july", "august", "september", "october", "november",
  "december"];
  month.textContent = arr[new Date().getMonth()];
}

