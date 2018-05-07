import {incrementSetIndex, incrementCardRarity} from '.'

const common = {rarity: 'common', golden: false}
const rare = {rarity: 'rare', golden: false}
const epic = {rarity: 'epic', golden: false}
const legendary = {rarity: 'legendary', golden: false}
const goldenCommon = {rarity: 'common', golden: true}
const goldenRare = {rarity: 'rare', golden: true}
const goldenEpic = {rarity: 'epic', golden: true}
const goldenLegendary = {rarity: 'legendary', golden: true}

// prettier-ignore
describe('incrementCardRarity', () => {
  it('returns a new pack with one of the cards rarity incremented', () => {
    const pack = [
      common, rare, epic, legendary,
      goldenCommon, goldenRare, goldenEpic, goldenLegendary,
    ]

    expect(incrementCardRarity(pack, 0)).toEqual([
      rare, rare, epic, legendary,
      goldenCommon, goldenRare, goldenEpic, goldenLegendary,
    ])

    expect(incrementCardRarity(pack, 1)).toEqual([
      common, epic, epic, legendary,
      goldenCommon, goldenRare, goldenEpic, goldenLegendary,
    ])

    expect(incrementCardRarity(pack, 2)).toEqual([
      common, rare, legendary, legendary,
      goldenCommon, goldenRare, goldenEpic, goldenLegendary,
    ])

    expect(incrementCardRarity(pack, 3)).toEqual([
      common, rare, epic, goldenCommon,
      goldenCommon, goldenRare, goldenEpic, goldenLegendary,
    ])

    expect(incrementCardRarity(pack, 4)).toEqual([
      common, rare, epic, legendary,
      goldenRare, goldenRare, goldenEpic, goldenLegendary,
    ])

    expect(incrementCardRarity(pack, 5)).toEqual([
      common, rare, epic, legendary,
      goldenCommon, goldenEpic, goldenEpic, goldenLegendary,
    ])

    expect(incrementCardRarity(pack, 6)).toEqual([
      common, rare, epic, legendary,
      goldenCommon, goldenRare, goldenLegendary, goldenLegendary,
    ])

    expect(incrementCardRarity(pack, 7)).toEqual([
      common, rare, epic, legendary,
      goldenCommon, goldenRare, goldenEpic, common,
    ])
  })
})

describe('incrementSet', () => {
  it('returns the next set index (wrapped around)', () => {
    expect(incrementSetIndex(4, 0)).toEqual(1)
    expect(incrementSetIndex(4, 1)).toEqual(2)
    expect(incrementSetIndex(4, 2)).toEqual(3)
    expect(incrementSetIndex(4, 3)).toEqual(0)
  })
})
