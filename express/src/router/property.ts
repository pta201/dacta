import { createProperty } from "./../handler/property";
import { Router } from "express";
const router = Router();

router.get("/property", () => {});
router.get("/property/:id", () => {});
router.put("/property/:id", (req, res) => {});
router.post("/property", createProperty);
router.delete("/property/:id", () => {});

export default router;
