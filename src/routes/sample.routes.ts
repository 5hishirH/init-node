import { Router } from "express";

import { testServer } from "../controllers/sample.controllers";

const router = Router();

router.route("/").get(testServer);

export default router;

