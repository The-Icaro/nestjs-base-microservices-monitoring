import * as Joi from 'joi';

export const JoiValidationSchema = Joi.object({
  PORT: Joi.string().required(),

  RABBITMQ_URI: Joi.string().required(),
  RABBITMQ_MODULE_USER_NAME: Joi.string().required(),
  RABBITMQ_MODULE_USER_QUEUE: Joi.string().required(),
  RABBITMQ_MODULE_BOOK_NAME: Joi.string().required(),
  RABBITMQ_MODULE_BOOK_QUEUE: Joi.string().required(),
});
