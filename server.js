const express = require('express');
const app = express();
const moment = require('moment');

app.get("/:time", (req, res) => {
  let date = { unix: null, natural: null };
  
  let time = req.params.time;
  
  if(isNaN(time)) {
    let momentTime = moment(time);
    if(momentTime.isValid()) {
      date.natural = time;
      date.unix = momentTime.unix();
    }
    
  } else {
    let momentTime = moment.unix(time);
    date.unix = parseInt(time);
    date.natural = moment.unix(time).format('MMMM D, YYYY');
  }
  res.json(date);
  
  //{ "unix": 1450137600, "natural": "December 15, 2015" }
});
console.log(moment('25 december 2018').unix());
const listener = app.listen(process.env.PORT, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});

