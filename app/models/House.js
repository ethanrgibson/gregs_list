import { generateId } from "../utils/GenerateId.js";



export class House {
  /**
   * @param {{
   * year: number;
   * bedrooms: number;
   * bathrooms: number;
   * sqft: number;
   * price: number;
   * description: string;
   * imgUrl: string; }} data
   */
  constructor(data) {
    this.id = generateId();
    this.year = data.year;
    this.bedrooms = data.bedrooms;
    this.bathrooms = data.bathrooms;
    this.sqft = data.sqft;
    this.price = data.price;
    this.description = data.description;
    this.imgUrl = data.imgUrl;
  }


  get currencyForPrice() {

    const currency = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(this.price)

    return currency

  }

  get houseCardTemplate() {

    return `

<div class="col-md-12">
          <div class="shadow bg-light d-flex mb-4">
          <div class="p-3 flex-grow-1">
          <h3>Built: ${this.year} / SQFT: ${this.sqft} </h3>
          <div class="d-flex justify-content-between">
          <div>
          <p class="fs-3">${this.currencyForPrice} </p>
          <p class="text-capitalize" >${this.description}.</p>
          <div class="text-start">
          <button onclick="app.housesController.deleteHouseListing('${this.id}')" class="btn btn-outline-danger" type="button">
            Sell House
          </button>
        </div>
          </div>
          <div class="fs-5">
          <p>${this.bedrooms} Bedrooms</p>
          <p>${this.bathrooms} Bathrooms</p>
          </div>
          <img
            src="${this.imgUrl}"
            alt="${this.year} ${this.sqft}" class="car-img">
          </div>
            </div>
          </div>
          
        </div>

`;
  }


}
