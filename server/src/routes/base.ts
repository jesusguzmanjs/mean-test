import * as express from "express";
const router = express.Router()
import BaseService from "../services/base";
const multer = require('multer');
const upload = multer({ dest: 'tmp/csv/' });

router.get("/", (req: any, res) => {
    res.render("index");
});

// about page
router.post("/upload-csv", upload.single('file') , (req: any, res) => {
    BaseService.uploadCSV(req, res);
    res.send({hola: 'hola'});
});

router.get("/bills", upload.single('file') , (req: any, res) => {
    BaseService.getBills(req, res);
    // res.send({hola: 'hola'});
});

module.exports = router;
