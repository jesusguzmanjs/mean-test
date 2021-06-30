import * as express from "express";
const router = express.Router()
import BaseService from "../services/base";
const multer = require('multer');
const upload = multer({ dest: 'tmp/csv/' });

router.get("/", (req: any, res) => {
    res.render("index");
});

router.post("/upload-csv", upload.single('csv') , (req: any, res, next) => {
    BaseService.uploadCSV(req, res, next);
});

router.get("/bills", (req: any, res, next) => {
    BaseService.getBills(req, res, next);
});

router.put("/update-bill/:billId", (req: any, res, next) => {
    BaseService.updateBill(req, res, next);
});

router.post("/create-bill", (req: any, res, next) => {
    BaseService.createBill(req, res, next);
});

router.post("/delete-bill", (req: any, res, next) => {
    BaseService.deleteBills(req, res, next);
});

module.exports = router;
