import { IUser } from "./IUser";

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    auth: {
        user: IUser;
    };
};
