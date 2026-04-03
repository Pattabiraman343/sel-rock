import { Router } from "express";
const router = Router();

import { createLead, getLeads, updateLead, deleteLead } from "../controller/leadController.js";
import validateLead from "../middleware/validateLead.js";
router.post("/", validateLead, createLead);
router.get("/", getLeads);
router.patch("/:id/status", updateLead);
router.delete("/:id", deleteLead);

export default router;
