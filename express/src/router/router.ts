import { handleInputError } from "../middleware/error";
import { Router } from "express";
import { body } from "express-validator";
import roleRouter from "./role";
const router = Router();
/* 
    Attribute
*/

/* 
    Role
*/
router.use("", roleRouter);

export default router;
