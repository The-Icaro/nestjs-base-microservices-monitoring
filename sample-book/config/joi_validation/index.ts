import * as Joi from 'joi';

export const JoiValidationSchema = Joi.object({
  RABBITMQ_URI: Joi.string().required(),
  RABBITMQ_MODULE_QUEUE: Joi.string().required(),
});
