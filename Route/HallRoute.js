const express=require("express");
const router=express.Router();
const hallmodule= require("../module/Hallmodule");

router.post("/createRoom",hallmodule.createRoom);
router.post("/createRoombooking",hallmodule.createRoombooking);
router.get("/listRooms",hallmodule.listRooms);
router.get("/listCustomers",hallmodule.listCustomers);

module.exports=  router;