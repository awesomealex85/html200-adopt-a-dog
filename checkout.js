function dogProfile(name, breed, cost) {

  alert("Name: " + name + " Breed: " + breed + " Cost: " + cost);
}

let total = 0;

function toCart(cost) {
  total = cost + total;
  alert('Total Cost: $' + total);
  return total;
}
