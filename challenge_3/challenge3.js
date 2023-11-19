const cartItems = ['book one' ,'book two', 'book three', 'book four']   
cartItems.shift()       //Remove first item
cartItems.splice(1,1)    //remove third item
cartItems.push("book five")    // add new item
cartItems.forEach(function(item, index){    //show array products
    const num = index +1
    console.log(`${num //+ 1//
}  - your product is : ${item}`)
})