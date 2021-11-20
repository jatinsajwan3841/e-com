const express = require("express");
const { paytmMID, initTranx } = require("../controllers/tranxController");
const router = express.Router();
const { isAuthenticatedUser } = require("../middleware/auth");

router.route("/paytm-MID").get(isAuthenticatedUser, paytmMID);
router.route("/init-txn").post(isAuthenticatedUser, initTranx);

module.exports = router;
