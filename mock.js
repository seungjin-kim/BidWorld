let mocks = {

  prodInfo: {
    item_number: 100,
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
  },

  payment: {
    item_number: 100,
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
  },
  noReturn: {
    item_number: 100,
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
    exist: false,
    deadline: 30,
    type: "Money back",
    pay_shipping: "Seller pays for return shipping"
  }
}

export default mocks