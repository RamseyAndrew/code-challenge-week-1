function calculateBodaFare(distanceInKm) {
  const baseFare = 50
  const chargePerKm = 15

  
  const distanceFare = distanceInKm * chargePerKm
  const totalFare = baseFare + distanceFare

  console.log(`Uko kwote? Io ni ${distanceInKm} km:`)
  console.log(`Ukikalia Pikipiki: KES ${baseFare}`)
  console.log(`Mpaka Uko: KES ${distanceFare}`)
  console.log(`Total: KES ${totalFare}`)
  console.log(`\nPanda Pikipiki!`)
}

const inputDistance = prompt("Unafika wapi Mkubwa? Kilometer ngapi?:")
const distance = Number(inputDistance)
calculateBodaFare(distance)