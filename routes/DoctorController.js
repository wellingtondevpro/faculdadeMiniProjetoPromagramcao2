import Doctor from "../models/Doctor";

const express = require("express");

var router = express.Router();


//Criar novo medico
Router.post("/", async (req, res) => {
    const doctor = new Doctor(req.body);
    try{
        const savedDoctor = w
    }catch ()
})

export default router();