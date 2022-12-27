import { Router } from "express";
import roleRouter from "./role";
import propertyRouter from "./property";
import propertyTypeRouter from "./property-type";
import attributeRouter from "./attribute";
const router = Router();

router.use("", roleRouter);
router.use("", propertyRouter);
router.use("", propertyTypeRouter);
router.use("", attributeRouter);

export default router;
