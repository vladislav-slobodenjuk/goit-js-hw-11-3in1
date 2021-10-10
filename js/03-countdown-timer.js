import { timerRefs } from './refs.js';
const { timer, daysMarkup, hoursMarkup, minsMarkup, secsMarkup } = timerRefs;

// const timer = {
//   timer: document.getElementById('timer-1'),
//   daysMarkup: document.querySelector('[data-value="days"]'),
//   hoursMarkup: document.querySelector('[data-value="hours"]'),
//   minsMarkup: document.querySelector('[data-value="mins"]'),
//   secsMarkup: document.querySelector('[data-value="secs"]'),
// };

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector; // не знаю как использовать этот параметр
    this.targetDate = targetDate;
    this.deltaTime = 0;
    this.days; // попробовал присвоить это значение в резметку через функцию
  }
  start() {
    setInterval(() => {
      let currentTime = Date.now();
      this.deltaTime = this.targetDate.getTime() - currentTime;
      // console.log(this.deltaTime);

      this.days = this.pad(Math.floor(this.deltaTime / (1000 * 60 * 60 * 24)));

      const hours = this.pad(
        Math.floor((this.deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      );

      const mins = this.pad(
        Math.floor((this.deltaTime % (1000 * 60 * 60)) / (1000 * 60)),
      );

      const secs = this.pad(Math.floor((this.deltaTime % (1000 * 60)) / 1000));

      console.log(`${this.days}, ${hours}, ${mins}, ${secs}`);

      // daysMarkup.innerText = days;
      hoursMarkup.innerText = hours;
      minsMarkup.innerText = mins;
      secsMarkup.innerText = secs;

      this.insertValues(this.selector);
    }, 1000);
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }

  insertValues(selector) {
    daysMarkup.innerText = this.days;
  }
}

const newTimer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2022'),
});

newTimer.start();
// newTimer.insertValues('#timer-1');
// console.log(newTimer.insertValues());
// console.log(newTimer.targetDate);

// ===========================

/*
 * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
 * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
 */
// const days = Math.floor(time / (1000 * 60 * 60 * 24));

/*
 * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
 * остатка % и делим его на количество миллисекунд в одном часе
 * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
 */
// const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

/*
 * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
 * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
 */
// const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

/*
 * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
 * миллисекунд в одной секунде (1000)
 */
// const secs = Math.floor((time % (1000 * 60)) / 1000);
