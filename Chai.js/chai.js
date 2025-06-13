function calculateChaiIngredients(numberOfCups) {
  const waterPerCup = 200
  const milkPerCup = 50
  const teaLeavesPerCup = 1
  const sugarPerCup = 2;  

  const totalWater = numberOfCups * waterPerCup
  const totalMilk = numberOfCups * milkPerCup
  const totalTeaLeaves = numberOfCups * teaLeavesPerCup
  const totalSugar = numberOfCups * sugarPerCup

  console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need:`)
  console.log(`Water: ${totalWater} ml`)
  console.log(`Milk: ${totalMilk} ml`);
  console.log(`Tea Leaves (Majani): ${totalTeaLeaves} tablespoons`)
  console.log(`Sugar (Sukari): ${totalSugar} teaspoons`)
  console.log(`Enjoy your Chai Bora!`)
}

const inputCups = prompt("Karibu! How many cups of Chai Bora would you like to make?")
const cups = Number(inputCups)
calculateChaiIngredients(cups)
