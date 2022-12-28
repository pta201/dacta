import { Router } from "express";
import roleRouter from "./role";
import propertyRouter from "./property";
import propertyTypeRouter from "./property-type";
import attributeRouter from "./attribute";
import userRouter from "./user";
import appointmentRouter from "./appointment";
const router = Router();

router.use("", roleRouter);
router.use("", propertyRouter);
router.use("", propertyTypeRouter);
router.use("", attributeRouter);
router.use("", userRouter);
router.use("", appointmentRouter);

export default router;
