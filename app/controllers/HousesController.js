import { AppState } from "../AppState.js"
import { houseService } from "../services/HouseService.js"
import { getFormData } from "../utils/FormHandler.js"

export class HousesController {

  constructor() {

    AppState.on('houses', this.drawHouseCards)

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

  createHouseListing() {

    event.preventDefault()

    let form = event.target

    const houseData = getFormData(form)

    houseService.newHouse(houseData)


    console.log(houseData)
  }




}
