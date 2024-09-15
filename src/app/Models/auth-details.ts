export class AuthDetails {
    id!: number;
    fullName!: string;
    email!: string;
    username!: string;
    token!: string;
    roles: string[] = [];
}
