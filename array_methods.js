"use strict"

let cart  = [ 
    {item: "Bread", price: 3.29, quantity: 2}, 
    {item: "Milk", price: 4.09, quantity: 1}, 
    {item: "T-Bone Steak", price: 12.99, quantity: 2}, 
    {item: "Baking Potato", price: 1.89, quantity: 6}, 
    {item: "Iceberg Lettuce", price: 2.06, quantity: 1}, 
    {item: "Ice Cream - Vanilla", price: 6.81, quantity: 1}, 
    {item: "Apples", price: 0.66, quantity: 6} 
    ]; 

 
    
    //this is the forEach method
    
    function onlyItem(justItem){
        console.log(justItem.item);
    }
    cart.forEach(onlyItem);

    //We can use this for loop, but above we are using the foreach() method ^ 
    const nameOfItem = cart.map(onlyItem);
    const numOfItem = nameOfItem.length; 
    for(let i=0; i < numOfItem; i++) {
        console.log(nameOfItem[i]);
    }

    //This is a good example of a reduce() method
    //create a function with two parameters
    function getTotalCost(total, arrayElements){
    //create the equation that you want returned it can also just be one thing
    return total + (arrayElements.price *arrayElements.quantity);
    }
    let totalPriceOfAllItems = cart.reduce(getTotalCost, 0);
    console.log(totalPriceOfAllItems);