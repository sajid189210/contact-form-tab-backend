import { Schema, model } from 'mongoose'
import { SchemaEnum } from '../../enums/enums';
import { IContactSchema } from '../interface/contact.schema.interface';

const contactSchema = new Schema<IContactSchema>({
    firstName: { type: String, required: true },
    lastName: { type: String },
    email: { type: String, required: true },
    phone: { type: String }
});

export const ContactModel = model<IContactSchema>(SchemaEnum.Contact, contactSchema);
