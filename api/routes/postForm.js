var express = require("express");
var router = express.Router();
var { body, validationResult } = require("express-validator");
var db = require("../db/users");

router.post(
  "/",
  body("first_name").isLength({ min: 2 }).optional({ checkFalsy: true }),
  body("surname").isLength({ min: 2 }).optional({ checkFalsy: true }),
  body("email").isEmail().normalizeEmail().optional({ checkFalsy: true }),
  body("telephone_numner").isLength({ min: 2 }).optional({ checkFalsy: true }),
  body("gender").isLength({ min: 2 }).optional({ checkFalsy: true }),
  body("date_of_birth").isLength({ min: 2 }).optional({ checkFalsy: true }),
  body("extra_comments").isLength({ min: 2 }).optional({ checkFalsy: true }),
  async (req, res) => {
    // console.log(1234,err)
    const errors = validationResult(req);

    console.log(body.req)

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors });
    }
    const results = await db.createUser({
      first_name: req.body.first_name,
      last_name: req.body.surname,
      email: req.body.email,
    });

    res.status(201).send({
      success: true,
      msg: "Form sent successfully.",
      data: results,
    });
  }
  // res.send('Hola')
);

module.exports = router;
