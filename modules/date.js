/* eslint-disable import/no-unresolved */
import { DateTime } from '../../node_modules/luxon/src/luxon.js';

export default class DateDisplay {
  constructor(outputSelector) {
    this.output = document.querySelector(outputSelector);
  }

  displayDate() {
    const currentDate = DateTime.now();
    this.output.innerText = `${currentDate.toLocaleString(DateTime.DATE_FULL)}, ${currentDate.toLocaleString(DateTime.TIME_WITH_SECONDS)}`;
  }
}
