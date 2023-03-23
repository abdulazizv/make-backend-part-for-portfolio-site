import { IsOptional, IsString } from "class-validator";

export class CreateUserDto {
    @IsString()
    readonly email:string;
    @IsString()
    readonly password:string;
    @IsString()
    readonly full_name:string;
    @IsString()
    readonly phone_number:string;
    @IsString()
    readonly cv_link:string;
    @IsOptional()
    @IsString()
    readonly birth_date: Date;
    @IsString()
    readonly address: string;
    @IsOptional()
    photo:string;
}
