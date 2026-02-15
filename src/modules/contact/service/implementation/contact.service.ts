import { ContactMapper } from "../../../../core/domain/mappers/contact.mapper";
import { Contact, CreateContact } from "../../../../core/domain/entities/implementation/contact.entity";
import { IContact, ICreateContact } from "../../../../core/domain/entities/interfaces/contact.entity.interface";
import { IContactRepository } from "../../../../core/domain/repositories/interface/contact-repo.interface";
import { IContactService } from "../interface/contact-service.interface";

export class ContactService implements IContactService {
    constructor(private repository: IContactRepository) { }

    async create(data: ICreateContact): Promise<IContact> {
        const contact = new CreateContact(data.firstName.trim(), data.lastName?.trim(), data.email.trim(), data.phone?.trim())
        const schema = await this.repository.create(contact);
        return ContactMapper.toDomain(schema);
    }

    async update(id: string, data: IContact): Promise<IContact | null> {
        const contact = new Contact(id, data.firstName.trim(), data.lastName?.trim(), data.email.trim(), data.phone?.trim())
        const schema = await this.repository.update(id, contact);   
        return schema ? ContactMapper.toDomain(schema) : null;
    }

    async findAll(): Promise<IContact[]> {
        const schemas = await this.repository.findAll();
        return schemas.map(schema => ContactMapper.toDomain(schema));
    }

    async delete(id: string): Promise<boolean> {
        return await this.repository.delete(id);
    }
}
