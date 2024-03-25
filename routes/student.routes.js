import Router from 'express'
const router = Router()
import studentController from '../controller/student.controller.js'


router.post('/student/add',studentController.createStudent)
router.get('/student/list',studentController.listStudent)
router.get('/student/list/:id',studentController.studentbyId)
router.get('/student/list/:email',studentController.studentbyEmail)
router.put('/student/update/:id',studentController.updatestudent)
router.delete('/student/remove/:id',studentController.removingStudent)

export default router