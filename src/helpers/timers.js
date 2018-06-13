const equalRarity = (card1, card2) =>
  card1.rarity === card2.rarity && card1.golden === card2.golden

const epic = {rarity: 'epic', golden: false}
const legendary = {rarity: 'legendary', golden: false}

const packContainsRarity = (pack, rarity) =>
  pack.find(card => equalRarity(card, rarity)) !== undefined

const addPackToTimers = (timers, pack, set) => {
  const hasLegendary = packContainsRarity(pack, legendary)
  const hasEpic = packContainsRarity(pack, epic)

  return {
    ...timers,
    [set]: {
      legendary: hasLegendary ? 0 : timers[set].legendary + 1,
      epic: hasEpic ? 0 : timers[set].epic + 1,
    },
  }
}

const LEGENDARY_TIMER = 40
const EPIC_TIMER = 10

export {addPackToTimers, LEGENDARY_TIMER, EPIC_TIMER}
