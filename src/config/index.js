const dotenv = require('dotenv');

dotenv.config();

const config = {
  server: {
    host: process.env.HOST,
    port: parseInt(process.env.PORT, 10),
  },
  database: {
    url: process.env.DB_URL,
  },
};

module.exports = config;
