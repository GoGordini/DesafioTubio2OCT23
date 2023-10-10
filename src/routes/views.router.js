import {Router} from "express";
const router = Router();
import { productPath } from '../utils.js';
import ProductManager from '../managers/product.manager.js';
const productManager= new ProductManager(productPath);

router.get("/realtimeproducts",async(req,res)=>{
   try{
    const products = await productManager.getProducts();
    res.render("realTimeProducts",{products:products});}
    catch(error) {return res.send({ status: 'error', error: error })}
})
router.get("/",async (req,res)=>{
    try{
        const products = await productManager.getProducts();
        res.render("home",{products:products});}
        catch(error) {return res.send({ status: 'error', error: error })}
    });

export default router;