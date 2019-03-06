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

var addCustomer = (id, name, email) => {
    var customers = getCustomers();
    var customer = {id, name, email}

    var checkCustomer =  customers.filter((customer) => {
        return customer.email === email;
    });

    if (checkCustomer.length === 0){
        customers.push(customer);
        saveCustomer(customers);
        return customer
    }

};


var getCustomerDetails = (email) => {

    var customers = getCustomers();

    var checkCustomer =  customers.filter((customer) => {
        return customer.title === title;
    });

    return checkCustomer[0]

};

var log = (customer) => {
    console.log('Customer '+ customer.email +' added to json');
};

//update customer in json

// delete customer from json


module.exports = {
    addCustomer, getCustomerDetails
};

