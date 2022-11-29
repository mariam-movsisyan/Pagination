import { IAddress } from './address';

export interface IUser {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    gender: string;
    email: string;
    phone: string;
    birthDate: string,
    image: string,
    address: IAddress
}
