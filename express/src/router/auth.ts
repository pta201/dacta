import { handleInputError } from "./../middleware/error";
import { signIn, createUser } from "./../handler/user";
import express from "express";
import { body } from "express-validator";
const router = express.Router();

router.post(
  "/signIn",
  [body("email").isEmail(), body("password").exists(), handleInputError],
  signIn
);
router.post(
  "/signUp",
  [body("email").isEmail(), body("password").exists(), handleInputError],
  createUser
);
export default router;
