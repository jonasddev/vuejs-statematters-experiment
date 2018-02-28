import eventify from '../tools/stateevents'

class Products {
  constructor() {
    this.state = {
      all: [
        {"id": 1, "title": "iPad 5 Mini", "price": 500.01, "inventory": 2},
        {"id": 2, "title": "H&M T-Shirt White", "price": 10.99, "inventory": 10},
        {"id": 3, "title": "Charli XCX - Sucker CD", "price": 19.99, "inventory": 5}
      ]
    }
    console.log( this.state )
  }

  increaseInventory(id) {
    const product = this.state.all.find(product => product.id === id)
    product.inventory++
  }
  decreaseInventory(id) {
    const product = this.state.all.find(product => product.id === id)
    product.inventory--
  }
}

export default eventify(new Products())
