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

var addCustomer = (id,name,emailID) => {
    console.log('in add');
     var customers = getCustomers();
    var customer = {id,name,emailID}

    console.log('in add' + id + name + emailID);

     var checkCustomer =  customers.filter((customer) => {
         return customer.emailID === emailID;
     });

     if (checkCustomer.length === 0){
        customers.push(customer);
        saveCustomer(customers);
        return customer
     }

};


var getCustomerDetails = (emailID) => {

    var customers = getCustomers();

    var checkCustomer =  customers.filter((customer) => {
        return customer.emailID === emailID;
    });

    return checkCustomer[0]

};

var log = (customer) => {
    console.log('Customer '+ customer.emailID +' added to json');
};

//update customer in json

// delete customer from json


module.exports = {
    addCustomer, getCustomerDetails
};

