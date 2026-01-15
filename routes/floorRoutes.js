// import express from "express";
// import {
//   addFloor,
//   getFloorsByApplication,
//   deleteFloor
// } from "../controllers/floorcontroller.js";

// const router = express.Router();

// // ADD FLOOR
// router.post("/add", addFloor);

// // GET FLOORS BY APPLICATION NO
// router.get("/:applicationNo", getFloorsByApplication);

// // DELETE FLOOR
// router.delete("/:id", deleteFloor);

// export default router;



// import express from "express";
// import { getAllFloors } from "./controllers/floorController.js";

// const router = express.Router();

// // GET all floors
// router.get("/", getAllFloors);

// export default router;

import express from "express";
import { getAllFloors } from "../controllers/floorcontroller.js";

const router = express.Router();

router.get("/", getAllFloors); // GET request se sare floors aayenge

export default router;
