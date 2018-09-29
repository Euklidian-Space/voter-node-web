type Config = {
  HOST: string,
  PORT: string,
  NODE_API_URL: string
}

export default function(): Config {
  let config: Config;
  if (process.env.NODE_ENV === 'production') {
    config = require("./prod.config.js");
  } else if (process.env.NODE_ENV === 'test') {
    config = require("./test.config.js");
  } else {
    config = require("./dev.config.js");
  }

  return config;
}