import {
  createProperty,
  getAllProperty,
  getPropertyById,
} from "./../handler/property";
import { Router } from "express";
const router = Router();

router.get("/property", getAllProperty);
router.get("/property/:id", getPropertyById);
router.put("/property/:id", (req, res) => {});
router.post("/property", createProperty);
router.delete("/property/:id", () => {});

export default router;
