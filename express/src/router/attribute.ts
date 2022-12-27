import { createAttribute } from "./../handler/attribute";
import { body } from "express-validator";
import { handleInputError } from "./../middleware/error";
import { Router } from "express";
const router = Router();

router.get("/attribute", () => {});
router.get("/attribute/:id", () => {});
router.put(
  "/attribute/:id",
  [body("name").isString(), handleInputError],
  (req, res) => {}
);
router.post("/attribute", createAttribute);
router.delete("/attribute/:id", () => {});

export default router;
