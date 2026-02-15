import { IContact, ICreateContact } from "../../../../core/domain/entities/interfaces/contact.entity.interface"

export interface IContactService {
    create(data: ICreateContact): Promise<IContact>
    update(id: string, data: IContact): Promise<IContact | null>
    findAll(): Promise<IContact[]>
    delete(id: string): Promise<boolean>
}