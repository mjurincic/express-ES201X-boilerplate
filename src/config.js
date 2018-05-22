import joi from 'joi';

// Load environment variables from the `.env` file.
import 'dotenv/config';

// Check for required env variables and their types.
const envVarsSchema = joi
  .object({
    NODE_ENV: joi
      .string()
      .valid(['development', 'production', 'test', 'provision'])
      .required(),
    PORT: joi.number().required(),
    HOST: joi
      .string()
      .hostname()
      .trim()
      .default('localhost'),
    LOGGER_LEVEL: joi
      .string()
      .valid(['error', 'warn', 'info', 'verbose', 'debug', 'silly'])
      .default('info'),
    LOGGER_ENABLED: joi
      .boolean()
      .truthy('TRUE')
      .truthy('true')
      .falsy('FALSE')
      .falsy('false')
      .default(true),
    SMTP_HOST: joi
      .string()
      .hostname()
      .trim()
      .required(),
    SMTP_PORT: joi.number().required(),
    SMTP_SECURE: joi
      .boolean()
      .truthy('TRUE')
      .truthy('true')
      .falsy('FALSE')
      .falsy('false'),
    SMTP_IGNORE_TLS: joi
      .boolean()
      .truthy('TRUE')
      .truthy('true')
      .falsy('FALSE')
      .falsy('false'),
    SMTP_USER: joi.string().alphanum(),
    SMTP_PASS: joi.string(),
    SMTP_DEFAULT_FROM: joi.string().email()
  })
  .required();

const { error, value: envVars } = joi.validate(process.env, envVarsSchema, {
  abortEarly: false,
  convert: true,
  allowUnknown: true
});
if (error) {
  throw new Error(`Environment variables validation error: ${error.message}`);
}

const config = {
  env: envVars.NODE_ENV,
  isTest: envVars.NODE_ENV === 'test',
  isDevelopment: envVars.NODE_ENV === 'development',
  logger: {
    level: envVars.LOGGER_LEVEL,
    enabled: envVars.LOGGER_ENABLED
  },
  server: {
    port: envVars.PORT,
    host: envVars.HOST
  }
  // ...
};

export default config;
