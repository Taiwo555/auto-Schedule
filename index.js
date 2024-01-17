const cron = require('node-cron');

let count = 1;

cron.schedule('* * * * * ', () =>
    console.log('node-cron scheduled this. This has run ' + count++ + ' times'),
);


// # ┌────────────── second (optional)
// # │ ┌──────────── minute
// # │ │ ┌────────── hour
// # │ │ │ ┌──────── day of month
// # │ │ │ │ ┌────── month
// # │ │ │ │ │ ┌──── day of week
// # │ │ │ │ │ │
// # │ │ │ │ │ │
// # * * * * * *
