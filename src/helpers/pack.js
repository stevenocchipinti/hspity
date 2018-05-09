const defaultPack = [
  {rarity: 'common', golden: false},
  {rarity: 'common', golden: false},
  {rarity: 'common', golden: false},
  {rarity: 'common', golden: false},
  {rarity: 'rare', golden: false},
]

const incrementSetIndex = (numberOfSets, setIndex) =>
  (setIndex + 1) % numberOfSets

const cardRarities = [
  {rarity: 'common', golden: false},
  {rarity: 'rare', golden: false},
  {rarity: 'epic', golden: false},
  {rarity: 'legendary', golden: false},
  {rarity: 'common', golden: true},
  {rarity: 'rare', golden: true},
  {rarity: 'epic', golden: true},
  {rarity: 'legendary', golden: true},
]

const nextRarity = cardRarity => {
  const currentIndex = cardRarities.findIndex(
    r => r.rarity === cardRarity.rarity && r.golden === cardRarity.golden,
  )
  const newIndex = (currentIndex + 1) % cardRarities.length
  return cardRarities[newIndex]
}

const incrementCardRarity = (pack, index) => [
  ...pack.slice(0, index),
  nextRarity(pack[index]),
  ...pack.slice(index + 1),
]

export {defaultPack, incrementSetIndex, incrementCardRarity}
