const faker = require('faker');
const { Product, Purchase } = require('./database/schema.js');

let seed = () => {
  let clear = dropdb()
  let random = randomProduct()
  let data = [];
  let transaction = [];
  for(let i =1; i <= 15; i++) {
    let imgNum = Math.floor(Math.random() * 10)
    if (i === 1) {
      let currProd = {
        item_number: i,
        list_date: "Oct 21, 2019 07:38:38 PDT",
        item_Spec: {
          condition: "New: A brand new unused, unopend, undamaged item (including handmade items).",
          brand: "Star Wars",
          type: "",
          packaging: "",
          material: "",
          rec_age: "Adult,Child,Teen",
          char_family: "",
          manfactured: "",
          era: "",
          year: 2015,
          size: "",
          Main_Category: "Games & Toys-Plush Toys",
          upc: 882041003253
        },
        seller_msg: {
          prod_des: "This 24 talking re-creation of the best Wookie ever will blow your mind even though he has a tiny face. Almost the same size of a small child, you will spend hours cuddling with him and pressing his belly to make him growl. Exciting gift or addition to your Star Wars collection. His spoken phrase is the trademark Wookie Growl. Chewbacca is the perfect gift for any fan who's ever wanted a furry co-pilot of their own. Add this furry 24 inch Chewie to your collection today. Recommended for ages 3+.",
          item_des: "Star Wars 24 inch Talking Plush - Chewbacca",
          img_url: `https://rpt16quarks.s3-us-west-2.amazonaws.com/chewy.jpg`
        }
      }
      data.push(currProd)

      let currtran = {
        item_number: i,
        ship_handling: {
          item_location: "Addison, Illinois, United States",
          ship_to: "United States, Europe, Asia, Canada, Australia, South Africa, Bahamas, Mexico, New Zealand, Chile, Colombia, Costa Rica, Dominican Republic, Panama, Trinidad and Tobago, Guatemala, El Salvador, Honduras, Jamaica, Antigua and Barbuda, Aruba, Belize, Dominica, Grenada, Saint Kitts-Nevis, Saint Lucia, Montserrat, Turks and Caicos Islands, Barbados, Bermuda, Bolivia, Ecuador, Egypt, French Guiana, Guadeloupe, Cayman Islands, Martinique, Nicaragua, Peru, Paraguay, Reunion, Uruguay",
          ship_excludes: "Pakistan, Cambodia, Indonesia, Malaysia, Philippines, Singapore, Thailand, Vietnam, Algeria, Morocco, Nigeria, Somalia, Tunisia, Bahrain, Iraq, Kuwait, Lebanon",
          qty: 10
        },
        shipping_cost: {
          price: "Free shipping",
          region:"United States",
          service: "Standard Shipping",
          est_time: "On or before Mon. Dec. 23"
        },
        exist: true,
        deadline: 30,
        type: "Money back",
        pay_shipping: "Seller pays for return shipping"
      }

      transaction.push(currtran)

    } else {
      let currProd = {
        item_number: i,
        list_date: faker.date.recent(),
        item_Spec: {
          condition: faker.lorem.word(),
          brand: random[0],
          type: random[1],
          packaging: random[2],
          material: random[3],
          rec_age: random[4],
          char_family: random[5],
          manfactured: random[6],
          era: random[7],
          year: random[8],
          size: random[9],
          upc: random[10]
        },
        seller_msg: {
          prod_des: faker.lorem.paragraphs(),
          item_des: faker.lorem.sentence(),
          img_url: `https://rpt16quarks.s3-us-west-2.amazonaws.com/${imgNum}.jpg`
        }
      }
      data.push(currProd)

      let currtran = {
        item_number: i,
        ship_handling: {
          item_location: faker.address.state(),
          ship_to: faker.address.country(),
          ship_excludes: faker.address.country(),
          qty: faker.random.number()
        },
        shipping_cost: {
          price: faker.commerce.price(),
          region:faker.address.country(),
          service: faker.lorem.words(),
          est_time: faker.date.future()
        },
        exist: faker.random.boolean(),
        deadline: faker.random.number(),
        type: faker.lorem.words(),
        pay_shipping: faker.lorem.words()
      }
      transaction.push(currtran)
    }
  }
  addDocuments(data,Product)
  addDocuments(transaction, Purchase)
}

let addDocuments = (array,mod) => {
  mod.collection.insertMany(array, (err,docs) => {
    if (err) {
      return console.log(err)
    } else {
      console.log('Multiple documents added to collection')
    }
  })
}

let dropdb = () => {
  Product.collection.drop()
    .then(res => console.log(res))
    .catch(err => console.log(err))

    Purchase.collection.drop()
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

let randomProduct = () => {
  let array = [];
  for (let i = 0; i <= 10; i++) {
    let exist = Math.floor(Math.random() * 2)
    if (exist) {
      if (i <= 7 ) {
        let str = faker.lorem.words();
        array.push(str)
      } else {
        let val = faker.random.number();
        array.push(val)
      }
    } else {
      array.push('')
    }
  }
  return array
}

seed()

module.exports = {
  Product,
  Purchase
}