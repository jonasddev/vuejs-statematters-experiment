let state = {
  all: [
    {"id": 1, "title": "iPad 5 Mini", "price": 500.01, "inventory": 2},
    {"id": 2, "title": "H&M T-Shirt White", "price": 10.99, "inventory": 10},
    {"id": 3, "title": "Charli XCX - Sucker CD", "price": 19.99, "inventory": 5}
  ]
}

let mutations = {
  increaseInventory(id) {
    const product = state.all.find(product => product.id === id)
    product.inventory++
  },
  decreaseInventory(id) {
    const product = state.all.find(product => product.id === id)
    product.inventory--
  }
}

export default { state, mutations }
