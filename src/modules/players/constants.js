export const GET_PLAYERS_URL = 'https://football-players-b31f2.firebaseio.com/.json'

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
