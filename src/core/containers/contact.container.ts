import { ContactRepository } from "../domain/repositories/implementation/contact.repository"
import { ContactService } from "../../modules/contact/service/implementation/contact.service"
import { ContactController } from "../../modules/contact/controllers/contact.controller"
import { createContactRouter } from "../../modules/contact/routes/contact.routes"
import { ContactModel } from "../infrastructure/implementation/contact.schema"

export const buildContactModule = () => {
    const contactSchema = ContactModel;
    const repository = new ContactRepository(contactSchema);
    const service = new ContactService(repository);
    const controller = new ContactController(service);

    return createContactRouter(controller);
}
