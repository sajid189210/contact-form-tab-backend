import { IContactSchema } from "../../infrastructure/interface/contact.schema.interface";
import { Contact } from "../entities/implementation/contact.entity";
import { IContact } from "../entities/interfaces/contact.entity.interface";

export class ContactMapper {
    static toDomain(schema: IContactSchema): IContact {
        return new Contact(
            schema._id.toString(),
            schema.firstName,
            schema.lastName,
            schema.email,
            schema.phone
        );
    }
}
