const router = require("express").Router()

const partycontroller = require("../controllers/partyController")

// ROUTES
router.route("/parties").post((req,res) => partycontroller.create(req,res))

router.route("/parties").get((req,res) => partycontroller.getAll(req,res))

router.route("/parties/:id").get((req,res) => partycontroller.get(req,res))

router.route("/parties/:id").delete((req,res) => partycontroller.delete(req,res))

router.route("/parties/:id").put((req,res) => partycontroller.update(req,res))

module.exports = router