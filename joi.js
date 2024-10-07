import Joi from "@hapi/joi"

const authschema = Joi.object({
    title: Joi.string().max(20).required(),
    description: Joi.string().max(40).required(),
    quantity: Joi.string().max(5).required()

})

export default authschema