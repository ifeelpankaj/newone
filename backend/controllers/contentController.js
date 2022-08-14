const Content = require("../models/contentModel");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ErrorHander = require("../utils/errorhander");
// const ApiFeature = require("../utils/apifeature");
// const { where } = require("../models/contentModel");
const APIFEATURE = require("../utils/apifeature");

// Create Content

exports.createContent = catchAsyncErrors(async (req, res, next) => {

  const content = await Content.create(req.body)
  res.status(201).json({
    success: true,
    content,
  });
});

// Delete Content

exports.deleteContent = catchAsyncErrors(async (req, res, next) => {
  const content = await Content.findById(req.params.id);

  if (!content) {
    return next(new ErrorHander("Content not found with this Id", 404));
  }

  await content.remove();

  res.status(200).json({
    success: true,
  });
});

//Update content

exports.updateContent = catchAsyncErrors(async (req, res, next) => {

  let content = await Content.findById(req.params.id);

  if (!content) {
    return next(new ErrorHander("Content not found", 404));
  }
  content = await Content.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    success: true,
    content,
  });
});

//Get all Content

exports.getAllContent = catchAsyncErrors(async (req, res, next) => {
  const resultPerPage = 4;
  const contentsCount = await Content.countDocuments();

  const apiFeature = new APIFEATURE(Content.find(), req.query)
    .search()
    .filter();

  let contents = await apiFeature.query;

  let filteredContentsCount = contents.length;

  apiFeature.pagination(resultPerPage);

  contents = await apiFeature.query;

  res.status(200).json({
    success: true,
    contents,
    contentsCount,
    resultPerPage,
    filteredContentsCount,
  });
});
// Get All Content (Admin)
exports.getAdminContent = catchAsyncErrors(async (req, res, next) => {
  const contents = await Content.find();

  res.status(200).json({
    success: true,
    contents,
  });
});

exports.getContentDetails = catchAsyncErrors(async (req, res, next) => {
  const content = await Content.findById(req.params.id);

  if (!content) {
    return next(new ErrorHander("Job not found", 404));
  }

  res.status(200).json({
    success: true,
    content,
  });
});