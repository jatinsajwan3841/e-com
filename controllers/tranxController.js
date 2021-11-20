const ErrorHandler = require("../utils/errorHandler");
const asyncErrorHandle = require("../middleware/asyncError");
const https = require("https");
const PaytmChecksum = require("paytmchecksum");

// get paytm mid
exports.paytmMID = asyncErrorHandle(async (req, res, next) => {
    res.status(200).json({
        MID: process.env.PAYTM_MID,
    });
});

// initiate txn
exports.initTranx = asyncErrorHandle(async (req, res, next) => {
    var paytmParams = {};
    paytmParams.body = {
        requestType: "Payment",
        mid: process.env.PAYTM_MID,
        websiteName: "WEBSTAGING",
        orderId: req.body.uid,
        callbackUrl: "http://localhost:3000/#/pay-status?redirect=/pay-status",
        txnAmount: {
            value: req.body.totalPrice,
            currency: "INR",
        },
        userInfo: {
            custId: req.user.id,
        },
    };
    const checkSum = await PaytmChecksum.generateSignature(
        JSON.stringify(paytmParams.body),
        process.env.PAYTM_M_KEY
    );
    paytmParams.head = {
        signature: checkSum,
    };
    var post_data = JSON.stringify(paytmParams);
    var options = {
        /* for Staging */
        hostname: "securegw-stage.paytm.in",
        port: 443,
        path: `/theia/api/v1/initiateTransaction?mid=${process.env.PAYTM_MID}&orderId=${paytmParams.body.orderId}`,
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Content-Length": post_data.length,
        },
    };

    var response = "";
    var post_req = https.request(options, function (post_res) {
        post_res.on("data", function (chunk) {
            response += chunk;
        });

        post_res.on("end", function () {
            res.status(200).json({
                success: true,
                response,
            });
        });
    });
    post_req.write(post_data);
    post_req.end();
});

// callback
exports.tranxStatus = asyncErrorHandle(async (req, res, next) => {
    console.log(req);
});
