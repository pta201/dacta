import { handleInputError } from "../middleware/error";
import { Router } from "express";
import { body } from "express-validator";
const router = Router();
/* 
    Attribute
*/

router.get("/attribute", () => {});
router.get("/attribute/:id", () => {});
router.put(
  "/attribute/:id",
  [body("name").isString(), handleInputError],
  (req, res) => {}
);
router.post("/attribute", () => {});
router.delete("/attribute/:id", () => {});

/* 
    Role
*/
router.get("/role", () => {});
router.get("/role/:id", () => {});
router.put("/role/:id", () => {});
router.post("/role", () => {});
router.delete("/role/:id", () => {});

export default router;
