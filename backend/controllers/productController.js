const Product = require("../models/productModel");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");

// Create new product => /api/v1/admin/product/new
// only access by admin
exports.createProduct = catchAsyncErrors(async (req, res, next) => {
  req.body.user = req.user._id;

  const product = await Product.create(req.body);
  res.status(201).json({
    success: true,
    product,
  });
});

// get Products
exports.getAllProducts = catchAsyncErrors(async (req, res, next) => {
  const resultPerPage = 5;
  const productCount = await Product.countDocuments();
  const apifeature = ApiFeatures(Product.find(), req.query)
    .search()
    .filter()
    .pagination(resultPerPage);

  const products = await apifeature.query;
  res.status(200).json({
    success: true,
    products,
    productCount,
  });
});

// update product

exports.updateProduct = catchAsyncErrors(async (req, res, next) => {
  let product = await Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHander("Product not Found", 404));
  }

  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    product,
  });
});

// delete product

exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findByIdAndDelete(req.params.id);
  if (!product) {
    return next(new ErrorHander("Product not Found", 404));
  }

  return res.status(200).json({
    success: true,
    message: "Product is deleted",
  });
});

// get single product details
exports.getSingleProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHander("Product not Found", 404));
  }

  res.status(200).json({
    success: true,
    product,
  });
});

// create new review and update

exports.createProductReview = catchAsyncErrors(async (req, res, next) => {
  const review = {
    user: req.user.id,
    name: req.user.name,
    rating: Number(req.body.rating),
    comment: req.body.comment,
  };

  const product = await Product.findById(req.body.productId);

  const isReviewed = product.reviews.find(
    (r) => r.user.toString() === req.user.id.toString()
  );

  if (isReviewed) {
    product.reviews.forEach((review) => {
      if (review.user.toString() === req.user.id.toString()) {
        review.comment = req.body.comment;
        review.rating = req.body.rating;
      }
    });
  }

  if (!isReviewed) {
    product.reviews.push(review);
    product.numOfReviews = product.reviews.length;
  }

  product.ratings =
    product.reviews.reduce((acc, item) => item.rating + acc, 0) /
    product.reviews.length;

  await product.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
  });
});

// get product reviews

exports.getProductReviews = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.query.id);
  if (!product) {
    return next(new ErrorHander("Product not Found", 404));
  }

  res.status(200).json({
    success: true,
    reviews: product.reviews,
  });
});

// delete product reviews

exports.deleteProductReviews = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById({
    _id: req.query.productId,
  });

  if (!product) {
    return next(new ErrorHander("Product not Found", 404));
  }

  const reviews = product.reviews.filter(
    (review) => review._id.toString() !== req.query.id.toString()
  );

  const numOfReviews = reviews.length;

  const ratings =
    product.reviews.reduce((acc, item) => item.rating + acc, 0) /
    reviews.length;

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
      useFindAndModify: false,
    }
  );

  res.status(200).json({
    success: true,
  });
});

// get all products (admin)

exports.getAdminProducts = catchAsyncErrors(async (req, res, next) => {
  const products = await Product.find();
  res.status(200).json({
    success: true,
    products,
  });
});
