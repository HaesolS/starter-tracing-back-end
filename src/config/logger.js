const pinoHttp = require("pino-http");
const { nanoid } = require("nanoid");

const level = process.env.LOG_LEVEL || "info"

const nodeEnv = process.env.NODE_ENV || 'development'
const prettyPrint = nodeEnv === "development"

const logger = pinoHttp({
// if request has 'x-request-id' header, value of header will be used as request ID
// otherwise nanoid() generates new ID
  genReqId: (request) => request.headers['x-request-id'] || nanoid(),
  level,
  prettyPrint
});

module.exports = logger;