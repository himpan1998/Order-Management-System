const Ajv=require("ajv");
const ajv=new Ajv();
const db=require("../models/index");
const Services= db.tbl_service_masters;


/**
 * @author Himanshu Pandey
 * @param {*} req 
 * @param {*} res 
 */
const getAllServices=async(req,res)=>{
    try {
        const data= await Services.findAll({})
        res.json({
            result:data
        })
    } catch (error) {
        
    }
}

/**
 * @author Himanshu Pandey
 * @param {*} req 
 * @param {*} res 
 */
const getServicesById=async(req,res)=>{
    try {
        
    } catch (error) {
        
    }
}

/**
 * @author Himanshu Pandey
 * @param {*} req 
 * @param {*} res 
 */



/**
 * @author Himanshu Pandey
 * @param {*} req 
 * @param {*} res 
 */
const createService=async(req,res)=>{
    try {
        
    } catch (error) {
        
    }
}

/**
 * @author Himanshu Pandeys
 * @param {*} req 
 * @param {*} res 
 */
const updateService=async(req,res)=>{
    try {
        
    } catch (error) {
        
    }
}

/**
 * @author Himanshu Pandey
 * @param {*} req 
 * @param {*} res 
 */
const deleteServiceById=async(req,res)=>{
    try {
        
    } catch (error) {
        
    }
}



const serviceControllers={
    getAllServices,
    getServicesById,
    createService,
    updateService,
    deleteServiceById

}

module.exports=serviceControllers;



