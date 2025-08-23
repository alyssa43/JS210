// The processOrder function shown below accepts the following arguments: price, quantity, discount, serviceCharge and tax. Any arguments other than price may be omitted when calling the function, in which case, default values will be assigned.

function processOrder(price, quantity, discount, serviceCharge, tax) {
  if (!quantity) {
    quantity = 1;
  }

  if (!discount) {
    discount = 0;
  }

  if (!serviceCharge) {
    serviceCharge = 0.1;
  }

  if (!tax) {
    tax = 0.15;
  }

  return (price * quantity) * (1 - discount) * (1 + serviceCharge) * (1 + tax);
}

processOrder(100);      // 126.5

// This function uses conditional statements to test whether arguments have been omitted. When an argument is omitted, JavaScript automatically initializes it to a value of undefined. The function takes advantage of this behavior by setting undefined arguments to a default value.

// The following variation of the processOrder function has the same behavior as the first:

function processOrder(price, quantity, discount, serviceCharge, tax) {
  quantity = quantity || 1;
  discount = discount || 0;
  serviceCharge = serviceCharge || 0.1;
  tax = tax || 0.15;

  return (price * quantity) * (1 - discount) * (1 + serviceCharge) * (1 + tax);
}

// However, both of these solutions have a limitation that can lead to an incorrect result for certain inputs. What is this limitation and how does it affect the result?

// The limitation for these solutions would be that if we wanted to include a discount, serviceCharge, or tax - but not quantity (or other leading parameters) as arguments we would either get an incorrect result, or would have to explicitly enter a falsy value in as the argument. For example, say we want to use a tax of `0.10`. If we called `processOrder` like so:
processOrder(100, 0.10);
// This would return the incorrect result because the value `0.10` would be assigned to the `quantity` parameter, instead of the `tax` parameter. For us to do this correctly we would have to call `processOrder` like so:
processOrder(100, false, null, '', 0.10);
// By passing in falsy values as the arguments to the `quantity`, `discount`, and `serviceCharge` parameters, we ensure that those function variables will be correctly reassigned to the correct default value. However, relying on this behavior could be very unreliable and could easily cause unexpected results.

// The other limitation that these solutions have, would be that if we wanted to pass in the value `0` as an argument for `quantity`, `discount`, `serviceCharge`, or `tax` to reference. Because `0` is treated as a falsy value in JavaScript, these conditional assignments will evaluate that as false, and incorrectly assign the function variable to the default value instead of `0`.