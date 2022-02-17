/**
 * Quick and dirty solution for calculating age base on a date
 * @param {String} dateString - a string with the following format yyyy-mm-dd
 * @param {date} compareDate - a date to compare with the other argument (default current date)
 * @author Kristoffer Dorph
 * @see https://stackoverflow.com/questions/4060004/calculate-age-given-the-birth-date-in-the-format-yyyymmdd
 */
export function calcAge(dateString, compareDate = Date.now()) {
  const baseDate = +new Date(dateString);
  return ~~((compareDate - baseDate) / 31557600000);
}

/**
 * Transforms the response players object see below
 * data : {
 *  players: {
 *    0: { contractUntil: "2022-06-30"
 *          dateOfBirth: "1993-05-13"
 *          jerseyNumber: 9
 *          name: "Romelu Lukaku"
 *          nationality: "Belgium"
 *          position: "Centre-Forward"
 *       }
 *   ...
 *   }
 * }
 *
 * into a proper array
 */
export function formatPlayersResponse(players) {
  if (typeof players === "object" && !Array.isArray(players)) {
    return Object.keys(players).map(function(k) {
      return players[k];
    });
  }
  return players;
}

/*
  Remove unnecesary data from the response (ie {password: 'V5LEh7v7G5y8sByz', username: 'prueba_user'})
*/
export function cleaPlayersResponse(players) {
  return players.filter((player) => {
    const validations = {
      contractUntil: "string",
      dateOfBirth: "string",
      jerseyNumber: "number",
      name: "string",
      nationality: "string",
      position: "string",
    };

    let i = 0;
    let result = [];

    for (let k in player) {
      result[i] = typeof player[k] === validations[k];
      i++;
    }

    return result.every((check) => check === true);
  });
}

/**
 * Filters an array of players based on several criteria
 * @param {Array<Players>} players the array of players to be filtered
 * @param {String} age the age of the player(s) to find
 * @param {String} name the name of the player(s) to find
 * @param {String} position the position of the player(s) to find
 * @returns {Array} a new array with the filtered results
 */
export function filterPlayers(players = [], age, name, position) {
  const filtered = players.filter((player) => {
    return (
      (age && calcAge(player.dateOfBirth) === parseInt(age, 10)) ||
      (name &&
        player.name.toLocaleLowerCase().indexOf(name.toLocaleLowerCase()) !==
          -1) ||
      (position && player.position === position)
    );
  });
  return filtered.length > 0 ? filtered : players;
}
