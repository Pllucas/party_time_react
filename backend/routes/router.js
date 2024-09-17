const router = require("express").Router()

// SERVICE ROUTER
const servicesRouter = require("./services")

router.use("/", servicesRouter)

// PARTIES ROUTES
const partyRouter = require("./parties")

router.use("/", partyRouter)

module.exports = router