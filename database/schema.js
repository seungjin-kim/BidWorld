const mongoose = require('mongoose');
const Promise = require('bluebird');
const mongoUrl = 'mongodb://localhost/description'
// const mongoUrl = 'mongodb://heroku_qhjxpdbf:l6njg5kbf03bb31cla3so4u4tc@ds257698.mlab.com:57698/heroku_qhjxpdbf'

var connectWithRetry = function() {
  let count = 0;
  return mongoose.connect(mongoUrl,{useUnifiedTopology: true, useNewUrlParser: true}, function(err){
    if (err) {
      console.log('Failed mongo connect startup retry in 5 sec', err);
      if (count <= 5) {
        setTimeout(connectWithRetry,5000);
        count++
      }
    }
  })
}
connectWithRetry();
// mongoose.connect('mongodb://mongo:27017/description', {useUnifiedTopology: true, useNewUrlParser: true}).catch(err => console.log(err))

var Schema = mongoose.Schema;

var description = new Schema({
  item_number: Number,
  list_date: Date,
  item_spec: {
    condition: String,
    brand: String,
    type: String,
    packaging: String,
    material: String,
    rec_age: String,
    char_family: String,
    manfactured: String,
    era: String,
    year: Number,
    size: Number,
    upc: Number
  },
  seller_msg: {
    prod_des: String,
    item_des: String,
    img_url: String
  }
})

var ship_pay = new Schema ({
  item_number: Number,
  ship_handling: {
    item_location: String,
    ship_to: String,
    ship_excludes: String,
    qty: Number
  },
  shipping_cost: {
    price: Number,
    region:String,
    service: String,
    est_time: Date
  },
  return_policy: {
    exist: Boolean,
    deadline: Number,
    type: String,
    pay_shipping: String
  }
});

var Product = mongoose.model('Product', description);
var Purchase = mongoose.model('Purchase', ship_pay);

module.exports = {
  Product,
  Purchase
}