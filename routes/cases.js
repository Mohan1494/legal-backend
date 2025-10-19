import express from "express";
import {
  getCases,
  addCase,
  getCaseById,
  updateCase,
  deleteCase
} from "../controllers/caseController.js";

const router = express.Router();

router.get("/", getCases);
router.post("/", addCase);
router.get("/:id", getCaseById);
router.put("/:id", updateCase);
router.delete("/:id", deleteCase);

export default router;
