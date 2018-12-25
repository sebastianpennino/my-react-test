import { calcAge, filterPlayers } from './utilities'

describe('Utility functions module', () => {
  describe('calcAge function', () => {
    it('should calculate the correct amount of time for a one year gap', () => {
      const oneYear = new Date('2000-12-12')
      const rst = calcAge('1999-12-12', oneYear)
      expect(rst).toEqual(1)
    })

    it('should calculate the correct amount of time for less than one year', () => {
      const aFewDays = new Date('2000-01-01')
      const rst = calcAge('1999-12-12', aFewDays)
      expect(rst).toEqual(0)
    })

    it('should calculate the correct amount for a big difference', () => {
      const aLifeTime = new Date('2009-03-31')
      const rst = calcAge('1927-03-12', aLifeTime)
      expect(rst).toEqual(82)
    })

    it('should use the current date as default argument', () => {
      const today = Date.now()
      const compareDate = '1981-08-01'
      const rst1 = calcAge(compareDate)
      const rst2 = calcAge(compareDate, today)
      expect(rst1).toEqual(rst2)
    })
  })

  describe('filterPlayers function', () => {
    let rst, players

    beforeEach(() => {
      rst = null
      players = [
        {
          'dateOfBirth': '1993-05-13',
          'name': 'Romelu Lukaku',
          'nationality': 'Belgium',
          'position': 'Centre-Forward'
        },
        {
          'dateOfBirth': '1990-11-07',
          'name': 'David de Gea',
          'nationality': 'Spain',
          'position': 'Keeper'
        },
        {
          'dateOfBirth': '1987-02-22',
          'name': 'Sergio Romero',
          'nationality': 'Argentina',
          'position': 'Keeper'
        }
      ]
    })

    it('should return an empty array if no arguments are provided', () => {
      rst = filterPlayers()
      expect(rst).toEqual([])
    })

    it('should be able to filter by age', () => {
      const currentAge = calcAge(players[2].dateOfBirth)
      rst = filterPlayers(players, currentAge)
      expect(rst.length).toEqual(1)
      expect(rst[0].name).toEqual(players[2].name)
    })

    it('should be able to filter by name', () => {
      rst = filterPlayers(players, null, 'romel')
      expect(rst.length).toEqual(1)
      expect(rst[0].name).toEqual(players[0].name)
    })

    it('should be able to filter by position', () => {
      rst = filterPlayers(players, null, null, 'Keeper')
      expect(rst.length).toEqual(2)
      expect(rst[0].position).toEqual(players[1].position)
      expect(rst[1].position).toEqual(players[2].position)
      expect(rst[0].name).toEqual(players[1].name)
      expect(rst[1].name).toEqual(players[2].name)
    })
  })
})
