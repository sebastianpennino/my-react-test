export const GET_PLAYERS = 'https://football-players-b31f2.firebaseio.com/.json'

// TODO: Remove this from the final version (Used for testing/prototyping)
export const GET_USERS = 'https://jsonplaceholder.typicode.com/users'

// TODO: Remove this from the final version (Used for testing/prototyping)
export const PLAYERS = [
  {team: 'Barcelona', age: 30, position: 'Forward', name: 'Lionel Messi'},
  {team: 'Barcelona', age: 35, position: 'Defender', name: 'Javier Mascherano'},
  {team: 'Real Madrid', age: 30, position: 'Forward', name: 'Cristiano Ronaldo'},
  {team: 'Real Madrid', age: 22, position: 'Defensive Midfield', name: 'Sergio Reguilón'},
  {team: 'Real Madrid', age: 22, position: 'Central Midfield', name: 'Dani Ceballos'},
  {team: 'Atlético Madrid', age: 23, position: 'Forward', name: 'Ángel Correa'}
]

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
