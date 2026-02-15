import { ContactModel } from "../../../infrastructure/implementation/contact.schema"
import { IContactRepository } from "../interface/contact-repo.interface"
import { IContact, ICreateContact } from "../../entities/interfaces/contact.entity.interface"
import { IContactSchema } from "../../../infrastructure/interface/contact.schema.interface"
import { Model } from "mongoose";

export class ContactRepository implements IContactRepository {
    constructor(private readonly contactModel: Model<IContactSchema>) { }

    async create(contact: ICreateContact): Promise<IContactSchema> {
        return await this.contactModel.create(contact);
    }

    async update(id: string, contact: IContact): Promise<IContactSchema | null> {
        const { id: _, ...updateData } = contact;
        return await this.contactModel.findByIdAndUpdate(id, updateData, { new: true });
    }

    async findAll(): Promise<IContactSchema[]> {
        return await this.contactModel.find();
    }

    async delete(id: string): Promise<boolean> {
        const result = await this.contactModel.findByIdAndDelete(id);
        return !!result;
    }
}
