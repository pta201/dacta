import {
  createAttribute,
  deleteAttribute,
  getAllAttribute,
} from "./../handler/attribute";
import { body } from "express-validator";
import { handleInputError } from "./../middleware/error";
import { Router } from "express";
const router = Router();

router.get("/attribute", getAllAttribute);
router.get("/attribute/:id", (req, res) => {
  res.status(200);
});
router.put(
  "/attribute/:id",
  [body("name").isString(), handleInputError],
  (req, res) => {}
);
router.post("/attribute", createAttribute);
router.delete("/attribute/:id", deleteAttribute);

export default router;
