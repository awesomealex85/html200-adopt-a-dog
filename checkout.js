// cart calculation
function dogProfile(name, breed, cost) {

  alert("Name: " + name + " Breed: " + breed + " Cost: " + cost);
}

$(document).ready(function(){
  $('form').submit(function(event) {
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

let total = 0;

$('p.adopt').click(function(){
    let dollarAmount = $(this).parent().find('span').text();
    let cost = parseFloat(dollarAmount).toFixed(2);
    total = cost + total;
    alert('Total Cost: $' + total);
    return total;
  console.log(cost);
})

$(function(){
  $("li.border").hover(
        function() { $(this).addClass("Hover"); },
        function() { $(this).removeClass("Hover"); }
    );

  $('li.border').click(function() {
    this.toggle = !this.toggle;
        $(this).stop().fadeTo(400, this.toggle ? 0.4 : 1);
    })
  })
});
