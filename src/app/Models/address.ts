import { ICoordinates } from './coordinates';

export interface IAddress{
    address: string;
    city: string;
    coordinates: ICoordinates
}