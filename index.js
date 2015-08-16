var cart = {};

prices = {
  car: .027,
  bus: .018,
  train: .012
};

function addToCart(vehicle) {
  switch (vehicle) {
    case 'car':
      cart.car = {
        miles: parseInt($('#carMiles').val()),
      };
      cart.car.price = cart.car.miles * prices.car;
      $('#carPrice').text('$' + cart.car.price);
      break;
    case 'bus':
      cart.bus = {
        miles: parseInt($('#busMiles').val()),
      };
      cart.bus.price = cart.bus.miles * prices.bus;
      $('#busPrice').text('$' + cart.bus.price);
      break;
    case 'train':
      cart.train = {
        miles: parseInt($('#trainMiles').val()),
      };
      cart.train.price = cart.train.miles * prices.train;
      $('#trainPrice').text('$' + cart.train.price);
      break;
  }
}

function goToCart() {
  var total = Object.keys(cart).reduce(function(p, c) {
    return p + cart[c].price;
  }, 0);
  alert(total);
}
