
function estimateTransactionFee(amountToSend) {
  const feePercentage = 0.015
  const minFee = 10
  const maxFee = 70


  let fee = amountToSend * feePercentage


  if (fee < minFee) {
    fee = minFee
  } else if (fee > maxFee) {
    fee = maxFee
  }


  const total = amountToSend + fee

  console.log(`Sending KES ${amountToSend}:`)
  console.log(`Calculated Transaction Fee: KES ${fee}`)
  console.log(`Total amount to be debited: KES ${total}`)
  console.log(`\nSend Money Securely!`)
}


const inputAmount = prompt("Unatuma Ngapi? (KES):")
const amount = Number(inputAmount)
estimateTransactionFee(amount)