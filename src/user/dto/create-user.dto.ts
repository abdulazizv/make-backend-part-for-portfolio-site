export class CreateUserDto {
    readonly email: string;
    readonly password: string;
    readonly full_name: string;
    readonly phone_number: string;
    readonly cv_link: string;
    readonly birth_date: Date;
    readonly address: string;
    photo: string;
}
