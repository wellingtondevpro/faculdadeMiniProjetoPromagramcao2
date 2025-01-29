const express = require('express');
const req = require("express/lib/request");

var router = express.Router();

router.get(
    "/", function (req, res) {
        console.log("GET /", req.url);
        res.status(200).json({message: "Welcome Back!"});
    }
)

export default router;