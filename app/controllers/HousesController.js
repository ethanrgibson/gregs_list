import { AppState } from "../AppState.js"
import { carsService } from "../services/CarsService.js"
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


    // @ts-ignore
    form.reset()

  }


  deleteHouseListing(houseId) {


    console.log('im here, deleting houses')
    const confirm = window.confirm('Sure You Wanna Sell?')

    if (!confirm) {
      return
    }

    houseService.deleteHouse(houseId)


  }

}
