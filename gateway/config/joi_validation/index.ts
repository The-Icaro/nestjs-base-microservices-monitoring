import * as Joi from 'joi';

export const JoiValidationSchema = Joi.object({
  PORT: Joi.string().required(),

  SUBGRAPHS_USER_NAME: Joi.string().required(),
  SUBGRAPHS_USER_URL: Joi.string().required(),
  SUBGRAPHS_BOOK_NAME: Joi.string().required(),
  SUBGRAPHS_BOOK_URL: Joi.string().required(),
});
