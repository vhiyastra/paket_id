const Joi = require('@hapi/joi');
const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const packageSchema = new Schema({
    transaction_id: String,
    customer_name: String,
    customer_code: String,
    transaction_amount: String,
    transaction_discount: String,
    transaction_additional_field: String,
    transaction_payment_type: String,
    transaction_state: String,
    transaction_code: String,
    transaction_order: Number,
    location_id: String,
    organization_id: Number,
    created_at: String,
    updated_at: String,
    transaction_payment_type_name: String,
    transaction_cash_amount: Number,
    transaction_cash_change: Number,
    customer_attribute: Object,
    connote: Object,
    connote_id: String,
    origin_data: Object,
    destination_data: Object,
    koli_data: Array,
    custom_field: Object,
    currentLocation: Object
});

const Packages = mongoose.model('packages', packageSchema);

function validatePackages(packages) {
    const schema = Joi.object({
        transaction_id: Joi.string().required(),
        customer_name: Joi.string(),
        customer_code: Joi.string(),
        transaction_amount: Joi.string(),
        transaction_payment_type: Joi.string(),
        transaction_state: Joi.string(),
        transaction_code: Joi.string(),
        transaction_order: Joi.number(),
        location_id: Joi.string(),
        organization_id: Joi.number(),
        created_at: Joi.string(),
        updated_at: Joi.string(),
        transaction_payment_type_name: Joi.string(),
        connote_id: Joi.string()
    }).unknown(true);
    return schema.validate(packages)
}
  
exports.Packages = Packages;
exports.validate = validatePackages;