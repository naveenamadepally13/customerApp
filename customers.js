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
    // console.log('in add');
    var customers = getCustomers();
    var customer = {id,name,emailID}

    // console.log('in add' + id + name + emailID);

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
var updateCustomerDetails = (emailID, name) => {

    var customers = getCustomers();
    var updatedCustomer;
    for(var index in customers){
       if(customers[index].emailID === emailID){
           customers[index].name = name;
           updatedCustomer = customers[index];
       }
    }

    fs.writeFileSync('customers.json',JSON.stringify(customers));
    return updatedCustomer;
};
// delete customer from json
var deleteCustomerDetails = (emailID) => {

    var customers = getCustomers();
    for(var index in customers){
        if(customers[index].emailID === emailID){
          delete customers[index];
        }
    }
    var deletedData = customers.filter((customer) => customer);
    fs.writeFileSync('customers.json',JSON.stringify(deletedData));
    return deletedData;
};

module.exports = {
    addCustomer, getCustomerDetails, log, getCustomers, updateCustomerDetails, deleteCustomerDetails
};
