import Router from 'express'
const router = Router()
import facilitatorController from '../controller/facilitator.controller.js'


router.post('/facilitator/add',facilitatorController.createfacilitator)
router.get('/facilitator/list',facilitatorController.listfacilitator)
router.get('/facilitator/list/:id',facilitatorController.facilitatorbyId)
router.get('/facilitator/listemail/:email',facilitatorController.facilitatorbyEmail)
router.put('/facilitator/update/:id',facilitatorController.updatefacilitator)
router.delete('/facilitator/remove/:id',facilitatorController.removingfacilitator)

export default router