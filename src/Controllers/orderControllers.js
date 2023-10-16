const Ajv = require("ajv");
const ajv = new Ajv();
const db = require("../models/index");
const orders = db.tbl_order_masters;
const Services= db.tbl_service_masters;

/**
 * @author Himanshu Pandey
 * @param {*} req
 * @param {*} res
 */
const getAllOrders = async (req, res) => {
  try {
    const getOrders = await orders.findAll({
        attributes:['id','totalFee',['createdAt','datetime']],
        include:[{
          model:Services,
          as:'order',
          attributes:['id','name']
        }]   
    });

    console.log("getOrders:",getOrders);
    if (getOrders.length>0) {
       return res.status(200).json({
        message: "Get All Order Lists",
        result: getOrders,
      })
    }
      return res.status(400).json({
        message: "No Order Found !!",
      });
  } catch (error) {
    return res.status(500).json({
      message:"Internal Server Error !!" ,
      error:console.log("error:", error)
    })
    
  }
};

/**
 * @author Himanshu Pandey
 * @param {*} req
 * @param {*} res
 */
const getOrdersById = async (req, res) => {
  try {
     const {id}= req.body || req.params || req.query;
     const getOrders=await orders.findOne({
        where:{
            id
        }
     })
    //  if(getOrders)
  } catch (error) {}
};

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
const createOrders = async (req, res) => {
  try {
  } catch (error) {}
};

/**
 * @author Himanshu Pandeys
 * @param {*} req
 * @param {*} res
 */
const updateOrders = async (req, res) => {
  try {
  } catch (error) {}
};

/**
 * @author Himanshu Pandey
 * @param {*} req
 * @param {*} res
 */
const deleteOrderById = async (req, res) => {
  try {
  } catch (error) {}
};

const orderControllers = {
  getAllOrders,
  getOrdersById,
  createOrders,
  updateOrders,
  deleteOrderById,
};
module.exports = orderControllers;
