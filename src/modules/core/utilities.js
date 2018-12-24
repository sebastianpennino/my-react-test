/**
 * Quick and dirty solution for calculating age base on a date
 * @param {String} dateString - a string with the following format yyyy-mm-dd
 * @param {date} compareDate - a date to compare with the other argument (default current date)
 * @author Kristoffer Dorph
 * @see https://stackoverflow.com/questions/4060004/calculate-age-given-the-birth-date-in-the-format-yyyymmdd
 */
export function calcAge (dateString, compareDate = Date.now()) {
  const birthday = +new Date(dateString)
  return ~~((compareDate - birthday) / (31557600000))
}
