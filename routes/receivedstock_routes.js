const ReceivedStock = require('../models/receivedStock')
const Supplier = require('../models/supplier')
const FurnitureModel = require('../models/furnitureModel')
const express = require('express')
const router = express.Router()
const moment = require('moment')

// Display all supplier
router.get('/', (req, res) => {
  // the return of then
  ReceivedStock.find().limit().sort({name: -1})
  .populate("supplier")
  .populate("furnitureModel")
  .then(incomingstock => {
    res.render('receivedstock/stock', {
      incomingstock
    })
  })
  .catch(err => {
    console.log(err)
  })
})

// Create new supplier
router.get('/new', (req, res) => {
  Supplier.find()
  .then((supplier)=>{
    FurnitureModel.find()
    .then((allModels)=>{
      res.render('receivedstock/new', {supplier, allModels})
    })
  })
  .catch(err => {
    console.log(err)
  })
})

router.get('/:id', (req, res) => {
  ReceivedStock
  .findById(req.params.id) // no need limit since there's only one
  .then(incomingstock => {
    Supplier.find()
    .then((supplier)=> {
      FurnitureModel.find()
      .then((furnitureModel)=> {
        res.render('receivedstock/show',
        {incomingstock,supplier,furnitureModel})

        })
    })
  })
  .catch(err => {
    console.log(err)
  })
})

router.post('/', (req, res) => {
  var formData = req.body.stock

  var newStock = new ReceivedStock()
  newStock.invoiceNo = formData.invoiceNo
  newStock.batchNo = formData.batchNo
  newStock.lotNo = formData.lotNo
  newStock.paymentMethod = formData.paymentMethod
  newStock.paymentStatus = formData.paymentStatus
  newStock.chqNo = formData.chqNo
  newStock.supplier = formData.supplier
  newStock.furnitureModel = formData.furnitureModel

  newStock.save()
  .then(
    // save
    () => res.redirect(`/incomingstock`),
    err => res.send(err)
  )
})

// Update with the input from form
router.put('/:id', (req, res) => {

  var formData = req.body.stock
  ReceivedStock.findById(req.params.id)
    .populate('supplier')
    .populate('furnitureModel')
    .then((incomingstock)=> {
      Supplier.find({name: formData.supplier})
        .then((supplier)=> {
          FurnitureModel.find({model: formData.furnitureModel})
          .then((furnitureModel)=>{
            incomingstock.set({
              supplier: supplier[0].id,
              furnitureModel: furnitureModel[0].id,
              invoiceNo: formData.invoiceNo,
              batchNo: formData.batchNo,
              lotNo: formData.lotNo,
              paymentMethod: formData.paymentMethod,
              paymentStatus: formData.paymentStatus,
              chqNo: formData.chqNo
          })
          incomingstock.save()
            .then(
            (updatedIncomingstock) => res.redirect('/incomingstock'),
            (err) => res.send(err)
            )
          })
        })
    })
  })

//   ReceivedStock.findByIdAndUpdate(req.params.id, {
//     invoiceNo: formData.invoiceNo,
//     batchNo: formData.batchNo,
//     lotNo: formData.lotNo,
//     paymentMethod: formData.paymentMethod,
//     paymentStatus: formData.paymentStatus,
//     chqNo: formData.chqNo,
//     supplier: formData.supplier,
//     furnitureModel: formData.furnitureModel
//   })
//   .then(() => res.redirect(`/incomingstock`))
//   .catch(err => console.log(err))
// })

// Detele file
router.delete('/:id', (req, res) => {

  ReceivedStock.findByIdAndRemove(req.params.id)
  .then(() => res.redirect(`/incomingstock`))
  .catch(err => console.log(err))
})



module.exports = router
