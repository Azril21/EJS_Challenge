//------->route.js file

const express = require('express');
const router = express.Router();

  //data
  let data = {
    users:[
      {
        name: "burt lannister",
        age: 56,
        hobbies: ['reading', 'polo']
      },
      {
        name: "tobe nwige",
        age: 27,
        hobbies: ['writing', 'pressing flowers']},
      {
        name: "miguel atwood",
        age: undefined,
        hobbies: ['music', 'mediation']
      },
      {
        name: "hieu ngyen",
        age: 33,
        hobbies: undefined
      },
      {
        name: undefined,
        age: undefined,
        hobbies: undefined
      }
    ]
}

router.get('/',(req, res)=>{
  console.log('')
  res.render("index", data);
});

module.exports = router;
