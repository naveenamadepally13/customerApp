const fs =  require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const customer = require('./customers.js');

const customerID = {
    describe: 'customer_id',
    demand : true,
    alias : 'id'
}

const customerName = {
    describe: 'customer_name',
    demand : true,
    alias : 'name'
}

const customerEmail = {
    describe: 'customer_email',
    demand : true,
    alias : 'email'
}

const argv =  yargs

    .command('add','Add customer to json',{
        id: customerID,
        name: customerName,
        email: customerEmail
    })
    .command('list','get all customers list')
    .command('read','get a customer details',{
        email: customerEmail
    })
    .command('remove','delete customer from json',{
        email: customerEmail
    })
    .help()
    .argv;

var command = argv._[0];

if (command === 'add'){
    var customerAdded = customer.addCustomer(argv.id,argv.name,argv.email);
    if (customerAdded){
        customer.log(customerAdded);
    } else{

    }
}
