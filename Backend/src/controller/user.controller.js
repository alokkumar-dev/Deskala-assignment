// const express = require("express");
// const User = require("../model/user.model");

// const router = express.Router();

// router.post("", async (req, res) => {
//   try {
//     let user = await User.find(req.body).lean().exec();
//     return res.status(200).send(user);
//   } catch (error) {
//     return res.status(500).send(error.message);
//   }
// });
// router.get("", async (req, res) => {
//   try {
//     let user = await User.find().lean().exec();
//     return res.status(200).send(user);
//   } catch (error) {
//     return res.status(500).send(error.message);
//   }
// });

// module.exports = router;
