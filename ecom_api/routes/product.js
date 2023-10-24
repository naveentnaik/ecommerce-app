const Product = require("../models/Product");
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");

const router=require("express").Router();


//CREATE
router.post('/',verifyTokenAndAdmin,async(req,res)=>{

       const newProduct=new Product(req.body)

       try {
          const savedProduct=await newProduct.save();
          res.status(200).json(savedProduct)
       } catch (error) {
        res.status(500).json(error)
       }

})

//Update

router.put('/:id',verifyTokenAndAdmin,async(req,res,next)=>{
   
   try {
     const updatedProduct=await Product.findByIdAndUpdate(req.params.id,{
        $set:req.body
     },{new:true})
     res.status(200).json(updatedProduct)
   } catch (error) {
       res.status(500).json(error);
   }

})

//DELETE

router.delete("/:id",verifyTokenAndAdmin,async(req,res)=>{
    try {
        await Product.findByIdAndDelete(req.params.id)
        res.status(200).json("Product has been deleated..")
    } catch (error) {
        res.status(500).json(error);
    }
})

//GET PRODUCT

router.get("/find/:id",async(req,res)=>{
    try {
       const product= await Product.findById(req.params.id)
       res.status(200).json(product);
    } catch (error) {
        res.status(500).json(error);
    }
})

//GET ALL PRODUCT

router.get("/",async(req,res)=>{
    const qNew = req.query.new;
    const qCategory = req.query.category;
    try {
        let product;

        if(qNew){
            product=await Product.find().sort({createdAt:-1}).limit(1)
        }else if(qCategory){
            product=await Product.find({categories:{$in:[qCategory]}})
        }else{
            product=await Product.find()
        }
       res.status(200).json(product);
    } catch (error) {
        res.status(500).json(error);
    }
})



module.exports = router