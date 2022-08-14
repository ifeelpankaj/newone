const Jobs = require("../models/jobUpdateModel");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ErrorHander = require("../utils/errorhander");
const ApiFeatures = require("../utils/JobsApifeatures.js");



//Create Jobs
exports.createJobs = catchAsyncErrors(async (req, res, next) => {

    const job = await Jobs.create(req.body)
    res.status(201).json({
      success: true,
      job,
    });
  });

  exports.getAllJobs = catchAsyncErrors(async (req, res, next) => {
    const resultPerPage = 20;
    const jobsCount = await Jobs.countDocuments();
  
    const apiFeature = new ApiFeatures(Jobs.find(), req.query)
      .search()
      .filter();
  
    let jobs = await apiFeature.query;
  
    let filteredJobsCount = jobs.length;
  
    apiFeature.pagination(resultPerPage);
  
    jobs = await apiFeature.query;
  
    res.status(200).json({
      success: true,
      jobs,
      jobsCount,
      resultPerPage,
      filteredJobsCount,
    });
  });

  // Get Job Details
exports.getJobDetails = catchAsyncErrors(async (req, res, next) => {
  const job = await Jobs.findById(req.params.id);

  if (!job) {
    return next(new ErrorHander("Job not found", 404));
  }

  res.status(200).json({
    success: true,
    job,
  });
});

  // Get All Jobs (Admin)
exports.getAdminJobs = catchAsyncErrors(async (req, res, next) => {
  const jobs = await Jobs.find();

   res.status(200).json({
    success: true,
    jobs,
  });
});

//Update Jobs

exports.updateJobs = catchAsyncErrors(async (req, res, next) => {

  let job = await Jobs.findById(req.params.id);

  if (!job) {
    return next(new ErrorHander("Content not found", 404));
  }
  job = await Jobs.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    success: true,
    job,
  });
});

// Delete Jobs

exports.deleteJobs = catchAsyncErrors(async (req, res, next) => {
  const job = await Jobs.findById(req.params.id);

  if (!job) {
    return next(new ErrorHander("Paper not found with this Id", 404));
  }

  await job.remove();

  res.status(200).json({
    success: true,
  });
});