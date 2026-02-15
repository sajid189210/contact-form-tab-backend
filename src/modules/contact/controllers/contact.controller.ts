import { Request, Response, NextFunction } from 'express'
import { IContactService } from '../service/interface/contact-service.interface'

export class ContactController {
    constructor(private service: IContactService) { }

    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const contact = await this.service.create(req.body)
            res.status(201).json(contact)
        } catch (error) {
            next(error);
        }
    }

    async update(req: Request, res: Response, next: NextFunction) {
        try {
            const updateData: any = { ...req.body, id: req.params.id as string };
            const contact = await this.service.update(req.params.id as string, updateData)
            if (!contact) {
                return res.status(404).json({ message: 'Contact not found' });
            }
            res.json(contact);
        } catch (error) {
            next(error);
        }
    }

    async findAll(req: Request, res: Response, next: NextFunction) {
        try {
            const contacts = await this.service.findAll()
            res.json(contacts)
        } catch (error) {
            next(error);
        }
    }

    async delete(req: Request, res: Response, next: NextFunction) {
        try {
            const result = await this.service.delete(req.params.id as string)
            if (!result) {
                return res.status(404).json({ message: 'Contact not found' });
            }
            res.status(204).send();
        } catch (error) {
            next(error);
        }
    }
}
