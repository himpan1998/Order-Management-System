const orderSchema = {
  type: "object",
  properties: {
    id: { type: "integer" },
    totalFee: { type: "integer" },
  },
  additionalProperties: false,
};

module.exports = orderSchema;
