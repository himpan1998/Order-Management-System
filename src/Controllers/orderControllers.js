const db = require("../models/index");
const orderValidator = require("./validators/validate");
const { validateInputs } = require("../helper/sharedMethods");
const orders = db.tbl_order_masters;
const services = db.tbl_service_masters;
const orderService = db.tbl_order_service_mappings;

/**
 * Get All Order API:
 * @author Himanshu Pandey
 * @param {*} req
 * @param {*} res
 */
const getAllOrders = async (req, res) => {
  try {
    const getOrders = await orders.findAll({
      attributes: ["id", ["createdAt", "datetime"], "totalFee"],
      include: [
        {
          model: services,
          through: { attributes: [] },
          as: "services",
          attributes: ["id"],
        },
      ],
    });
    if (getOrders.length > 0) {
      return res.status(200).json({
        message: "Get All Order Lists",
        Orders: getOrders,
      });
    }
    return res.status(200).json({
      message: "No Order Found !!",
      Orders: [],
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error !!",
      error: error,
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

    //Check Is Order Exist:
    const isOrderExist = await orders.findOne({
      attributes: ["id", ["createdAt", "datetime"], "totalFee"],
      where: {
        id: orderId,
      },
      include: [
        {
          model: services,
          through: { attributes: [] },
          as: "services",
          attributes: ["id"],
        },
      ],
    });
    if (isOrderExist) {
      return res.status(200).json({
        message: "Get Order",
        Orders: isOrderExist,
      });
    }
    return res.status(200).json({
      message: "No order Found !!",
      Orders: [],
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error !!",
      error: error,
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
    // client request:
    const inputData = {
      totalFee: req.body?.totalFee,
    };
    //Input s Schema Validation:
    const isValid = validateInputs(orderValidator.orderSchema, inputData);
    if (isValid.status === 400)
      return res.status(isValid.status).json({
        message: isValid.errors,
      });
    // Insert New Order:
    const createOrder = await orders.create(inputData);
    return res.status(201).json({
      message: "Order Created Successfully !!",
      result: createOrder,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error!!",
      error: error.message,
    });
  }
};

/**
 * Update-Order API
 * @author Himanshu Pandey
 * @param {*} req
 * @param {*} res
 */
const updateOrders = async (req, res) => {
  try {
    // Client Request:
    const insert = {
      totalFee: req.body?.totalFee,
    };
    const orderId = req.params.id;

    // Check Is order is exist :
    const isOrderExist = await orders.findOne({
      attributes: ["id", ["createdAt", "datetime"], "totalFee"],
      where: {
        id: orderId,
      },
    });
    if (!isOrderExist) {
      return res.status(204).json({
        message: "No Order Found !! ",
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
    //Input  Schema Validation
    const isValid = validateInputs(orderValidator.orderSchema, insert);
    if (isValid.status === 400)
      return res.status(isValid.status).json({
        message: isValid.errors,
      });

    // Update Order :
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
    const orderId = req.params.id;
    const findOrder = await orders.findOne({
      where: {
        id: orderId,
      },
    });
    if (findOrder) {
      await findOrder.destroy();
      await orderService.destroy({
        where: {
          orderId: orderId,
        },
      });

      // await orderService.destroy();
      return res.status(200).json({
        message: "Order Deleted Successfully !!",
      });
    }
    return res.status(204).json({
      message: "No record found !!",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server!!",
      error: error,
    });
  }
};

// const filterOrder = async (req, res) => {
//   console.log("totalFee:", totalFee);
//   const result = await filterOrders(totalFee);
//   return res.status(200).json({
//     result: result,
//   });
// };

// Problem Statement: I want filter order above Rs.100
const filterOrders = async (req, res) => {
  const data = await orders.findAll({});
  console.log("data:", data[0].id);

  let filteredOrders = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].totalFee > req.body.totalFee) {
      filteredOrders = [...filteredOrders, data[i]];
    }
  }
  console.log(filteredOrders);
  res.status(200).json({
    result: filteredOrders,
  });
};

const orderControllers = {
  getAllOrders,
  getOrdersById,
  createOrders,
  updateOrders,
  deleteOrderById,
  filterOrders,
};
module.exports = orderControllers;

const users = {
  username: "himanshu",
  logCount: 23,
  isLoggedIn: true,
  signUp: function s(name) {
    console.log(`please signUp ${this.name}`);
    console.log(this.logCount);
  },
};

console.log(users.signUp());
// console.log(this);

function Man(name, color, city) {
  this.name = name;
  this.color = color;
  this.city = city;
  return this;
}

const spiderMan1 = new Man("SpiderMan", "Blue", "New York");
console.log(spiderMan1);



Man.prototype.showPrice()=function(){
  console.log(`Name of actor ${this.name}`)
}
console.log(spiderMan1.showPrice());
