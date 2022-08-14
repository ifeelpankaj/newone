const Paper = require("../models/paperModel");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const APIFeature = require("../utils/PaperApiFeature");


//Create Paper
exports.createPaper = catchAsyncErrors(async (req, res, next) => {

    const paper = await Paper.create(req.body)
    res.status(201).json({
      success: true,
      paper,
    });
  });

  // Get All Paper (Admin)
exports.getAdminPaper = catchAsyncErrors(async (req, res, next) => {
  const papers = await Paper.find();

  res.status(200).json({
    success: true,
    papers,
  });
});

// Delete Paper

exports.deletePaper = catchAsyncErrors(async (req, res, next) => {
  const paper = await Paper.findById(req.params.id);

  if (!paper) {
    return next(new ErrorHander("Paper not found with this Id", 404));
  }

  await paper.remove();

  res.status(200).json({
    success: true,
  });
});


//Update Paper

exports.updatePaper = catchAsyncErrors(async (req, res, next) => {

  let paper = await Paper.findById(req.params.id);

  if (!paper) {
    return next(new ErrorHander("Content not found", 404));
  }
  paper = await Paper.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    success: true,
    paper,
  });
});

//Get all Paper

exports.getAllPaper = catchAsyncErrors(async (req, res, next) => {
  const resultPerPage = 10
  const contentsCount = await Paper.countDocuments();

  const apiFeature = new APIFeature(Paper.find(), req.query)
    .search()
    .filter();

  let papers = await apiFeature.query;

  let filteredContentsCount = papers.length;

  apiFeature.pagination(resultPerPage);

  papers = await apiFeature.query;

  res.status(200).json({
    success: true,
    papers,
    contentsCount,
    resultPerPage,
    filteredContentsCount,
  });
});
  
