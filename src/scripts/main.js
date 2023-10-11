AOS.init();

const eventDate = new Date("Dec 25, 2023 19:00:00");
const eventTimestamp = eventDate.getTime();

const dateCheck = setInterval(function () {
  const now = new Date();
  const timestamp = now.getTime();

  const remaining = eventTimestamp - timestamp;

  const msDay = 1000 * 60 * 60 * 24;
  const msHour = 1000 * 60 * 60;
  const msMin = 1000 * 60;

  const daysLeft = Math.floor(remaining / msDay);
  const hoursLeft = Math.floor((remaining % msDay) / msHour);
  const minsLeft = Math.floor((remaining % msHour) / msMin);
  const secsLeft = Math.floor((remaining % msMin) / 1000);

  document.getElementById("timer").innerHTML = `${daysLeft}d ${hoursLeft}h ${minsLeft}m ${secsLeft}s`;

  if (remaining < 0) {
    clearInterval(dateCheck);
    document.getElementsByClassName("hero__text")[0].innerHTML = "O maior evento de tecnologia do Brasil já começou";
  }
}, 1000);
