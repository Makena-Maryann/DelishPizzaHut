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

function resetFields() {
  $("input[name='sizes']:checked").val("");
  $("input[ name='crust']:checked").val("");
  $("input[name='toppings']:checked").val("");
  $("input[name='quantity']").val("");
  $("input[name='deliveries']").val("");
  $("input[name='delivery']").val("");
}

//UI logic
$(document).ready(function () {
  $(".accept").click(function () {
    $(".location").show();
  });

  $("input[type='button']").click(function () {
    const sizeOfPizza = parseInt($("input[name='sizes']:checked").val());
    const typeOfCrust = parseInt($("input[ name='crust']:checked").val());

    const newPizza = new Pizza(sizeOfPizza, typeOfCrust);

    $.each($("input[name='toppings']:checked"), function () {
      newPizza.selectedToppings.push(parseInt($(this).val()));
    });

    const pizzaNumber = parseInt($("input[name='quantity']").val());
    let pizzaBill = newPizza.pizzaCost() * pizzaNumber;

    let delivery = parseInt($("input[name='deliveries']").val());
    let totalCost = pizzaBill + delivery;

    $("p#charges").append("Your Bill is " + totalCost + ".");

    let deliveryPlace = $("input[name='delivery']").val();
    if (deliveryPlace != 0) {
      $("p#place").append(
        "Your Pizza will be delivered at " + deliveryPlace + "."
      );
    } else {
      alert("Please enter the delivery place.");
    }

    resetFields();
  });
});
