export const GET_PLAYERS_URL = 'https://football-players-b31f2.firebaseio.com/.json'

// IN CASE some day the service stops running, here's a static version of the json response:
// const RAW_DATA = {"players":{"0":{"contractUntil":"2022-06-30","dateOfBirth":"1993-05-13","jerseyNumber":9,"name":"Romelu Lukaku","nationality":"Belgium","position":"Centre-Forward"},"1":{"contractUntil":"2019-06-30","dateOfBirth":"1990-11-07","jerseyNumber":1,"name":"David de Gea","nationality":"Spain","position":"Keeper"},"2":{"contractUntil":"2021-06-30","dateOfBirth":"1987-02-22","jerseyNumber":20,"name":"Sergio Romero","nationality":"Argentina","position":"Keeper"},"3":{"contractUntil":"2020-06-30","dateOfBirth":"1994-04-12","jerseyNumber":3,"name":"Eric Bailly","nationality":"Cote d'Ivoire","position":"Centre-Back"},"4":{"contractUntil":"2019-06-30","dateOfBirth":"1989-11-22","jerseyNumber":12,"name":"Chris Smalling","nationality":"England","position":"Centre-Back"},"5":{"contractUntil":"2019-06-30","dateOfBirth":"1990-03-20","jerseyNumber":5,"name":"Marcos Rojo","nationality":"Argentina","position":"Centre-Back"},"6":{"contractUntil":"2019-06-30","dateOfBirth":"1992-02-21","jerseyNumber":4,"name":"Phil Jones","nationality":"England","position":"Centre-Back"},"7":{"contractUntil":"2019-06-30","dateOfBirth":"1990-03-09","jerseyNumber":17,"name":"Daley Blind","nationality":"Netherlands","position":"Left-Back"},"8":{"contractUntil":"2018-06-30","dateOfBirth":"1995-07-12","jerseyNumber":23,"name":"Luke Shaw","nationality":"England","position":"Left-Back"},"9":{"contractUntil":"2019-06-30","dateOfBirth":"1989-12-02","jerseyNumber":36,"name":"Matteo Darmian","nationality":"Italy","position":"Right-Back"},"10":{"contractUntil":"2019-06-30","dateOfBirth":"1985-08-04","jerseyNumber":25,"name":"Antonio Valencia","nationality":"Ecuador","position":"Right-Back"},"11":{"contractUntil":"2018-06-30","dateOfBirth":"1981-07-28","jerseyNumber":16,"name":"Michael Carrick","nationality":"England","position":"Defensive Midfield"},"12":{"contractUntil":"2021-06-30","dateOfBirth":"1993-03-15","jerseyNumber":6,"name":"Paul Pogba","nationality":"France","position":"Central Midfield"},"13":{"contractUntil":"2019-06-30","dateOfBirth":"1989-08-14","jerseyNumber":21,"name":"Ander Herrera","nationality":"Spain","position":"Central Midfield"},"14":{"contractUntil":"2018-06-30","dateOfBirth":"1987-11-22","jerseyNumber":27,"name":"Marouane Fellaini","nationality":"Belgium","position":"Central Midfield"},"15":{"contractUntil":"2018-06-30","dateOfBirth":"1985-07-09","jerseyNumber":18,"name":"Ashley Young","nationality":"England","position":"Left Midfield"},"16":{"contractUntil":"2019-06-30","dateOfBirth":"1988-04-28","jerseyNumber":8,"name":"Juan Mata","nationality":"Spain","position":"Attacking Midfield"},"17":{"contractUntil":"2021-06-30","dateOfBirth":"1992-12-15","jerseyNumber":14,"name":"Jesse Lingard","nationality":"England","position":"Left Wing"},"18":{"contractUntil":"2019-06-30","dateOfBirth":"1995-12-05","jerseyNumber":11,"name":"Anthony Martial","nationality":"France","position":"Left Wing"},"19":{"contractUntil":"2018-06-30","dateOfBirth":"1981-10-03","jerseyNumber":10,"name":"Zlatan Ibrahimovic","nationality":"Sweden","position":"Centre-Forward"},"20":{"contractUntil":"2020-06-30","dateOfBirth":"1997-10-31","jerseyNumber":19,"name":"Marcus Rashford","nationality":"England","position":"Centre-Forward"},"21":{"contractUntil":"2022-06-30","dateOfBirth":"1988-12-19","jerseyNumber":7,"name":"Alexis Sánchez","nationality":"Chile","position":"Left Wing"},"22":{"contractUntil":"2020-06-30","dateOfBirth":"1988-08-01","jerseyNumber":31,"name":"Nemanja Matic","nationality":"Serbia","position":"Defensive Midfield"},"23":{"contractUntil":"2021-06-30","dateOfBirth":"1994-07-17","jerseyNumber":2,"name":"Victor Lindelöf","nationality":"Sweden","position":"Centre-Back"},"24":{"contractUntil":"2021-06-30","dateOfBirth":"1996-06-28","jerseyNumber":40,"name":"Joel Pereira","nationality":"Portugal","position":"Keeper"},"25":{"contractUntil":"2020-06-30","dateOfBirth":"1997-02-02","jerseyNumber":43,"name":"Cameron Borthwick-Jackson","nationality":"England","position":"Left-Back"},"26":{"contractUntil":"2021-06-30","dateOfBirth":"1996-12-08","jerseyNumber":39,"name":"Scott McTominay","nationality":"Scotland","position":"Attacking Midfield"},"-MaWOm4RihfAgk8SbJER":{"password":"V5LEh7v7G5y8sByz","username":"prueba_user"},"-MaYjTKztKNfqcXs4QNG":{"payload":{"password":"V5LEh7v7G5y8sByz","username":"prueba_user"},"type":"LOGIN_START"},"-MaYjcmztVPlGbPZciYI":{"password":"V5LEh7v7G5y8sByz","username":"prueba_user"}}}

// TODO: Remove this from the final version (Used for testing/prototyping)
export const GET_USERS_URL = 'https://jsonplaceholder.typicode.com/users'

export const VALID_POSITIONS = [
  { val: 'AM', name: 'Attacking Midfield' },
  { val: 'CM', name: 'Central Midfield' },
  { val: 'CB', name: 'Centre-Back' },
  { val: 'CF', name: 'Centre-Forward' },
  { val: 'DM', name: 'Defensive Midfield' },
  { val: 'GK', name: 'Keeper' },
  { val: 'LM', name: 'Left Midfield' },
  { val: 'LW', name: 'Left Wing' },
  { val: 'LB', name: 'Left-Back' },
  { val: 'RB', name: 'Right-Back' }
]

export const HEADERS = [
  'Player', 'Position', 'Nationality', 'Age'
]
