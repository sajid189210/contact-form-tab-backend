import { IContactSchema } from "../../../infrastructure/interface/contact.schema.interface";
import { IContact, ICreateContact } from "../../entities/interfaces/contact.entity.interface";

export interface IContactRepository {
    create(contact: ICreateContact): Promise<IContactSchema>
    update(id: string, contact: IContact): Promise<IContactSchema | null>
    findAll(): Promise<IContactSchema[]>
    delete(id: string): Promise<boolean>
}