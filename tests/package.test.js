const mongoose = require('mongoose');
const { Packages } = require("../models/package");
const exampleData = { 
    transaction_id: "d0090c40-539f-479a-8274-899b9970bddc",
    customer_name: "PT. AMARA PRIMATIGA",
    customer_code: "1678593",
    transaction_amount: "70700",
    transaction_discount: "0",
    transaction_additional_field: "",
    transaction_payment_type: "29",
    transaction_state: "PAID",
    transaction_code: "CGKFT20200715121",
    transaction_order: 121,
    location_id: "5cecb20b6c49615b174c3e74",
    organization_id: 6,
    created_at: "2020-07-15T11:11:12+0700",
    updated_at: "2020-07-15T11:11:22+0700",
    transaction_payment_type_name: "Invoice",
    transaction_cash_amount: 0,
    transaction_cash_change: 0,
};

describe('User Model Test', () => {
    beforeAll(async () => {
        await mongoose.connect("mongodb://localhost/paket", {useNewUrlParser: true, useCreateIndex: true }, (err) => {
            if (err) {
                console.error(err)
                process.exit(1)
            }
        })
    })

    it('Get Single Package Data', async () => {
        const packages = await Packages.findOne({
            transaction_id : "d0090c40-539f-479a-8274-899b9970bddc"
        })
        expect(packages.transaction_id).toBe("d0090c40-539f-479a-8274-899b9970bddc");
    });

    it('Get All Package Data', async () => {
        const packages = await Packages.find({})
        expect(packages).toEqual(
            expect.arrayContaining([
              expect.objectContaining({
                transaction_id: 'd0090c40-539f-479a-8274-899b9970bddc'
              })
            ])
        )
    });

    it('Create Package', async () => {
        const packageModel = new Packages(exampleData);
        const savedPackages = await packageModel.save();
        expect(savedPackages._id).toBeDefined();
        expect(savedPackages.transaction_id).toBe(exampleData.transaction_id);
    });
})
  