const { Product, Purchase } = require('./schema.js');

let query = (item, cb) => {
  let prodInfo = [];
  queryProd(item, (err,res) => {
    if (err) {
      cb(err)
    } else {
      prodInfo.push(res)
      queryPurc(item, (err, res) => {
        if (err) {
          cb(err)
        } else {
          prodInfo.push(res);
          cb(null, prodInfo)
        }
      });
    }
  });
}

let queryProd = (itemNum,cb) => {
  Product.findOne({'item_number':itemNum}, (err,res) => {
    if (err) {
      cb(err)
    } else {
      cb(null,res)
    }
  })
}

let queryPurc = (itemNum,cb) => {
  Purchase.findOne({'item_number': itemNum}, (err,res) => {
      if (err) {
        cb(err)
      } else {
        cb(null,res)
      }
  })
}



module.exports = {
  query,
  queryProd,
  queryPurc
}