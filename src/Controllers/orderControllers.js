const Ajv = require("ajv");
const ajv = new Ajv();
const db = require("../models/index");
const orderValidator = require("./validators/validate");
const orders = db.tbl_order_masters;
const services = db.tbl_service_masters;
const orderService=db.tbl_order_service_mappings;

/**
 * Get All Order API:
 * @author Himanshu Pandey
 * @param {*} req
 * @param {*} res
 */
const getAllOrders = async (req, res) => {
  try {
    const getOrders = await orders.findAll({
      attributes: ['id', ['createdAt', 'datetime'], 'totalFee'],
      include: [
        {
          model: services,
          through:{ attributes:[] },
          as: 'services',
          attributes: ['id'],
        },
      ],
    });
    if (getOrders.length > 0) {
      return res.status(200).json({
        message: "Get All Order Lists",
        Orders: getOrders,
      });
    }
    return res.status(400).json({
      message: "No Order Found !!",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error !!",
      error: console.log("error:", error),
    });
  }
};

/**
 * Get Orders By Id:
 * @author Himanshu Pandey
 * @param {*} req
 * @param {*} res
 */
const getOrdersById = async (req, res) => {
  try {
    const orderId = req.params.id;
    const isOrderExist = await orders.findOne({
      attributes: ["id", ["createdAt", "datetime"], "totalFee"],
      where: {
        id: orderId,
      },
      include: [
        {
          model: services,
          through: { attributes: []},
          // as: "services", 
          attributes: ["id"] },
      ],
    });
    if (isOrderExist) {
      return res.status(200).json({
        message: "Get Order",
        Orders: isOrderExist,
      });
    }
    return res.status(400).json({
      message: "No order Found !!",
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error !!",
      error: console.log(error),
    });
  }
};

/**
 *
 * @author Himanshu Pandey
 * @param {*} req
 * @param {*} res
 */
const createOrders = async (req, res) => {
  try {
    const inputData = {
      totalFee: req.body?.totalFee,
    };
    const validate = ajv.compile(orderValidator.orderSchema);
    const valid = validate(inputData);
    if (!valid) {
      return res.status(400).json({
        message: validate.error,
      });
    }
    const createOrder = await orders.create(inputData);
    return res.status(200).json({
      message: "Order Created Successfully !!",
      result: createOrder,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error !!",
    });
  }
};

/**
 * Update-Order API
 * @author Himanshu Pandeys
 * @param {*} req
 * @param {*} res
 */
const updateOrders = async (req, res) => {
  try {
    const insert = {
      totalFee: req.body?.totalFee,
    };
    const orderId = req.params.id;
    const isOrderExist = await orders.findOne({
      attributes: ["id", ["createdAt", "datetime"], "totalFee"],
      where: {
        id: orderId,
      },
    });
    if (!isOrderExist) {
      return res.status(400).json({
        mesaage: "No Order Found !! ",
      });
    } else {
      const createdTime = isOrderExist?.createdAt;
      const createdTimeMs = createdTime.gettime();
      const currentDate = new Date();
      const currentTimeMs = currentDate.getTime();
      const timeDiff = currentTimeMs - createdTimeMs;
      if (timeDiff < 108000000) {
        return res.status(400).json({
          message: "Order is not Updated",
        });
      }
    }
    const validate = ajv.compile(orderValidator.orderSchema);
    const valid = validate(insert);
    if (!valid) {
      return res.status(400).json({
        message: validate.error,
      });
    }
    const updateOrder = await orders.update(insert, {
      where: {
        id: orderId,
      },
    });
    return res.status(200).json({
      message: "Order Updated Successfuly!!",
      result: updateOrder,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error!!",
    });
  }
};

/**
 * Delete Order API:
 * @author Himanshu Pandey
 * @param {*} req
 * @param {*} res
 */
const deleteOrderById = async (req, res) => {
  try {
    const orderId=req.params.id;
    await orders.destory({
      where:{
        id:orderId
      }
    })
    await orderService.destory({
      where:{
        orderId:orderId,
      }
    });
    res.status(200).json({
      message:'Order Deleted Successfully !!'
    })
  } catch (error) {
     res.statua(500).json({
      message:'Internal Server!!',
      error:error
     })
  }
};

const orderControllers = {
  getAllOrders,
  getOrdersById,
  createOrders,
  updateOrders,
  deleteOrderById,
};
module.exports = orderControllers;
