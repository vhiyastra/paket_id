const express  = require('express');
const router   = express.Router();
const { Packages, validate} = require("../models/package");

router.get('/', async(req, res, next) => {
    const data = await Packages.find({})
    res.send(data);
});

router.get('/:id', async(req, res, next) => {
    const data = await validateObjectId(req.params.id,res)
    res.send(data);
});

router.post('/', inputValidation(),async(req, res, next) => {
    const package = new Packages(req.body);
    await package.save((err,data) => {
        if (err) return console.error(err)
    })
    res.send(req.body);
});

router.put('/:id',inputValidation(), async(req, res, next) => {
    await validateObjectId(req.params.id,res)
    await Packages.findOneAndUpdate({
        transaction_id : req.params.id
    },req.body)
    res.send(req.body);
});

router.patch('/:id',inputValidation(), async(req, res, next) => {
    await validateObjectId(req.params.id,res)
    res.send(req.body);
});

router.delete('/:id', async(req, res, next) => {
    await validateObjectId(req.params.id,res)
    await Packages.deleteOne({
        transaction_id : req.params.id
    })
    res.send({
        transaction_id : req.params.id,
        message: "Data has been deleted successfully"
    });
});

function inputValidation() {
    return (req, res, next) => {
        const { error } = validate(req.body);
        if (error) {
            return res.status(400).send({
                status_code : 400,
                err_message : error.details[0].message
            });
        } else {
            next()
        }
    }
}

async function validateObjectId(id,res) {
    const data = await Packages.findOne({
        transaction_id : id
    })
    if (!data)
        return res.status(404).send({
            status_code : 404,
            err_message : "Package Data with the given ID was not found."
        });
    return data
}

module.exports = router;
