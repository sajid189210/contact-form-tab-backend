import { Router } from 'express'
import { ContactController } from '../controllers/contact.controller'
import { validateRequest } from '../../../core/middlewares/validation.middleware'
import { createContactSchema } from '../validators/create-contact.validator'

export const createContactRouter = (controller: ContactController) => {
    const router = Router()

    router.post('/', validateRequest(createContactSchema), controller.create.bind(controller))
    router.put('/:id', validateRequest(createContactSchema), controller.update.bind(controller))
    router.get('/', controller.findAll.bind(controller))
    router.delete('/:id', controller.delete.bind(controller))

    return router
}
