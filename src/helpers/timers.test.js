import {addPackToTimers} from './timers'

const common = {rarity: 'common', golden: false}
const rare = {rarity: 'rare', golden: false}
const epic = {rarity: 'epic', golden: false}
const legendary = {rarity: 'legendary', golden: false}
const goldenCommon = {rarity: 'common', golden: true}
const goldenRare = {rarity: 'rare', golden: true}
const goldenEpic = {rarity: 'epic', golden: true}
const goldenLegendary = {rarity: 'legendary', golden: true}

const set = 'classic'
const timers = {
  classic: {legendary: 2, epic: 2},
  someOtherSet: {legendary: 9, epic: 9},
}

describe('addPackToTimers', () => {
  describe('when no new epic or legendary is opened', () => {
    const pack = [common, common, common, common, rare]

    it('increments the epic and legendary count', () => {
      expect(addPackToTimers(timers, pack, set)).toEqual({
        classic: {legendary: 3, epic: 3},
        someOtherSet: {legendary: 9, epic: 9},
      })
    })
  })

  describe('when a new epic is opened', () => {
    const pack = [epic, common, common, common, rare]

    it('resets the epic count and increments the legendary count', () => {
      expect(addPackToTimers(timers, pack, set)).toEqual({
        classic: {legendary: 3, epic: 0},
        someOtherSet: {legendary: 9, epic: 9},
      })
    })
  })

  describe('when a new legendary is opened', () => {
    const pack = [legendary, common, common, common, rare]

    it('resets the legendary count and increments the epic count', () => {
      expect(addPackToTimers(timers, pack, set)).toEqual({
        classic: {legendary: 0, epic: 3},
        someOtherSet: {legendary: 9, epic: 9},
      })
    })
  })
})
