const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorHandler");
const ApiFeatures = require("../utils/apiFeatures");
const asyncErrorHandle = require("../middleware/asyncError");

// create Product -- admin
exports.createProduct = asyncErrorHandle(async (req, res, next) => {
    const product = await Product.create(req.body);
    res.status(201).json({
        success: true,
        product,
    });
});

// get products
exports.getAllProducts = asyncErrorHandle(async (req, res) => {
    const resultPerPage = 5;
    const productCount = await Product.countDocuments();
    const apiFeature = new ApiFeatures(Product.find(), req.query)
        .search()
        .filter()
        .pagination(resultPerPage);
    const products = await apiFeature.query;
    res.status(200).json({
        success: true,
        products,
        productCount,
    });
});

// get product details
exports.getProductDetails = asyncErrorHandle(async (req, res, next) => {
    const product = await Product.findById(req.params.id);
    if (!product) {
        return next(new ErrorHandler("Product not found!", 404));
    }
    return res.status(200).json({
        success: false,
        product,
    });
});

// update product -- admin
exports.updateProduct = asyncErrorHandle(async (req, res, next) => {
    let product = await Product.findById(req.params.id);
    if (!product) {
        return res.status(500).json({
            success: false,
            message: "Product not found!",
        });
    }
    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: true,
    });
    res.status(200).json({
        success: true,
        product,
    });
});

// delete product -- admin
exports.deleteProduct = asyncErrorHandle(async (req, res, next) => {
    const product = await Product.findById(req.params.id);
    if (!product) {
        return res.status(500).json({
            success: false,
            message: "Product not found!",
        });
    }
    await product.deleteOne();
    res.status(200).json({
        success: true,
        message: "product deleted",
    });
});
