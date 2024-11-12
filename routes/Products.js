const express = require('express');
const Product = require('../models/Product');
const router = express.Router();


// Create a New Product
router.post('/addproduct', async (req, res) => {
    const newProduct = new Product(req.body);   
    await newProduct.save();
    res.status(201).json(newProduct);
   });


// Get all the Products
router.get('/getall', async (req, res) => {
    const products = await Product.find();
    res.json(products);
   });

   
// Update a Product
router.put('/:id', async (req, res) => {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedProduct);
   });

   
//    Delete a Product
   router.delete('/:id', async (req, res) => {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: 'Product deleted' });
   });
   
// export the Router
   module.exports = router;
