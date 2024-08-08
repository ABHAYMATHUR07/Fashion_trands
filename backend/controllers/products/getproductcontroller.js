const mongoose = require('mongoose');
const productcollection = require('../../models/ProductSchema');
const getproductcontroller = async (req, res) => {
    try {
        const { category, name, sub_category ,id } = req.params;
        console.log(req.params);
        let product;
        if (category) {
            const searchcategory = category.toLowerCase();
            product = await productcollection.find({ 
                category: { $regex: new RegExp(searchcategory, 'i') } });
        }
        else if (name) {
            const searchname = name.toLowerCase();
            product = await productcollection.find({
                name: { $regex: new RegExp(searchname, 'i') }
            });
        }
        else if (sub_category) {
            const searchsubcategory = sub_category.toLowerCase();
            product = await productcollection.find({
                sub_category: { $regex: new RegExp(searchsubcategory, 'i') }
            });
        }
        else if(id){
            product = await productcollection.find({
                _id:id,
            });
        }
           else if(req.path.includes("/rendom")){
            product = await productcollection.aggregate([
              {  $sample: {
                    size:9,
                }}
            ])
           }
           else if(req.path.includes("/toprated")){
            product = await productcollection.find().sort({rating :-1}).limit(9);
           }
           else if(req.path.includes("/hightolow")){
            product = await productcollection.find().sort({new_price:-1}).limit(9);
           }
           else if(req.path.includes("/lowtohigh")){
            product = await productcollection.find().sort({new_price:1}).limit(9);
           }

        else {
             product = await productcollection.find();       
        }
        res.status(200).send(product); 
console.log(`success fetch products`.bgCyan.blue);


    } catch (error) {
        res.status(500).send({
            message: "error fetching products"
        })
        console.log(`error happend ${error}`.bgCyan.blue);
    }
}
module.exports = getproductcontroller;

//----------------------------------------------------
// const mongoose = require('mongoose');
// const productcollection = require('../../models/ProductSchema');

// const getproductcontroller = async (req, res) => {
//     try {
//         const { category, name, sub_category } = req.params;
//         let product;
        
//         if (category) {
//             const searchCategory = category.toLowerCase();
//             product = await productcollection.find({
//                 category: { $regex: new RegExp(searchCategory, 'i') }
//             });
//         } else if (name) {
//             const searchName = name.toLowerCase();
//             product = await productcollection.find({
//                 name: { $regex: new RegExp(searchName, 'i') }
//             });
//         } else if (sub_category) {
//             const searchSubCategory = sub_category.toLowerCase();
//             product = await productcollection.find({
//                 sub_category: { $regex: new RegExp(searchSubCategory, 'i') }
//             });
//         } else {
//             product = await productcollection.find();
//         }

//         res.status(200).send(product);
//         console.log('Success: Products fetched'.bgCyan.blue);

//     } catch (error) {
//         res.status(500).send({
//             message: "Error fetching products",
//             error: error.message // Provide more details about the error
//         });
//         console.error('Error occurred:', error.message); // Log the error message for debugging
//     }
// };

// module.exports = getproductcontroller;


//---------------------------------------------------

// const productCollection = require("../../models/productSchema");
// const mongoose = require("mongoose");
// const productcontroller = async (req, res) => {
//   try {
//     const { id, category, subcategory, name } = req.params;
//     let products;
//     // && mongoose.Types.ObjectId(id)
//     if (id) {
//       products = await productCollection.find({ _id: id });
//     } else if (category) {
//       const searchcategory = category.toLowerCase();
//       if (req.path.includes("/lowtohigh")) {
//         products = await productCollection
//           .find({
//             category: { $regex: new RegExp(searchcategory, "i") },
//           })
//           .sort({ new_price: 1 });
//       } else if (req.path.includes("/hightolow")) {
//         products = await productCollection
//           .find({
//             category: { $regex: new RegExp(searchcategory, "i") },
//           })
//           .sort({ new_price: -1 });
//       } else {
//         products = await productCollection.find({
//           category: { $regex: new RegExp(searchcategory, "i") },
//         });
//       }
//     } else if (subcategory) {
//       const searchsubcategory = subcategory.toLowerCase();
//       products = await productCollection.find({
//         sub_category: { $regex: new RegExp(searchsubcategory, "i") },
//       });
//     } else if (name) {
//       const searchname = name.toLowerCase();
//       products = await productCollection.find({
//         name: { $regex: new RegExp(searchname, "i") },
//       });
//     } else if (req.path.includes("/random")) {
//       products = await productCollection.aggregate([{ $sample: { size: 5 } }]);
//     } else if (req.path.includes("/top-rated")) {
//       products = await productCollection.find().sort({ rating: -1 }).limit(5);
//     } else if (req.path.includes("/lowtohigh")) {
//       products = await productCollection.find().sort({ new_price: 1 });
//     } else {
//       products = await productCollection.find();
//     }
//     if (!products || products.length == 0)
//       return res.status(404).json({ message: "Products not found" });
//     res.status(200).send(products);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// };
// module.exports = productcontroller;

