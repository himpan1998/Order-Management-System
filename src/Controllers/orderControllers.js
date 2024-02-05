const db = require("../models/index");
const orderValidator = require("./validators/validate");
<<<<<<< HEAD
const { validateInputs } = require("../helper/sharedMethods");
=======
const {validateInputs}=require('../helper/shareMethods');
>>>>>>> 372dd188999ecd9a4066b664adbb04553b1efd7f
const orders = db.tbl_order_masters;
const services = db.tbl_service_masters;
const orderService = db.tbl_order_service_mappings;

/**
 * Get All Order Lists:
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
<<<<<<< HEAD
      message: "No Order Found !!",
=======
      message: "No Order Found !",
>>>>>>> 372dd188999ecd9a4066b664adbb04553b1efd7f
      Orders: [],
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error !!",
<<<<<<< HEAD
      error: error,
=======
>>>>>>> 372dd188999ecd9a4066b664adbb04553b1efd7f
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

<<<<<<< HEAD
    //Check Is Order Exist:
=======
>>>>>>> 372dd188999ecd9a4066b664adbb04553b1efd7f
    const isOrderExist = await orders.findOne({
      attributes: ["id", ["createdAt", "datetime"], "totalFee"],
      where: {
        id: orderId,
      },
      include: [
        {
          model: services,
          through: { attributes: [] },
<<<<<<< HEAD
          as: "services",
          attributes: ["id"],
=======
          as: "services", 
          attributes: ["id"] 
>>>>>>> 372dd188999ecd9a4066b664adbb04553b1efd7f
        },
      ],
    });
    if (isOrderExist) {
      return res.status(200).json({
        message: "Get your Order !  ",
        Orders: isOrderExist,
      });
    }
    return res.status(200).json({
      message: "No order Found !!",
<<<<<<< HEAD
      Orders: [],
=======
      Orders:[]
>>>>>>> 372dd188999ecd9a4066b664adbb04553b1efd7f
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error !!",
<<<<<<< HEAD
      error: error,
=======
>>>>>>> 372dd188999ecd9a4066b664adbb04553b1efd7f
    });
  }
};

/**
 * Create New Orders:
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
<<<<<<< HEAD
    //Input s Schema Validation:
    const isValid = validateInputs(orderValidator.orderSchema, inputData);
    if (isValid.status === 400)
      return res.status(isValid.status).json({
        message: isValid.errors,
      });
=======

    const isValid= validateInputs(orderValidator.orderSchema,inputData);
    if (isValid.status==400) {
      return res.status(400).json({
        message: isValid.error,
      });
    }
>>>>>>> 372dd188999ecd9a4066b664adbb04553b1efd7f
    // Insert New Order:
    const createOrder = await orders.create(inputData);
    return res.status(201).json({
      message: "Order Created Successfully !!",
      Created: createOrder,
    });
  } catch (error) {
<<<<<<< HEAD
    res.status(500).json({
      message: "Internal Server Error!!",
      error: error.message,
=======
    return res.status(500).json({
      message: "Internal Server Error !!",
>>>>>>> 372dd188999ecd9a4066b664adbb04553b1efd7f
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
<<<<<<< HEAD
    // Client Request:
    const insert = {
      totalFee: req.body?.totalFee,
    };
    const orderId = req.params.id;

    // Check Is order is exist :
=======
   
    const orderId = req.params.id;
    const updateBody = {
      totalFee: req.body?.totalFee,
    };
>>>>>>> 372dd188999ecd9a4066b664adbb04553b1efd7f
    const isOrderExist = await orders.findOne({
      attributes: ["id", "createdAt","totalFee"],
      where: {
        id: orderId,
      },
    });
    if (!isOrderExist) {
<<<<<<< HEAD
      return res.status(204).json({
        message: "No Order Found !! ",
=======
      return res.status(200).json({
        message: "No Order Found !! ",
        Orders:[]
>>>>>>> 372dd188999ecd9a4066b664adbb04553b1efd7f
      });
    } 
      const createdTime = isOrderExist?.createdAt;
      const createdTimeMs = createdTime.getTime();
      const currentDate = new Date();
      const currentTimeMs = currentDate.getTime();
      const timeDiff = currentTimeMs - createdTimeMs;
      if (timeDiff < 108000000) {
        return res.status(200).json({
          message: "Order will not Updated",
        });
      }
<<<<<<< HEAD
    }
    //Input  Schema Validation
    const isValid = validateInputs(orderValidator.orderSchema, insert);
    if (isValid.status === 400)
      return res.status(isValid.status).json({
        message: isValid.errors,
      });

    // Update Order :
    const updateOrder = await orders.update(insert, {
=======
      // InputSchema Validation:
    const isValid= validateInputs(orderValidator.orderSchema,updateBody);
    if (isValid.status==400) {
      return res.status(400).json({
        message: isValid.error,
      });
    }
      // Update Order:
    const updateOrder = await orders.update(updateBody, {
>>>>>>> 372dd188999ecd9a4066b664adbb04553b1efd7f
      where: {
        id: orderId,
      },
    });
    return res.status(200).json({
      message: "Order Updated Successfully!!",
      updated: updateOrder,
    });
  } catch (error) {
    return res.status(500).json({
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
<<<<<<< HEAD
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
=======
    const orderId=req.params.id;
    const findOrder=await orders.findOne({
      where:{
        id:orderId
      }
    })
    if(findOrder){
      await findOrder.destroy();
      await orderService.destroy({
        where:{
          orderId:orderId,
        }
      });
      return res.status(200).json({
        message:'Order Record Deleted Successfully'
      })
    }
    return res.status(200).json({
      message:'No Record Found !',
      OrderRecords:[]
    })
  } catch (error) {
    return res.status(500).json({
      message:'Internal Server!!',
     })
>>>>>>> 372dd188999ecd9a4066b664adbb04553b1efd7f
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
