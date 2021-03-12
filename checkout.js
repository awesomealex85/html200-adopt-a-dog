// cart calculation
function dogProfile(name, breed, cost) {

  alert("Name: " + name + " Breed: " + breed + " Cost: " + cost);
}

let total = 0;

function toCart(cost) {
  total = cost + total;
  alert('Total Cost: $' + total);
  return total;
}
// const form = document.querySelector('form');

// let formInput = [];

document.addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Thank you. The form information has been received');

  let form = document.querySelector('form');
  let text = "";
  let i;
  for (i = 0; i < form.length ; i++) {
    text += form.elements[i].value + " ";

  }
  console.log(text);

});
