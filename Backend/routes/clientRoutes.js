import express from 'express'
import {
  createClient,
  getClients,
  getSingleClient,
  updateClient,
  deleteClient,
} from "../controllers/clientControllers.js";
const router=express.Router();




router.post("/create_client",  createClient);
router.get("/all_clients",  getClients);
//router.get("/:id",  getSingleClient);
router.put("/update_client/:id",  updateClient);
router.delete("/delete_client/:id",  deleteClient);




export default router


