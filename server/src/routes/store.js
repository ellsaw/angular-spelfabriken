import express from 'express';
const router = express.Router();

import { dbGetForCampaignCarousel, dbGetForSearch, dbGetForProductDetails, dbGetForRelatedProducts, dbGetForCart, dbGetForGrid } from '../../database/models/storeModels.js';


router.get("/campaign-carousel", (req, res) => {
    const products = dbGetForCampaignCarousel();

    if(products){
        res.status(200).json(products)
    } else {
        res.status(500).json(null)
    }
})

router.get("/grid", (req, res) => {

    const products = dbGetForGrid();

    if(products){
        res.status(200).json(products)
    } else {
        res.status(500).json(null)
    }
})

router.get('/search/:query', (req, res) => {
    const { query } = req.params;

    const products = dbGetForSearch(query);

    if(products){
        res.status(200).json(products)
    } else {
        res.status(500).json()
    }
})

router.get('/product-details/:slug', (req, res) => {
    const { slug } = req.params;
    
    const {product, error} = dbGetForProductDetails(slug);

    if(product){
        res.status(200).json(product)
    }else if(error){
        res.status(500).json({error: error})
    }else{
        res.status(404).json({error: "Not found"})
    }
})

router.get('/related-products/:relatedToId', (req, res) => {
    const { relatedToId } = req.params;

    const products = dbGetForRelatedProducts(relatedToId);

    if(products){
        res.status(200).json(products)
    } else {
        res.status(500).json()
    }
})

router.get('/cart/:id', (req, res) => {
    const { id } = req.params;

    const product = dbGetForCart(id);

    if(product){
        res.status(200).json(product)
    } else {
        res.status(500).json()
    }
})

export default router;