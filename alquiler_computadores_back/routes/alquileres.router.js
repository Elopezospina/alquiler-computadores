const express = require("express")
const router = express.Router()
const alquileresController = require("../controllers/alquileres.controllers")

router.post("/", alquileresController.create)
router.get ("/", alquileresController.find)
router.get("/:id", alquileresController.findOne)
router.put("/:id", alquileresController.update)
router.delete("/:id", alquileresController.remove)


module.exports = router