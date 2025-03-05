import dayjs from "dayjs"

const currentTimeEl = document.querySelector(".current-time");
const currentDateEl = document.querySelector(".current-date");

const now = dayjs();

let day = now.date()
let month = now.month() + 1
let year = now.year()

function formatDateTime(day, month, year) {
  let dateDa;
  let dateMonth;

  if (day === 1) {
    dateDa = "Monday";
  } else if (day === 2) {
    dateDa = "Tuesday";
  } else if (day === 3) {
    dateDa = "Wednesday";
  } else if (day === 4) {
    dateDa = "Thursday";
  } else if (day === 5) {
    dateDa = "Friday";
  } else if (day === 6) {
    dateDa = "Saturday";
  } else if (day === 7) {
    dateDa = "Sunday";
  };

  if (month === 1) {
    dateMonth = "January";
  } else if (month === 2) {
    dateMonth = "February";
  } else if (month === 3) {
    dateMonth = "March";
  } else if (month === 4) {
    dateMonth = "April";
  } else if (month === 5) {
    dateMonth = "May";
  } else if (month === 6) {
    dateMonth = "June";
  } else if (month === 7) {
    dateMonth = "July";
  } else if (month === 8) {
    dateMonth = "August";
  } else if (month === 9) {
    dateMonth = "September";
  } else if (month === 10) {
    dateMonth = "October";
  } else if (month === 11) {
    dateMonth = "November";
  } else if (month === 12) {
    dateMonth = "December";
  }

  return `${dateDa}, ${day} ${dateMonth}, ${year}`;
};


function showDate() {
  let formatDate = formatDateTime(day, month, year)
  let hour = now.format("HH:mm:ss");

  currentTimeEl.innerText = hour;
  currentDateEl.innerText = formatDate;
}

setInterval(showDate, 1000)