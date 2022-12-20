import * as Joi from 'joi';

export const JoiValidationSchema = Joi.object({
  PORT: Joi.string().required(),
});
