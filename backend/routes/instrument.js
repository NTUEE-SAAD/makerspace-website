import express from "express";
import instrument from "../models/instrument"

const router = express.Router();

router.get("/", (req, res) => {
  findAll(res);
});