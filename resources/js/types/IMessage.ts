import { IUser } from "./IUser";

export interface IMessage {
    id: number;
    user: IUser;
    receiver: IUser;
    message: string;
    read: boolean;
    read_at: string;
    sent_at: string;
    created_at: string;
    updated_at: string;
}
