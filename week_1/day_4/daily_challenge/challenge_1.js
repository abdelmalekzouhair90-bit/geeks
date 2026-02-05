let client = "John";

const groceries = {
    fruits: ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice: "20$",
    other: {
        paid: true,
        meansOfPayment: ["cash", "creditCard"]
    }
};

const displayGroceries = () => {
    groceries.fruits.forEach(fruit => {
        console.log(fruit);
    });
};

const cloneGroceries = () => {
    let user = client;         
    
    client = "Betty";           
    
    console.log("client:", client);   
    console.log("user:", user);      
   

    let shopping = groceries;   
    
   
    shopping.totalPrice = "35$";
    
    console.log("groceries.totalPrice:", groceries.totalPrice);   
    console.log("shopping.totalPrice:", shopping.totalPrice);     
  


    
    shopping.other.paid = false;
    
    console.log("groceries.other.paid:", groceries.other.paid);   
    console.log("shopping.other.paid:", shopping.other.paid);     
  
};


cloneGroceries();
