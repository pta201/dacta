import {
  createPropertyType,
  getAllPropertyType,
} from "./../handler/property_type";
import { Router } from "express";
const router = Router();

router.get("/property-type", getAllPropertyType);
router.get("/property-type/:id", () => {});
router.put("/property-type/:id");
router.post("/property-type", createPropertyType);
router.delete("/property-type/:id", () => {});

export default router;
