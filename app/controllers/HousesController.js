import { AppState } from "../AppState.js"

export class HousesController {

  constructor() {
    console.log("live from house controller")


    this.drawHouseCards()
  }


  drawHouseCards() {

    const houses = AppState.houses

    let houseCardContent = ''

    houses.forEach(house => houseCardContent += house.houseCardTemplate)

    const houseCardElem = document.getElementById('houseCards')
    houseCardElem.innerHTML = houseCardContent

  }





}
