export interface IUser {
    _id?: number;
    name?: string;
    email?: string;
    password?: string;
    salt?: string;
    role?: number;
    region?: string;
    deleted_at?: Date;
    updated_at?: Date;
    created_at?: Date;
}
