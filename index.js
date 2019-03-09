const fs =  require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const customer = require('./customers.js');

const customerID = {
    describe: 'customer_id',
    demand : true,
    alias : 'i'
}

const customerName = {
    describe: 'customer_name',
    demand : true,
    alias : 'n'
}

const customerEmail = {
    describe: 'customer_email',
    demand : true,
    alias : 'e'
}

const argv =  yargs
    .command('add','Add customer to json',{
        id: customerID,
        name: customerName,
        emailID: customerEmail
    })
    .command('list','get all customers list')
    .command('read','get a customer details',{
        emailID: customerEmail
    })
    .command('remove','delete customer from json',{
        emailID: customerEmail
    })
    .command('update','update customer from json',{
        emailID: customerEmail,
        name: customerName
    })
    .command('delete','update customer from json',{
        emailID: customerEmail
    })
    .help()
    .argv;

var command = argv._[0];

if (command === 'add'){
    // console.log('in command');
    var customerAdded = customer.addCustomer(argv.id,argv.name,argv.emailID);
    if (customerAdded){
        console.log(customerAdded);
    } else{

    }
} else if (command === 'read') {
    var customerDetail = customer.getCustomerDetails(argv.emailID);
    if(customerDetail){
        console.log(customerDetail);
    }
    else{
        console.log("Customer details are not present");
    }
} else if (command === 'list') {
    var allCustomers = customer.getCustomers();
    allCustomers.forEach((customer)=>{
        console.log(customer);
    });
}else if (command === 'update') {
    var customerDetail = customer.updateCustomerDetails(argv.emailID, argv.name);
    if(customerDetail){
        console.log(customerDetail);
    }
    else{
        console.log("Customer details are not present");
    }
}else if (command === 'delete') {
    var customerDetail = customer.deleteCustomerDetails(argv.emailID);
    if(customerDetail){
        console.log(customerDetail);
    }
    else{
        console.log("Customer details are not present");
    }
}
else{
    console.log('command note recognized');
}
