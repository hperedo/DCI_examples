import moment from 'moment';

export default function countdown(date) {
  let endDate = moment(date);
  let duration = moment.duration(endDate - moment.now());
  console.log(duration);
  //   console.log(Math.trunc(duration.asDays()));
  //   console.log(duration.hours());

  let time = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  setInterval(() => {
    duration = moment.duration(duration - 1000, 'milliseconds');
    time.days = Math.trunc(duration.asDays());
    time.hours = duration.hours();
    time.minutes = duration.minutes();
    time.seconds = duration.seconds();
    render();
  }, 1000);

  function render() {
    document.querySelector('.days').innerText = `${time.days} days`;
    document.querySelector('.hours').innerText = `${time.hours} hours`;
    document.querySelector('.minutes').innerText = `${time.minutes} minutes`;
    document.querySelector('.seconds').innerText = `${time.seconds} seconds`;
  }
}
