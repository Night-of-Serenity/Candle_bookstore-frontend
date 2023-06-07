import Joi from "joi";

const registerSchema = Joi.object({
  username: Joi.string().trim().required().messages({
    "string.empty": "username is required.",
  }),
  email: Joi.string().email({ tlds: false }).required().messages({
    "string.empty": "email is required.",
  }),
  password: Joi.string()
    .pattern(/^[a-zA-Z0-9]{6,30}$/)
    .required()
    .messages({
      "string.empty": "Password is required.",
    }),
  confirmPassword: Joi.string().valid(Joi.ref("password")).messages({
    "any.only": "Password and confirm password did not match.",
    "string.empty": "Confirm password is required.",
  }),
});

export default (input) => {
  const { error } = registerSchema.validate(input, {
    abortEarly: false,
  });
  // console.dir(error);
  if (error) {
    return error.details.reduce((acc, el) => {
      acc[el.path[0]] = el.message;
      return acc;
    }, {});
  }
};
