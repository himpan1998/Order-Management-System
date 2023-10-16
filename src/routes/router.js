const express = require("express");
const router = express.Router();
const orderControllers = require("../Controllers/orderControllers");
const serviceControllers = require("../Controllers/serviceControllers");

/**
 * GET API:
 */

router.get("/all-order", orderControllers.getAllOrders);
router.get("/order-by-id", orderControllers.getOrdersById);
router.get("/all-service", serviceControllers.getAllServices);
router.get("/service-by-id", serviceControllers.getAllServices);

/**
 *  POST API:
 */
router.post("/all-order", orderControllers.createOrders);
router.post("/all-order", serviceControllers.createService);

/**
 * PUT API:
 */

router.put("/update-orders", orderControllers.updateOrders);
router.put("/update-services", serviceControllers.updateService);

/**
 * DELETE API:
 */

router.delete("/delete-order", orderControllers.deleteOrderById);
router.delete("/delete-services", serviceControllers.deleteServiceById);

module.exports=router;
