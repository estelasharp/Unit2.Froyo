//prompt user for froyo flavors
//build an object to track which flavors you have observed so far
//parse user input into an array of froyo flavors
//make arrays of flavor (when should object be updated)
//orgnize object into a function
//cusomters order: vanilla, vanilla, vanilla, strawberry, coffee, coffee

//prompt user for froyo flavors
const userInputString = prompt("Type your Froyo order below! (Seperate each flavor with commas, Thank You!)",
    "vanilla, strawberry, coffee, chocolate"
  );

//customer order written in prompts: vanilla, vanilla, vanilla, strawberry, coffee, coffee

  const stringArray = userInputString.split(", ");

//parse user input into an array of froyo flavors
const arrayFlavors = ['vanilla', 'strawberry', 'coffee', 'cake batter', 'tart']
for (const element of arrayFlavors) {
    console.log(element);
}

const orders = [];
for (let i = 0; i < stringArray.length; i++) {
  const str = stringArray[i];
  orders.push(str);
}

//build object to track which flavors you have observed so far, oragnize into a function
function ordersTable(orders) {
    const orders_table = {};

    for(i=0; i < orders.length; i++) {
        let order = orders[i];
        if (orders_table[order]) {
            orders_table[order] ++;
        } else {
            orders_table[order] = 1;
        } 
        }
//order from customers order will be organized into a table to be further observed 
    return orders_table;
    }

    let output = ordersTable(orders)

    console.table(output);
    
