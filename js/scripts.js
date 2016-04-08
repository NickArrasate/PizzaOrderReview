//business logic
function Pizza(size, ingredients) {
  this.size = size;
  this.ingredients = ingredients;
  this.total = 0;
}

Pizza.prototype.getPrice = function(){
  var ingTotal = 0;
    this.ingredients.forEach(function(ingredient){
       ingTotal = ingTotal += (parseInt(ingredient));
    })
    return parseInt(ingTotal) + this.size;
}
function getIngredients() {
    ingredients = $('.ingPick:checked').map(function() {return this.value;}).get();
    return ingredients;
    };

function getSize(){
  var e = document.getElementById("sizeselect");
   size = e.options[e.selectedIndex].text;

   if (size == 'Small'){
     size = 12;
   } else if (size == 'Medium'){
     size = 14;
   } else if (size == 'Large'){
     size = 16;
   } else if (size == 'XL'){
     size = 18;
   }
  return size;
};


// user interface logic
var size = null;
var ingredients = [];

$(document).ready(function() {
  $("form#pizzaform").submit(function(event) {
    event.preventDefault();
    var ingredients = getIngredients();
    var size = getSize();
    var newPizza = new Pizza(size, ingredients);
    newPizza.total += newPizza.getPrice();
    $('#orderdisplay').show();
    $('#orderprice').text(newPizza.total);
  });

});
