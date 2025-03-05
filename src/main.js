import dayjs from "dayjs"
import MicroModal from 'micromodal';
import utc from "dayjs/plugin/utc"
import timezone from "dayjs/plugin/timezone";

document.addEventListener("DOMContentLoaded", () => {

  const timezoneSelect = document.querySelector("select");
  const applyTimezoneButton = document.querySelector(".apply");
  const timeZoneName = document.querySelector(".timezone")

  /* When you want to change the country, it is passed 
    as a value to the showDate function parameter */
  applyTimezoneButton.addEventListener("click", () => {
    let timeZone = timezoneSelect.value;
    showDate(timeZone);
  })

  const currentTimeEl = document.querySelector(".current-time");
  const currentDateEl = document.querySelector(".current-date");

  const now = dayjs();

  let date = now.date()
  let day = now.day()
  let month = now.month() + 1
  let year = now.year()

  // formated date time
  function formatDateTime(dayWeek, day, month, year) {
    let dateDa;
    let dateMonth;

    // Search day week
    if (dayWeek === 1) {
      dateDa = "Monday";
    } else if (dayWeek === 2) {
      dateDa = "Tuesday";
    } else if (dayWeek === 3) {
      dateDa = "Wednesday";
    } else if (dayWeek === 4) {
      dateDa = "Thursday";
    } else if (dayWeek === 5) {
      dateDa = "Friday";
    } else if (dayWeek === 6) {
      dateDa = "Saturday";
    } else if (dayWeek === 7) {
      dateDa = "Sunday";
    };

    // Search Day month
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

    // return formated data
    return `${dateDa}, ${day} ${dateMonth}, ${year}`;
  };


  // take a zone like parameter and add the textContent
  function showDate(zone = "America/Caracas") {
    dayjs.extend(utc);
    dayjs.extend(timezone);

    // Format hour  and date
    let hour = dayjs().tz(zone).format("HH:mm:ss");
    let date = dayjs().tz(zone).format("d DD-MM-YYYY");

    let dayWeek = parseInt(date.slice(0));
    let day = parseInt(date.slice(2, 4));
    let month = parseInt(date.slice(5, 7));
    let year = parseInt(date.slice(8, 12));

    let formatDate = formatDateTime(dayWeek, day, month, year);

    // Add hour and date format
    currentTimeEl.textContent = hour;
    currentDateEl.textContent = formatDate;
    timeZoneName.textContent = zone.split("_").join(" ");
  };


  showDate();
  MicroModal.init();
});