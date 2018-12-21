/**
 * Quick and dirty solution for calculating age base on a date
 * @param {String} dateString - a string with the following format yyyy-mm-dd
 * @author Kristoffer Dorph
 * @see https://stackoverflow.com/questions/4060004/calculate-age-given-the-birth-date-in-the-format-yyyymmdd
 */
export function calcAge (dateString) {
  const birthday = +new Date(dateString)
  return ~~((Date.now() - birthday) / (31557600000))
}
