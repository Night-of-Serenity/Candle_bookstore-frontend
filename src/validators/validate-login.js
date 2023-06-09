import Joi from "joi";

const loginSchema = Joi.object({
  username: Joi.string().trim().required().messages({
    "string.empty": "username is required.",
  }),
  password: Joi.string()
    .pattern(/^[a-zA-Z0-9]{6,30}$/)
    .required()
    .messages({
      "string.empty": "Password is required.",
    }),
});

export default function validateLogin(input) {
  const { error } = loginSchema.validate(input, {
    abortEarly: false,
  });
  // console.dir(error);
  if (error) {
    return error.details.reduce((acc, el) => {
      acc[el.path[0]] = el.message;
      return acc;
    }, {});
  }
}
