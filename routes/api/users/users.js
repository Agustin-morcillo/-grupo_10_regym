const express = require('express');
const router = express.Router();
const apiUsersController= require("../../../controllers/api/users/apiUsersController")

router.get("/",apiUsersController.list)
router.get("/:id",apiUsersController.findUser)

router.post("/checkCredentials",apiUsersController.login)

module.exports = router;