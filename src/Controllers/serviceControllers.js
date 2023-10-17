const db = require("../models/index");
const serviceValidator = require("./validators/validate");
const {validateInputs}=require('../helper/shareMethods')
const services = db.tbl_service_masters;

/**
 * Get All Services:
 * @author Himanshu Pandey
 * @param {*} req
 * @param {*} res
 */
const getAllServices = async (req, res) => {
  try {
    const serviceLists = await services.findAll({
      attributes: ["id", "name"],
    });
    if (serviceLists.length > 0) {
      return res.status(200).json({
        message: "Get all services lists!!",
        ServiceRecords: serviceLists,
      });
    }
    return res.status(400).json({
      message: "No service records found !!",
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server error !",
      error: error,
    });
  }
};

/**
 * Get Service By Id
 * @author Himanshu Pandey
 * @param {*} req
 * @param {*} res
 */
const getServicesById = async (req, res) => {
  try {
    const serviceId = req.params.id;
    const isServiceExist = await services.findOne({
      attributes: ["id", "name"],
      where: {
        id: serviceId,
      },
    });
    if (!isServiceExist) {
      return res.status(400).json({
        message: "No service records found !!",
      });
    }
    return res.status(200).json({
      message: "Get Service List!!",
      ServiceRecords: isServiceExist,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server error !",
      error: error,
    });
  }
};

/**
 * @author Himanshu Pandey
 * @param {*} req
 * @param {*} res
 */
const createService = async (req, res) => {
  try {
    const insertData = {
      name: req.body?.name,
    };

    // Input Schema Validation:
    const isValid= validateInputs(serviceValidator.serviceSchema,inputData);
    if (isValid.status==400) {
      return res.status(400).json({
        message: isValid.errors,
      });
    }
    // Create New Service:
    const createService = await services.create(insertData);
    return res.status(200).json({
      message: "Service Created Successfully !!",
      Created: createService,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error !!",
    });
  }
};

/**
 * Update Service
 * @author Himanshu Pandey
 * @param {*} req
 * @param {*} res
 */
const updateService = async (req, res) => {
  try {
    const serviceId = req.params.id;
    const updateData = req.body?.name;
    const isServiceExist = await services.findOne({
      where: {
        id: serviceId,
      },
    });
    if (!isServiceExist) {
      res.status(200).json({
        message: "Service Record Not Found !!",
        Service:[]
      });
    }
    // Input Schema Validation:
    const isValid= validateInputs(serviceValidator.serviceSchema,updateData);
    if (isValid.status==400) {
      return res.status(400).json({
        message: isValid.errors,
      });
    }

    // Update Existing Service Records:
    const updateRecords = await services.update({
      where: {
        id: serviceId,
      },
      updateData,
    });
    return res.status(200).json({
      message: "Service Record Update Successfully !!",
      result: updateRecords,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error !!",
      error: error,
    });
  }
};

/**
 * Delete Service Records;
 * @author Himanshu Pandey
 * @param {*} req
 * @param {*} res
 */
const deleteServiceById = async (req, res) => {
  try {
    const serviceId = req.params.id;
    const isServiceExist=await services.findOne({
      where: {
        id: serviceId
      },
    })
    if(isServiceExist){
       await isServiceExist.destroy();

    }
    const removeService = await services.destory({
      where: {
        id: serviceId
      },
    });
    res.status(200).json({
      message:" Service Records Deleted Successfully !!",
      result: removeService,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error !!",
    });
  }
};

const serviceControllers = {
  getAllServices,
  getServicesById,
  createService,
  updateService,
  deleteServiceById,
};

module.exports = serviceControllers;
