"use strict"

//This is a map() example:
let kidssssss = [ 
    { first : "Natalie", last : "Plyers" }, 
    { first: "Brittany", last: "Ray" }, 
    { first: "Zachary", last: "Westly" } 
    ]; 
    function buildFullName(arrayElement) { 
    return arrayElement.first + " " + arrayElement.last; 
    } 
    let namesList = kidssssss.map(buildFullName); 
    let numElements = namesList.length; 
    for (let i = 0; i < numElements; i++) { 
    console.log(namesList[i]); 
    // output matches image above 
    }

    //This is another map() example: 
    let kidsss = [ 
        { first : "Natalie", last : "Plyers" }, 
        { first: "Brittany", last: "Ray" }, 
        { first: "Zachary", last: "Westly" } 
        ]; 
        function buildFullName(arrayElement) { 
        return arrayElement.first + " " + arrayElement.last; 
        } 
        function displayName(arrayElement) { 
        console.log(arrayElement); 
        } 
        let namesLists = kidsss.map(buildFullName); 
        namesLists.forEach(displayName);



let kids = [ 
    { first : "Natalie", last : "Plyers" }, 
    { first: "Brittany", last: "Ray" }, 
    { first: "Zachary", last: "Westly" } 
    ]; 
    function displayKid(arrayElement) { 
    console.log(arrayElement.first + " " + arrayElement.last); 
    } 
    kids.forEach(displayKid); 

    //This is a reducer() example
    let numbers = [300, 150, 25]; 
    function getSum(currentTotal, arrayValue) { 
    // adds the array value to the accumulated total 
    return currentTotal + arrayValue; 
    } 
    let sums = numbers.reduce(getSum, 0); 
    // sum contains 475

    let purchasedOptions  = [ 
        {item: "A/C", price: 1019.00}, 
        {item: "Sunroof", price: 699.99}, 
        {item: "AM/FM Stereo w/ cassette player", price: 199.00} 
        ]; 
        function getTotalCost(currentTotal, arrayElement) { 
        return currentTotal + arrayElement.price; 
        } 
        let sum = purchasedOptions.reduce(getTotalCost, 0); 
        // sum contains 1917.99 
        console.log(sum);

    let ticketPackage  = [ 
            {ticketType: "Senior", price: 49.99, numTickets: 1}, 
            {ticketType: "Adult", price: 79.99, numTickets: 2}, 
            {ticketType: "Child", price: 29.99,  numTickets: 3} 
            ]; 
            function getTotalCost(currentTotal, arrayElement) { 
            return currentTotal +  
            (arrayElement.price * arrayElement.numTickets); 
            } 
            let sumss = ticketPackage.reduce(getTotalCost, 0); 
            // sum contains 299.94 
            console.log(sumss);

    //This is an example of a sort() method: 
    let kidss = ["Natalie", "Brittany", "Zachary"]; 
    kidss.sort();   
    // Sorts the array 
    let numKids = kidss.length; 
    for(let i = 0; i < numKids; i++) { 
    console.log(kidss[i]); 
    } 

    //This is an example of a sort() method using numbers: 
    function compareAscendingNumber(a, b) { 
        if (a < b) return -1;         
        else if (a == b) return 0;    
        else return 1;                
        } 
        let numberss = [3, 27, 400, 1, 111, 5]; 
        numberss.sort(compareAscendingNumber); 
        console.log(numberss);

    //This is an example of a sort() method using numbers and an anonomys function: 
        let numbersss = [3, 27, 400, 1, 111, 5]; 
        numbersss.sort(function(a, b){ 
        if (a < b) return -1; 
        else if (a == b) return 0; 
        else return 1; 
        }); 
        console.log(numbersss); 

    //This is another way of sorting the numbers:
    function compareAscendingNumber(a, b) { 
        // if a is smaller, a-b is negative so don't swap! 
        return a - b; 
        } 
        let numberssss = [3, 27, 400, 1, 111, 5]; 
        numberssss.sort(compareAscendingNumber); 
        console.log(numberssss);

    //and if you want to reverse them switch a - b to b - a:
    function compareAscendingNumber(a, b) { 
        // if a is smaller, a-b is negative so don't swap! 
        return b - a; 
        } 
        let numbersssss = [3, 27, 400, 1, 111, 5]; 
        numbersssss.sort(compareAscendingNumber); 
        console.log(numbersssss);

    //This is a more complicated examples using a lot of these:
    let products = [ 
        {prodId: 2, item: "Notepads (12 pk)", price: 12.29}, 
        {prodId: 12, item: "Black Pens (12 pk)", price: 5.70}, 
        {prodId: 22, item: "Stapler", price: 12.79} 
    ]; 
     
    products.sort(function(a, b){ 
         if (a.item < b.item) return -1; 
         else if (a.item == b.item) return 0; 
         else return 1; 
    }); 
     
    let numProducts = products.length; 
    for(let i = 0; i < numProducts; i++) { 
       console.log(products[i].item +  
                   " $" + products[i].price.toFixed(2)); 
    }