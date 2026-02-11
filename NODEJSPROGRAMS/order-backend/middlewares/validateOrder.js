const { body, validationResult } = require("express-validator");

exports.validateOrder = [

  body("custname")
    .notEmpty()
    .withMessage("Customer name is required"),

  body("product_id")
    .notEmpty()
    .withMessage("Product ID is required")
    .isInt()
    .withMessage("Product ID must be a number"),

  body("quantity")
    .notEmpty()
    .withMessage("Quantity is required")
    .isInt({ min: 1 })
    .withMessage("Quantity must be greater than 0"),

  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array()
      });
    }

    next();
  }
];