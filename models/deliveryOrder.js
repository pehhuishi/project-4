const mongoose = require('mongoose')
const Schema = mongoose.Schema
const moment = require('moment')

const deliveryOrderSchema = new Schema({
  date: Date,
  modeOfTransport: String,
  invoiceNo: String,
  quotationNo: String,
  deliveryTime: String,
  shippingCost: Number,
  termOfDelivery: String,
  deliveryAddress: String,
  reseller: {
    type: Schema.Types.ObjectId,
    ref: 'Customer'
  },
  items: [{
    type: Schema.Types.ObjectId,
    ref: 'OrderItem'
  }]
})

deliveryOrderSchema.virtual('formattedDate').get(function () {
  return moment(this.date).format('L')
});

const DeliveryOrder = mongoose.model('DeliveryOrder', deliveryOrderSchema)

module.exports = DeliveryOrder
