import { Document } from "mongoose";

export interface IContactSchema extends Document {
    firstName: string,
    lastName?: string,
    email: string,
    phone?: string
}