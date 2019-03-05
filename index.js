const fs =  require('fs');
const lodash = require('lodash');
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

// describe CRUD commands and call respective function from the customers.js
