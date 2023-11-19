const cartItems = [
  {
    title: "Tomato",
    price: 1000,
  },
  {
    title: "Potato",
    price: 2000,
  },
  {
    title: "cherries",
    price: 1200,
  },
  {
    title: "onion",
    price: 3000,
  },
  {
    title: "Banana",
    price: 4000,
  },
  {
    title: "Carrot",
    price: 1100,
  },
];

const DeleteProduct = function (ProductArray, productName) {
  const index = ProductArray.findIndex(function (item) {
    return item.title.toLowerCase() === productName.toLowerCase();
  });
  if (index != -1) {
    //or > -1
    ProductArray.splice(index, 1);
    console.log(
      ` ${productName} deleted from cart  
 - Cart updated: `,
      ProductArray
    );
  } else {
    console.log("the item not found");
  }
};

DeleteProduct(cartItems, "potato");   
