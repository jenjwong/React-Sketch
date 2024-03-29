var items = []

var notifyComponents = function() {
  $(ListStore).trigger('storeHasChanged')
}

var findItemById = function(id) {
  return items.filter(function(item) {
    return item.id === id
  })[0]
},

ListStore = {

  getItems: function() {
    return items
  },

  loadItems: function(listName) {
  var loadRequest = $.ajax({
    type: 'GET',
    url: "https://listalous.herokuapp.com/lists/" + listName + "/"
  })

  loadRequest.done(function(dataFromServer) {
  items = dataFromServer.items
  notifyComponents()
})
},

  addItem: function(itemDescription) {
  var creationRequest = $.ajax({
    type: 'POST',
    url: "http://listalous.herokuapp.com/lists/b-champion/items",
    data: { description: itemDescription, completed: false }
  })

creationRequest.done(function(itemDataFromServer) {
  items.push(itemDataFromServer)
  notifyComponents()
})

},
  toggleCompleteness: function(itemId) {
    updateRequest.done(function(itemData) {
  item.completed = itemData.completed
  notifyComponents()
})
  }


}




