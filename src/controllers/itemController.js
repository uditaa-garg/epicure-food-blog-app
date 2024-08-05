const Item = require("../models/ItemModel")

const getAllItems = async (req,res)=> {
const result = await Item.find().sort({createdAt: -1});
res.status(200).json(result);

} 

const getSearchedItems = async(req,res)=>{
    const {q} = req.query;
    try{
     let items;
     if(q){
        items = await Item.find({name:{$regex: q,$options: 'i'}})
     }
     res.status(200).json(items);
    }catch(error){
        res.status(500).json({message:"no items found!"});
    }
}

const getSingleItem = async(req,res)=> {
    const {id} = req.params;
    try {
        const item = await Item.findById(id);
        res.json(item);
    } catch (error) {
        res.status(500).json({ message: 'No items found'})
    }

}
module.exports = {
    getAllItems,
    getSearchedItems,
    getSingleItem
    

}