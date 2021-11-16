const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorHandler");
const ApiFeatures = require("../utils/apiFeatures");
const asyncErrorHandle = require("../middleware/asyncError");

// create Product -- admin
exports.createProduct = asyncErrorHandle(async (req, res, next) => {
    req.body.user = req.user.id;
    const product = await Product.create(req.body);
    res.status(201).json({
        success: true,
        product,
    });
});

// get products
exports.getAllProducts = asyncErrorHandle(async (req, res) => {
    const resultPerPage = 6;
    const productsCount = await Product.countDocuments();
    const apiFeature = new ApiFeatures(Product.find(), req.query)
        .search()
        .filter()
        .pagination(resultPerPage);
    const products = await apiFeature.query;
    const filteredProductsCount = products.length;
    res.status(200).json({
        success: true,
        products,
        productsCount,
        resultPerPage,
        filteredProductsCount,
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

// create or update review
exports.createProductReview = asyncErrorHandle(async (req, res, next) => {
    const { rating, comment, productID } = req.body;
    const review = {
        user: req.user._id,
        name: req.user.name,
        rating: Number(rating),
        comment,
    };
    const product = await Product.findById(productID);
    const isReviewed = product.reviews.find(
        (rev) => rev.user.toString() === review.user.toString()
    );

    if (isReviewed) {
        product.reviews.forEach((rev) => {
            if (rev.user.toString() === review.user.toString()) {
                rev.rating = rating;
                rev.comment = comment;
            }
        });
    } else {
        product.reviews.push(review);
        product.numOfReviews = product.reviews.length;
    }

    let avg = 0;
    product.reviews.forEach((rev) => {
        avg += rev.rating;
    });

    product.ratings = avg / product.reviews.length;
    await product.save({ validateBeforeSave: true });
    res.status(200).json({
        success: true,
    });
});

// delete a review
exports.deleteProductReview = asyncErrorHandle(async (req, res, next) => {
    const product = await Product.findById(req.query.productId);

    if (!product) {
        return next(new ErrorHandler("Product not found", 404));
    }
    const prevReviewLen = product.reviews.length;
    let isAuthorized = true;

    const reviews = product.reviews.filter((rev) => {
        if (rev._id.toString() !== req.query.id.toString()) {
            return rev;
        } else {
            if (rev.user.toString() !== req.user.id) {
                if (req.user.role !== "admin") {
                    isAuthorized = false;
                }
            }
        }
    });

    if (!isAuthorized) {
        return next(new ErrorHandler("Access Denied", 401));
    }
    if (prevReviewLen === reviews.length) {
        return next(
            new ErrorHandler(
                "Nothing modified, please check request again",
                400
            )
        );
    }

    let ratings = 0;
    let numOfReviews = 0;
    if (reviews.length !== 0) {
        let reviewLen = reviews.length;
        let avg = 0;
        reviews.forEach((rev) => {
            avg += rev.rating;
        });
        ratings = avg / reviewLen;
        numOfReviews = reviewLen;
    }

    await Product.findByIdAndUpdate(
        req.query.productId,
        {
            reviews,
            ratings,
            numOfReviews,
        },
        {
            new: true,
            runValidators: true,
            useFindAndModify: true,
        }
    );

    res.status(200).json({
        success: true,
    });
});
