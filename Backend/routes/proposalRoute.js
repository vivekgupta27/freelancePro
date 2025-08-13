import express from "express";
import { generateProposal, downloadProposal } from "../controllers/proposalController.js";

const router = express.Router();

router.post(
  "/generate/:clientId/download",
  generateProposal,     // middleware
  downloadProposal      // final handler
);

export default router;
