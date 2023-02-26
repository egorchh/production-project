export interface User {
    id: number,
    username: string
    password: string;
    error?: string;
}

export interface UserSchema {
    authData?: User;
}
