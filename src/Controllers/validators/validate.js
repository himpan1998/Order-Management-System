const orderSchema = {
  type: "object",
  properties: {
    id: { type: "integer" },
    totalFee: { type: "integer" },
  },
  additionalProperties: false,
};
const serviceSchema = {
  type: "object",
  properties: {
    id: { type: "integer" },
    name: { type: "string" },
  },
//   required:[],
  additionalProperties: false,
};

module.exports = {orderSchema,serviceSchema};

