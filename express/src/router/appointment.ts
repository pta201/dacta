import { createAppointment, getAllAppointment } from "./../handler/appointment";
import { Router } from "express";
const router = Router();

router.get("/appointment", getAllAppointment);
router.get("/appointment/:id", () => {});
router.put("/appointment/:id");
router.post("/appointment", createAppointment);
router.delete("/appointment/:id", () => {});

export default router;
