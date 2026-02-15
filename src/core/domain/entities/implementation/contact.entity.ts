import { IContact, ICreateContact } from "../interfaces/contact.entity.interface";

export class Contact implements IContact {
    constructor(
        public readonly id: string,
        public readonly firstName: string,
        public readonly lastName: string | undefined,
        public readonly email: string,
        public readonly phone: string | undefined
    ) { }
}

export class CreateContact implements ICreateContact {
    constructor(
        public readonly firstName: string,
        public readonly lastName: string | undefined,
        public readonly email: string,
        public readonly phone: string | undefined
    ) { }
}
