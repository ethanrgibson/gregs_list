import { AppState } from "../AppState.js"
import { House } from "../models/House.js"

class HouseService {

  newHouse(houseData) {

    const newHouse = new House(houseData)

    console.log('new house data after new object', newHouse)

    const house = AppState.houses

    house.push(newHouse)

  }




}







export const houseService = new HouseService()