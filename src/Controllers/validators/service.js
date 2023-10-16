const serviceSchema = {
  type: "object",
  properties: {
    id: { type: "integer" },
    name: { type: "string" },
  },
//   required:[],
  additionalProperties: false,
};

module.exports = serviceSchema;
