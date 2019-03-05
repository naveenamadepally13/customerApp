const fs =  require('fs');

var getCustomers = () => {
    try {
        var customers = fs.readFileSync('customers.json')
        return JSON.parse(customers);
    } catch(e){
        return [];
    }
};

var saveCustomer = (customer) => {
    fs.writeFileSync('customers.json',JSON.stringify(customer));
};


// CRUD Operations

// add customer to json

// get customer from json

//update customer in json

// delete customer from json

// fetch list of customers from json

// export all the methods
