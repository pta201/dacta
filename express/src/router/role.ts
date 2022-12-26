import { createRole, deleteRole, getAllRole } from "./../handler/role";
import { Router } from "express";
const router = Router();

router.get("/role", getAllRole);
router.post("/role", createRole);
router.get("/role/:id", () => {});
router.put("/role/:id", () => {});
router.delete("/role/:id", deleteRole);
export default router;
