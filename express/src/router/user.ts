import { Router } from "express";
import { getUserByRole } from "../handler/user";
const router = Router();

router.get("/user/role/:roleId", getUserByRole);
router.get("/user/:id");
router.put("/user/:id");
router.post("/user");
router.delete("/user/:id", () => {});

export default router;
