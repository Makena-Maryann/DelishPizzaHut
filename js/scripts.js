//Business logic
function Pizza(size, crust) {
  this.pizzaSize = size;
  this.crustType = crust;
  this.selectedToppings = [];
}

Pizza.prototype.pizzaCost = function () {
  return (
    this.pizzaSize +
    this.crustType +
    this.selectedToppings.reduce(function (topping1, topping2) {
      return topping1 + topping2;
    }, 0)
  );
};

//UI logic
$(document).ready(function () {
  $("input[type='button']").click(function () {
    const sizeOfPizza = parseInt($("input[name='sizes']:checked").val());
    const typeOfCrust = parseInt($("input[ name='crust']:checked").val());

    const newPizza = new Pizza(sizeOfPizza, typeOfCrust);

    $.each($("input[name='toppings']:checked"), function () {
      newPizza.selectedToppings.push(parseInt($(this).val()));
    });
    // alert(newPizza.pizzaCost()); //cost for one pizza

    const pizzaNumber = parseInt($("input[name='quantity']").val());
    pizzaBill = newPizza.pizzaCost() * pizzaNumber;
    alert(pizzaBill);

    $("input[name='sizes']:checked").val("");
    $("input[ name='crust']:checked").val("");
    $("input[ name='toppings']:checked").val("");
  });
});
