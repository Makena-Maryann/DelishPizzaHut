//Business logic
function Pizza(size, crust) {
  this.pizzaSize = size;
  this.crustType = crust;
  this.selectedToppings = [];
}

//UI logic
$(document).ready(function () {
  $("input[type='button']").click(function () {
    const sizeOfPizza = parseInt($("input[name='sizes']:checked").val());
    const typeOfCrust = parseInt($("input[ name='crust']:checked").val());
  });
});
